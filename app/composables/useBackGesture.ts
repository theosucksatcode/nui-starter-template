import type { LocationQuery, Router } from "vue-router";

const QUERY_KEY = "overlay";

// top entry always gets popped first
const stack: (() => void)[] = [];
let pushed = 0; // history entries added so far
let syncing = false; // true while we push or pop ourselves so the route hook ignores it
let ready = false;

export function useBackGesture(active: Ref<boolean>, close: () => void) {
  const router = useRouter();

  onMounted(() => setup(router));

  watch(active, (isActive) => {
    if (isActive) stack.push(close);
    else remove(close);

    sync(router);
  });

  // the page was left while the overlay was still open
  onBeforeUnmount(() => {
    remove(close);
    sync(router);
  });
}

function remove(close: () => void) {
  const index = stack.indexOf(close);

  if (index !== -1) stack.splice(index, 1);
}

// makes the history entries match the open overlays
// looping so opens and closes that happen mid push are picked up
async function sync(router: Router) {
  if (syncing) return;
  syncing = true;

  try {
    while (pushed !== stack.length) {
      if (pushed < stack.length) {
        const query = {
          ...router.currentRoute.value.query,
          [QUERY_KEY]: String(pushed + 1),
        };
        const failure = await router.push({ query });

        if (failure) break;
        pushed++;
      } else {
        const count = pushed - stack.length;

        // set first so the route hook knows these pops are ours
        pushed = stack.length;
        await pop(router, count);
      }
    }
  } finally {
    syncing = false;
  }
}

// go back count entries and wait until the router has landed
// the timeout keeps a failed pop from blocking later syncs
function pop(router: Router, count: number) {
  return new Promise<void>((resolve) => {
    const stop = router.afterEach(() => {
      stop();
      resolve();
    });

    setTimeout(() => {
      stop();
      resolve();
    }, 500);

    router.go(-count);
  });
}

function removeParam(
  router: Router,
  route: { query: LocationQuery; hash: string },
) {
  const query = { ...route.query };

  delete query[QUERY_KEY];
  router.replace({ query, hash: route.hash });
}

// one hook for all overlays
function setup(router: Router) {
  if (ready) return;
  ready = true;

  router.afterEach((to) => {
    if (syncing) return;

    const depth = Number(to.query[QUERY_KEY] ?? 0);

    if (depth < pushed) {
      // the user went back or left the page so close from the top
      pushed = depth;
      while (stack.length > depth) stack.pop()?.();
    } else if (depth > pushed) {
      // nothing is open for this param
      // it came from a reload or the forward button
      removeParam(router, to);
    }
  });

  // same for a param that was already in the url when the page loaded
  const current = router.currentRoute.value;

  if (Number(current.query[QUERY_KEY] ?? 0) > pushed)
    removeParam(router, current);
}

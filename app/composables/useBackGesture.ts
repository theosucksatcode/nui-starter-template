const QUERY_KEY = "overlay";

// while active the device back gesture call close instead of leaving the page because opening pushes a history entry then the gesture pops it and closing any other way pops it too
export function useBackGesture(active: Ref<boolean>, close: () => void) {
  const route = useRoute();
  const router = useRouter();
  let pushed = false;

  watch(active, async (isActive) => {
    if (isActive) {
      const failure = await router.push({
        query: { ...route.query, [QUERY_KEY]: "1" },
      });

      if (failure) return;
      // the overlay was closed while the push was still running so the entry it added is now stale so remove it
      if (active.value) pushed = true;
      else router.back();
    } else if (pushed) {
      pushed = false;
      router.back();
    }
  });

  // the param disappearing means the gesture (or a navigation) took our entry away
  watch(
    () => route.query[QUERY_KEY],
    (value) => {
      if (!value && pushed) {
        pushed = false;
        close();
      }
    },
  );
}

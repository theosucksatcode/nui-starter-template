// returns true below the tablet breakpoint
export function useIsMobile() {
  const isMobile = ref(false);
  let query: MediaQueryList | undefined;

  const update = () => {
    isMobile.value = !!query?.matches;
  };

  onMounted(() => {
    const tablet = getComputedStyle(document.documentElement).getPropertyValue(
      "--breakpoint-tablet",
    );

    query = window.matchMedia(`(width < ${tablet.trim()})`);
    query.addEventListener("change", update);
    update();
  });

  onBeforeUnmount(() => query?.removeEventListener("change", update));

  return isMobile;
}

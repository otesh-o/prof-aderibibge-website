import { useEffect, useState, useSyncExternalStore } from "react";

const THRESHOLD = 24;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/**
 * True once the page has scrolled past a few pixels. The snapshot is a boolean, so React
 * re-renders subscribers only when it flips, not on every scroll event.
 */
export function useScrolled() {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > THRESHOLD,
    () => false,
  );
}

/**
 * True while the visitor is scrolling down past the top of the page, false as soon as they
 * scroll back up. Used to slide floating UI out of the way of the content on small screens.
 */
export function useScrollHidden(minY = 120, delta = 8) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastY;
      if (y < minY) setHidden(false);
      else if (diff > delta) setHidden(true);
      else if (diff < -delta) setHidden(false);
      if (Math.abs(diff) > delta) lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [minY, delta]);

  return hidden;
}

/**
 * The id of the section currently being read: the last one whose top has passed 40% of the
 * viewport height. Returns "" above the first section (the hero) and on pages that have none.
 */
export function useActiveSection(ids: readonly string[]) {
  return useSyncExternalStore(
    subscribe,
    () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
        else break;
      }
      return current;
    },
    () => "",
  );
}

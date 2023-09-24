import { useEffect, RefObject } from "react";

// eslint-disable-next-line no-unused-vars
type ClickOutsideHandler = (event: MouseEvent) => void;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: ClickOutsideHandler,
): void {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) return;

      handler(event);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

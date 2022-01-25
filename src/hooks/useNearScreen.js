import { useEffect, useRef, useState } from "react";

export function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      /* Load `IntersectionObserver` polyfill only on browsers that do not support this feature */
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];

        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      observer.observe(element.current);
    });
  }, [element]);

  return [show, element];
}

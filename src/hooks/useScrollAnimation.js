// src/hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from "react";

/**
 * Hook que retorna [ref, isVisible].
 * Aplica animação de entrada quando o elemento entra na viewport.
 *
 * @param {Object} options - Opções do IntersectionObserver
 * @param {number} options.threshold - 0 a 1 (padrão: 0.15)
 * @param {string} options.rootMargin - margem (padrão: "0px")
 * @param {boolean} options.once - animar só uma vez (padrão: true)
 */
export function useScrollAnimation({
  threshold = 0.15,
  rootMargin = "0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Apenas ativa em desktops (aparelhos com mouse e cursor)
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia("(pointer: coarse)").matches;
      
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Inicializa posições ocultas inicialmente até mover o mouse
    dot.style.opacity = "0";
    ring.style.opacity = "0";

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let hasMoved = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!hasMoved) {
        hasMoved = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        ringX = mouseX;
        ringY = mouseY;
      }
      
      // Movimenta o ponto central instantaneamente
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    // Animação com lerp (interpolação linear de 15%) para o anel externo ficar fluido
    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    const animFrame = requestAnimationFrame(render);

    // Efeitos de Hover nos links e botões
    const onMouseEnterInteractive = () => {
      ring.classList.add("scale-130", "bg-primary-light/10", "border-primary-light");
      dot.classList.add("scale-50", "bg-primary-light");
    };

    const onMouseLeaveInteractive = () => {
      ring.classList.remove("scale-130", "bg-primary-light/10", "border-primary-light");
      dot.classList.remove("scale-50", "bg-primary-light");
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea, .interactive-hover"
      );
      interactiveElements.forEach((el) => {
        // Evita duplicar listeners
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };

    addHoverListeners();

    // Re-adiciona listeners quando o DOM muda (ex: navegação ou novos elementos)
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
      observer.disconnect();
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea, .interactive-hover"
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Ponto Central */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 bg-primary-light dark:bg-accent rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden md:block"
      />
      {/* Anel Externo Fluido */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-gray-400/40 dark:border-white/20 rounded-full pointer-events-none z-[9998] transition-[width,height,background-color,border-color,transform] duration-300 ease-out hidden md:block"
      />
    </>
  );
}

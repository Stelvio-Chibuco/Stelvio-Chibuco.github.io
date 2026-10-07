import React, {useEffect, useRef, useState} from "react";

// Animação de entrada ao fazer scroll (substitui o react-reveal).
// Mostra o conteúdo assim que qualquer parte entra no ecrã, por isso
// funciona com secções mais altas do que o ecrã do telemóvel.
export function Fade({
  children,
  bottom,
  left,
  right,
  duration = 1000,
  distance = "20px",
  fraction = 0
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {threshold: fraction}
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [fraction]);

  let offset = "none";
  if (bottom) offset = `translate3d(0, ${distance}, 0)`;
  else if (left) offset = `translate3d(-${distance}, 0, 0)`;
  else if (right) offset = `translate3d(${distance}, 0, 0)`;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : offset,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`
      }}
    >
      {children}
    </div>
  );
}

export default Fade;

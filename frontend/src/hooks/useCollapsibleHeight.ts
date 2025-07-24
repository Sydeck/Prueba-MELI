// src/hooks/useCollapsibleHeight.ts
import { useRef, useState, useCallback, useEffect } from 'react';

export function useCollapsibleHeight(initialOpen = false, durationMs = 300, scrollOffset = 80) {
  const [open, setOpen] = useState(initialOpen);
  const [animating, setAnimating] = useState(false);
  const [maxH, setMaxH] = useState<string>(initialOpen ? 'auto' : '0px');
  const panelRef = useRef<HTMLDivElement>(null);
  const roRef = useRef<ResizeObserver>();

  // Observa cambios de tamaño mientras está abierto
  useEffect(() => {
    if (!panelRef.current) return;
    roRef.current = new ResizeObserver(entries => {
      if (!open || animating) return;
      const h = entries[0].contentRect.height;
      setMaxH(`${h}px`);
    });
    roRef.current.observe(panelRef.current);
    return () => roRef.current?.disconnect();
  }, [open, animating]);

  const toggle = useCallback(() => {
    const node = panelRef.current;
    if (!node) return;

    const opening = !open;
    setAnimating(true);

    if (opening) {
      // preparar para abrir
      setMaxH('0px');
      setOpen(true);

      requestAnimationFrame(() => {
        const h = node.scrollHeight;
        setMaxH(`${h}px`);

        // scroll una vez calculada la altura (próximo frame)
        requestAnimationFrame(() => {
          const top = node.getBoundingClientRect().top + window.scrollY - scrollOffset;
          window.scrollTo({ top, behavior: 'smooth' });
        });
      });
    } else {
      // cerrar
      const h = node.scrollHeight;
      setMaxH(`${h}px`);
      requestAnimationFrame(() => setMaxH('0px'));
    }
  }, [open, scrollOffset]);

  // Cuando termine la transición, “auto” si está abierto
  const onTransitionEnd = useCallback(() => {
    setAnimating(false);
    if (open) setMaxH('auto');
  }, [open]);

  return { open, toggle, panelRef, maxH, durationMs, onTransitionEnd };
}

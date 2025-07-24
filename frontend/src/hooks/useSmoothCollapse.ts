import { useRef, useState, useCallback } from 'react';

/**
 * Smoothly expands/collapses a block using max-height + opacity.
 * It also can auto-scroll after opening.
 */
export function useSmoothCollapse({
  initiallyOpen = false,
  scrollAfterOpen = true,
  scrollBlock: block = 'end',
}: {
  initiallyOpen?: boolean;
  scrollAfterOpen?: boolean;
  scrollBlock?: ScrollLogicalPosition;
} = {}) {
  const [open, setOpen] = useState(initiallyOpen);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) return;

    // OPEN
    if (!open) {
      panel.style.maxHeight = '0px';
      panel.style.opacity = '0';

      requestAnimationFrame(() => {
        const full = panel.scrollHeight;
        panel.style.maxHeight = `${full}px`;
        panel.style.opacity = '1';
      });

      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== 'max-height') return;
        panel.removeEventListener('transitionend', onEnd);
        if (scrollAfterOpen) {
          panel.scrollIntoView({ behavior: 'smooth', block });
        }
      };
      panel.addEventListener('transitionend', onEnd);
      setOpen(true);
      return;
    }

    // CLOSE
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    requestAnimationFrame(() => {
      panel.style.maxHeight = '0px';
      panel.style.opacity = '0';
    });
    setOpen(false);
  }, [open, scrollAfterOpen, block]);

  return { open, toggle, panelRef };
}

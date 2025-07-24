import { useState, useCallback, useEffect } from 'react';

export function useQuantity(initial: number = 1, max: number = 1) {
  const safeMax = Math.max(1, max); // Evita que max sea 0 o undefined
  const [qty, setQty] = useState<number>(Math.min(initial, safeMax));

  // Si max cambia, ajustamos qty automáticamente
  useEffect(() => {
    setQty(q => Math.min(q, safeMax));
  }, [safeMax]);

  const inc = useCallback(() => setQty(q => Math.min(safeMax, q + 1)), [safeMax]);
  const dec = useCallback(() => setQty(q => Math.max(1, q - 1)), []);
  const setSafe = useCallback((n: number) => setQty(Math.min(Math.max(1, n), safeMax)), [safeMax]);

  return { qty, setQty: setSafe, inc, dec, max: safeMax };
}

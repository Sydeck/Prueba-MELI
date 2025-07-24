import { useState, useCallback } from 'react';

export function useQuantity(initial: number, max: number) {
  const [qty, setQty] = useState(initial);

  const inc = useCallback(() => setQty(q => Math.min(max, q + 1)), [max]);
  const dec = useCallback(() => setQty(q => Math.max(1, q - 1)), []);
  const setSafe = useCallback((n: number) => setQty(Math.min(Math.max(1, n), max)), [max]);

  return { qty, setQty: setSafe, inc, dec, max };
}

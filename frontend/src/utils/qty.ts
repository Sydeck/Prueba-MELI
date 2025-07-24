export function buildQtyOptions(stock: number, hardLimit = 50) {
  const max = Math.min(stock, hardLimit);
  return Array.from({ length: max }, (_, i) => i + 1);
}

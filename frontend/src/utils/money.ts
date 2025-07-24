export const moneyFmt = (n: number) => {
  const [int, cents] = n.toFixed(2).split('.');
  return {
    int: int.replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
    cents,
  };
};

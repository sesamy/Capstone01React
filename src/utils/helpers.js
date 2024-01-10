//Date standardizer

//Price standardizer
export function priceFormatter(price) {
  const result = (Math.round(price * 100) / 100).toFixed(2);
  return `$${result}`;
}

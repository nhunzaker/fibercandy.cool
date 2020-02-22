export function toFixed(number, precision = 1) {
  return parseFloat(number.toFixed(precision));
}

export function toGrams(value) {
  return toFixed(value, 1) + "g";
}

export function tally(items, key) {
  return items.reduce((a, b) => a + b[key], 0);
}

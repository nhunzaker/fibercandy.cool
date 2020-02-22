export function toFixed(number, precision = 1) {
  if (typeof number === "number") {
    return parseFloat(number.toFixed(precision));
  } else {
    return number;
  }
}

export function toGrams(value) {
  return toFixed(value, 1) + "g";
}

export function tally(items, key) {
  return items.reduce(function(a, b) {
    if (typeof b[key] === "number") {
      return a + b[key];
    } else {
      return a;
    }
  }, 0);
}

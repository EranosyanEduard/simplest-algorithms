// Алгоритм получения числа Фибоначчи с определенным индексом.

/**
 * Calc a fibonacci number.
 * @param {number} num - Index of fibonacci number.
 * @returns {number} Fibonacci number or -1.
 */
function getFibonacciNumber(num) {
  if (typeof num === 'number' && Number.isInteger(num) && num > -1) {
    let a = 0, b = 1;
    for (let i = 0; i < num; i++) {
      const buffer = a;
      a = b, b += buffer;
    }
    return a;
  }
  return -1;
}

// Алгоритм получения числа Фибоначчи с определенным индексом.

/**
 * Calc a fibonacci number.
 * @param {number} num - Index of fibonacci number.
 * @returns {number} Fibonacci number or -1.
 */
function getFibonacciNumber(num) {
  if (typeof num === 'number' && Number.isInteger(num) && num > -1) {
    if (num < 2) return num;
    return getFibonacciNumber(num - 1) + getFibonacciNumber(num - 2);
  }
  return -1;
}

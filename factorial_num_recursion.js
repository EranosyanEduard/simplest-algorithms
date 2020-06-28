// Алгоритм получения факторила определенного числа.

/**
 * Calc factorial of number.
 * @param {number} num - Non-negative integer.
 * @returns {number} Factorial of number or -1.
 */
function getFactorialNumber(num) {
  if (typeof num === 'number' && Number.isInteger(num) && num > -1) {
    if (num < 2) return 1;
    return getFactorialNumber(num - 1) * num;
  }
  return -1;
}

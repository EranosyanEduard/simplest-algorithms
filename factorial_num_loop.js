// Алгоритм получения факторила определенного числа.

/**
 * Calc factorial of number.
 * @param {number} num - Non-negative integer.
 * @returns {number} Factorial of number or -1.
 */
function getFactorialNumber(num) {
  if (typeof num === 'number' && Number.isInteger(num) && num > -1) {
    let factorial = 1;
    for (num; num > 1; num--) factorial *= num;
    return factorial;
  }
  return -1;
}

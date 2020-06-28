// Алгоритм возведения числа 2 в степень n, n - неотрицательное целое число.

/**
 * Calc 2^n.
 * @param {number} n - Power of number.
 * @returns {number} 2^n or -1.
 */
function raisingTwoToPowerOfN(n) {
  if (typeof n === 'number' && Number.isInteger(n) && n > -1) {
    let result = 1;
    for (n; n > 0; n--) result *= 2;
    return result;
  }
  return -1;
}

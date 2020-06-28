// Алгоритм возведения числа 2 в степень n, n - неотрицательное целое число.

/**
 * Calc 2^n.
 * @param {number} n - Power of number.
 * @returns {number} 2^n or -1.
 */
function raisingTwoToPowerOfN(n) {
  if (typeof n === 'number' && Number.isInteger(n) && n > -1) {
    if (!n) return 1;
    return raisingTwoToPowerOfN(n - 1) * 2;
  }
  return -1;
}

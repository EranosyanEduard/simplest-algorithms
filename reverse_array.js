// Алгоритм изменения порядка элементов в массиве,
// посредством их расстановки в порядке, обратном по отношению к исходному.

/**
 * Reverse array.
 * @param {Array} arr - Array of elements.
 */
function reverseArray(arr) {
  const lastIndex = arr.length - 1;
  for (let i = 0; i < (lastIndex / 2); i++) {
    let buffer = arr[i];
    arr[i] = arr[lastIndex - i];
    arr[lastIndex - i] = buffer;
  }
}

// Алгоритм сортировки массива методом выбора элемента.

/**
 * Sort array in ascending order of elements.
 * @param {Array<number>} numbers - Array of numbers.
 */
function selectSort(numbers) {
  lastIndex = numbers.length - 1;

  for (let i = lastIndex; i > 0; i--) {
    // numberOfChanges позволит контролировать количество изменений, которые
    // произошли со значениями свойств объекта maxElement в рамках текущей
    // итерации, чтобы в случае равенства значений переменных i и numberOfChanges
    // "выйти" из цикла.
    let numberOfChanges = 0;
    const maxElement = { value: numbers[0], index: 0 };
    for (let j = 1; j <= i; j++) {
      if (numbers[j] > maxElement.value) {
        maxElement.value = numbers[j];
        maxElement.index = j;
        numberOfChanges++;
      }
    }

    if (numberOfChanges === i) break;
    numbers[maxElement.index] = numbers[i];
    numbers[i] = maxElement.value;
  }
}

// Алгоритм сортировки массива методом пузырька.

/**
 * Sort array in ascending order of elements.
 * @param {Array<number>} numbers - Array of numbers.
 */
function bubleSort(numbers) {
  const lastIndex = numbers.length - 1;

  for (let i = 0; i < lastIndex; i++) {
    // numberOfChanges позволит контролировать количество перестановок элементов
    // в рамках текущей итерации, чтобы в случае их отсутствия "выйти" из цикла.
    let numberOfChanges = 0;

    for (let j = 0; j < (lastIndex - i); j++) {
      if (numbers[j] > numbers[j + 1]) {
        let buffer = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = buffer;
        numberOfChanges++;
      }
    }

    if (!numberOfChanges) break;
  }
}

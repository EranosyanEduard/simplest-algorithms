""" Алгоритм удаления определенного элемента из массива """

ERROR_MSG = 'Ошибка: недействительное значение. Повторите ввод.'

# Определить размер массива.
list_length = 0
while True:
    is_error = False
    try:
        list_length = int(input('Введите значение размера массива: '))
    except ValueError:
        is_error = True
    if list_length < 1 or is_error:
        print(ERROR_MSG)
    else:
        break

# Инициализировать массив.
numbers = [0] * list_length

# Заполнить массив элементами - целыми числами.
i = 0
while i < list_length:
    try:
        INPUT_MSG = 'Введите значение {} элемента массива: '.format(i + 1)
        numbers[i] = int(input(INPUT_MSG))
    except ValueError:
        print(ERROR_MSG)
        continue
    i += 1

# Удалить элементы массива, значение которых равно 0.
i = 0
while i < list_length:
    if numbers[i] == 0:
        j = i
        while j < (list_length - 1):
            numbers[j] = numbers[j + 1]
            j += 1
        list_length -= 1
    else:
        i += 1

# Отобразить на экране элементы массива.
i = 0
while i < list_length:
    print(numbers[i])
    i += 1

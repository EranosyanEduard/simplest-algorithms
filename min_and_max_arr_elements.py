""" Алгоритмы поиска наименьшего и наибольшего элементов массива """


def get_info_about_min_element(numbers: list) -> dict:
    """ Функция ожидает на вход массив, элементами которого являются числа,
    осуществляет поиск наименьшего элемента и возвращает словарь, содержащий
    индекс и значение такого элемента """
    min_element_info = {'index': 0, 'value': numbers[0]}
    for i in range(1, len(numbers)):
        if (numbers[i] < min_element_info['value']):
            min_element_info['index'] = i
            min_element_info['value'] = numbers[i]
    return min_element_info


def get_info_about_max_element(numbers: list) -> dict:
    """ Функция ожидает на вход массив, элементами которого являются числа,
    осуществляет поиск наибольшего элемента и возвращает словарь, содержащий
    индекс и значение такого элемента """
    max_element_info = {'index': 0, 'value': numbers[0]}
    for i in range(1, len(numbers)):
        if (numbers[i] > max_element_info['value']):
            max_element_info['index'] = i
            max_element_info['value'] = numbers[i]
    return max_element_info


try:
    LIST_OF_NUMBERS = list(map(
        float,
        input('Заполните массив значениями действительных чисел: ').split()
    ))
    print('Исходный массив:', LIST_OF_NUMBERS)
    print('Наименьший элемент:', get_info_about_min_element(LIST_OF_NUMBERS))
    print('Наибольший элемент:', get_info_about_max_element(LIST_OF_NUMBERS))
except ValueError:
    print('Ошибка: недействительное значение элемента массива.')

""" Алгоритм проверки числа на соответствие определению совершенного числа """


def is_perfect_number(number: int) -> bool:
    """ Функция ожидает на вход целое число и осуществляет его проверку на
    соответствие определению совершенного числа, возвращая логическое значение """
    if isinstance(number, int) and number > 5:
        sum_of_num_divisors = 1
        for divisor in range(2, number//2+1):
            if number % divisor == 0:
                sum_of_num_divisors += divisor
        if number == sum_of_num_divisors:
            return True
    return False


try:
    integer = int(input('Введите значение целого числа: '))
    print('Число{}является совершенным.'.format(
        ' ' if is_perfect_number(integer) else ' не '
    ))
except ValueError:
    print('Ошибка: недействительное значение целого числа.')

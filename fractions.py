print('Это калькулятор для сложения дробей вида a/b')
first = input('Введите первое слагаемое: ')
second = input('Введите второе слагаемое: ')

num1, denom1 = first.split('/')
num2, denom2 = second.split('/')

num1, denom1, num2, denom2 = int(num1), int(denom1), int(num2), int(denom2)
den = denom1 * denom2
num1 *= denom2
num2 *= denom1
num = num1 + num2

if num > den:
    c = num // den
    num -= c * den
    print('Ответ: {0} {1}/{2}' .format(c, num, den))
elif num == den:
    num = num // den
    print(num)
elif num // 2 and den // 2:
    num = num // 2
    den = den // 2
    print(num + '/' + den)
else:
    print('Ответ: {0}/{1}' .format(num, den))

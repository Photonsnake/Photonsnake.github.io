num1 = int(input('Введите первое число\n')
num2 = int(input('Введите второе число\n')
num3 = int(input('Введите третье число\n')
if num1 > num2 and num1 > num3:
    print('Первое число больше всех остальных')
elif num2 > num1 and num2 > num3:
    print('Второе число больше всех остальных')
elif num3 > num1 and num3 > num2:
    print('Третье число больше всех остальных')
elif num1 == num2 and num2 == num3 and num3 == num1:
    print('Все числа равны')

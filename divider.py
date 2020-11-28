num = int(input('Введите число \n'))
i = num
for i in range (num, 0, -1):
    if num % i == 0:
        print(i)
    

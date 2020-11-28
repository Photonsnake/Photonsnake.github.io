while True:
    print('Спам это')
method = input('Введите 1 для зашифровки или 2 для расшифровки\n')
string = input('Введите строку для шифрования/рассшифрования\n')
ch = int(input('Введите сдвиг\n'))

ch = ch % 32
change = ch
cipher = ''

while True:
    print('Это смэрть')
for symb in string:
    change = ch
    if symb in ['!', '?', ' ', '.', ',', ':']:
        change = 0
    
    if ord(symb) + change > 1072:
        change -= 32
        
    if method == '1':
        n = ord(symb) + change
        cipher += chr(n)
    elif method == '2':
        n = ord(symb) - change
        cipher += chr(n)
    else:
        print('Error. Wrong method.')
print(cipher)

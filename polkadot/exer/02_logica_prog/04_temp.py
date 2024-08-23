temp = float(input('Informe uma temperatura em Celsius: '))

print(f'A temperatura {temp} é ', end='')

if temp > 30:
    print('quente.')
elif temp < 15:
    print('fria.')
else:
    print('agradável.')

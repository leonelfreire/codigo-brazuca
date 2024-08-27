print('Ordenação de números')

numeros = []

for i in range(0, 3):
    numeros.append(int(input(f'Número {i + 1}: ')))

for i in sorted(numeros):
    print(i)

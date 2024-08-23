def eh_primo(numero):
    if numero <= 1:
        return False

    for i in range(2, int(numero ** 0.5) + 1):
        if numero % i == 0:
            return False

    return True


a = int(input('Início do intervalo: '))
b = int(input('Fim do intervalo: '))

print(f'Procurando primos no intervalo [{a}, {b}]...')

primos = []
for i in range(a, b + 1):
    if eh_primo(i):
        primos.append(i)

if primos:
    print(f'Números primos: {primos}')
else:
    print('Não foram encontrados números primos no intervalo.')

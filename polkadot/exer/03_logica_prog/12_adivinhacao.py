import random

print('Adivinhe o número')

s = random.randint(1, 100)

while True:
    n = int(input('Digite um número: '))

    if n == s:
        print(f'Você acertou! O número era {s}.')
        break

    if n < s:
        print('Tente um número maior!')
    else:
        print('Tente um número menor!')

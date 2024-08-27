print('Palíndromo')

frase = input('Digite uma frase: ')

print(f'A frase "{frase}" ', end='')

if frase.lower() == frase[::-1].lower():
    print('é um palíndromo.')
else:
    print('não é um palíndromo.')

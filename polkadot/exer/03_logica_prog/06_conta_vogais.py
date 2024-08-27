print('Conta vogais')

frase = input('Digite uma frase: ')

total = {v: frase.lower().count(v) for v in 'aeiou'}

for k, v in total.items():
    print(f'A vogal {k} aparece {v} vezes.')

frase = input('Digite uma frase: ')
letra = input('Digite uma letra: ')
total = frase.lower().count(letra.lower())

if total:
    print(f'A letra "{letra}" aparece {total} vezes em "{frase}".')
else:
    print(f'A letra "{letra}" não aparece em "{frase}".')

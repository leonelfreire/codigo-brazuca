print('Média de notas')

notas = []

while True:
    nota = float(input('Digite uma nota: '))

    if nota < 0:
        break

    notas.append(nota)

if notas:
    print(f'Média das notas: {sum(notas) / len(notas)}.')

print('Cálculo de IMC')

peso = float(input('Peso em kg: '))
altura = float(input('Altura em m: '))

imc = peso / (altura ** 2)

print(f'IMC: {imc:.2f}')

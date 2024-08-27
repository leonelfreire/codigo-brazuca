print('Análise de números')

numeros = []

while True:
    inp = input("Digite um número ou 'sair': ")

    if inp.lower() == 'sair':
        break

    numeros.append(float(inp))

numeros.sort()

if numeros:
    numeros.sort()
    print(f'Maior número: {numeros[-1]}')
    print(f'Menor número: {numeros[0]}')

    if len(numeros) > 1:
        print(f'Média dos números: {sum(numeros) / len(numeros):.2f}')
else:
    print("Nenhum número foi inserido.")

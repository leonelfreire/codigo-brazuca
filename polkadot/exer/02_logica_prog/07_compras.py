lista = []

print('Lista de compras')
while True:
    item = input("Digite um novo item ou 'sair': ")

    if item == 'sair':
        break

    lista.append(item)

print('Sua lista de compras é:')
for item in lista:
    print(f'  * {item}')

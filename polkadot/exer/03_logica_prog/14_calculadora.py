print('Calculadora')

calc = {
    '+': lambda x, y: x + y,
    '-': lambda x, y: x - y,
    '*': lambda x, y: x * y,
    '/': lambda x, y: x / y if y != 0 else 'Erro: Divisão por zero.',
}

n1 = float(input('Número 1: '))
n2 = float(input('Número 2: '))
op = input('Operação [+, -, * ou /]: ')

if op in calc:
    print(f'{n1} {op} {n2} = {calc[op](n1, n2)}')
else:
    print(f'Operador desconhecido: {op}')

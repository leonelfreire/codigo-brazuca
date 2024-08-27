print('Verifica número perfeito')

def divisores(n):
    return [i for i in range(1, n) if n % i == 0]

n = int(input('Digite um número: '))

if n == sum(divisores(n)):
    print(f'{n} é um número perfeito.')
else:
    print(f'{n} não é um número perfeito.')

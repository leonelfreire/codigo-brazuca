print('Sequência de Fibonacci')

def fibo(n, termos={}):
    if n < 0:
        raise ValueError('O número de termos deve ser positivo.')

    if n in termos:
        return termos[n]

    if n == 0:
        return 0

    if n == 1:
        return 1

    termos[n] = fibo(n - 1, termos) + fibo(n - 2, termos)
    return termos[n]

n = int(input('Digite o número de termos: '))

for i in range(0, n):
    print(fibo(i), end=' ')

print()

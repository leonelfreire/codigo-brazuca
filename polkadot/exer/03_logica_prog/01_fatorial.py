print('Cálculo de fatorial')

def fatorial(n):
    if n < 0:
        raise ValueError("Fatorial não é definido para números negativos.")

    if 0 <= n <= 1:
        return 1

    total = 1
    for i in range(2, n + 1):
        total *= i;

    return total

n = int(input('Digite um número: '))

print(f'{n}! = {fatorial(n)}')

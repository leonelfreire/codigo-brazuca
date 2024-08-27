print('Conversão de temperatura')

def to_fahr(c):
    return (c * 9/5) + 32

def to_kelv(c):
    return c + 273.15

c = float(input('Informe uma temperatura em Celsius: '))

print(f'A temperatura {c} ºC equivale a {to_fahr(c)} ºF e {to_kelv(c)} K.')

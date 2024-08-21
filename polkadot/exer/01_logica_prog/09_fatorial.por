programa {
  funcao inicio() {
    inteiro num, fat = 1

    escreva("Número inteiro positivo: ")
    leia(num)

    para(inteiro i = 1; i <= num; i++) {
      fat = fat * i
    }

    escreva("O fatorial de ", num, " é ", fat)
  }
}

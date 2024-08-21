programa {
  funcao inicio() {
    inteiro num, total = 0

    para(inteiro i = 0; i < 5; i++) {
      escreva("Digite um número: ")
      leia(num)

      se (num > 0) {
        total++
      }
    }

    escreva("Quantidade de números positivos: ", total)
  }
}

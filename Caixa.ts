class caixa {
  //declaração de atributo
  nome = 'Bianca'
  nomeSuper = 'Supermercado da Bia 0/'



  //localização: entre os atributos e os métodos. 
  constructor(nomeSP: string, num: number, nome: string) {
    console.log("-----------------------------------")
    nomeSP = this.nomeSuper
    console.log(nomeSP)
    console.log("\nO número do caixa é: ", num)
    nome = this.nome
    console.log("Nome da atendente:", nome)
    console.log("-----------------------------------")

  }
  //declaração de método
  bemvindo() {
    console.log("\nOlá, você está no caixa.")
    console.log("Iniciando a passagem das suas compras")
  }

  passagem(cod: number) {
    let i = 0

    for (i = 0; i < 3; i++) {
      console.log("\nbip-bip")
    }

    console.log("\nCompras passadas com sucesso!")
    console.log("O cod da compra é de:", cod, "\n")
    console.log("------------------------------------------------------")
  }

  pagamento() {
    const v = 30
    if (v <= 30) {
      console.log("O único pagamento que está disponível é em dinheiro")
      console.log("------------------------------------------------------")

    } else {
      console.log("Pagamento disponível no cartão")
      console.log("-----------------------------------")
    }
  }

}

export default caixa

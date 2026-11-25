/*Exercício do slide 31: ContaBancaria (15 min)

Crie uma classe ContaBancaria com:

Atributos: titular e saldo (que inicia em 0)
Método depositar(valor): soma o valor ao saldo
Método sacar(valor): subtrai do saldo, mas só se tiver saldo suficiente. Se não tiver, exibe "Saldo insuficiente"
Método extrato(): exibe o titular e o saldo, no formato do slide 31 (Titular ${nome} e Saldo: R$ ${valor})

Teste criando uma conta, depositando 500, sacando 200 e mostrando o extrato.

Evolução: transformar em módulo e separar a definição da classe da execução.

🗺️ Parte A: tudo num arquivo só
Crie conta-bancaria.js dentro de semana-05.
A classe: constructor que recebe só o titular. O saldo não vem de fora: ele sempre começa em 0.
depositar(valor): some o valor ao saldo. (Lembra do atalho de atribuição da Semana 2?)
sacar(valor): use um if / else. Pergunte: "o saldo cobre esse valor?" Se sim, subtraia. Se não, mostre a mensagem. Atenção ao caso limite: sacar exatamente o saldo deve ser permitido?
extrato(): mostre o titular e o saldo com crases e ${ }.
Teste no final do arquivo, seguindo o enunciado: new, depositar(500), sacar(200) e extrato().*/

class ContaBancaria {
    constructor(titular){
        this.titular = titular;
        this.saldo = 0;
    }

depositar(saldo) {
    this.saldo = this.saldo + saldo //atalho +=. É a mesma coisa que escrever this.saldo = this.saldo + valor.
}

sacar(saldo) {
    if(this.saldo >= saldo) {
        this.saldo = this.saldo - saldo //atalho -=, é a mesma coisa que escrever this.saldo - saldo.
    } else {
            console.log("Saldo insuficiente")
        }
}

extrato() {
    console.log(`Titular ${this.titular} e saldo ${this.saldo}`);
}
}

module.exports = ContaBancaria;

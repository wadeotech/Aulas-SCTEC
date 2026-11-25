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

const minhaConta = new ContaBancaria("Ana");
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.extrato();

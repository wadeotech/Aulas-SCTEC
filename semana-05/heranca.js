/*Exercício: Este vai em heranca.js, dentro de semana-05:
Crie a classe Veiculo com marca e ano no constructor, e o método ligar(), que mostra "[marca] ligado".
Crie Carro extends Veiculo, vazia ({}). Crie um carro com new e chame ligar(). De onde veio o constructor?
Crie Moto extends Veiculo com um método próprio, empinar(). Crie uma moto e chame ligar() e empinar().
Tente chamar empinar() em um Carro. Que erro aparece? Por quê?
Altere a mensagem do ligar() só na classe Veiculo. Chame ligar() no carro e na moto: o que acontece?
Em comentários, diga para cada par se é herança ou composição (teste do "é um" / "tem um"):
Gerente / Funcionário
Pedido / Cliente
Carro / Motor
Aluno / Pessoa
*/

class Veiculo {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }

ligar() {
    console.log(`${this.marca} ligado`)
}
}

class Carro extends Veiculo {}

const carro = new Carro("Fiat", 2020);

carro.ligar();

class Moto extends Veiculo {
    empinar() {
        console.log(`Moto marca ${this.marca} está empinando!` );
    }
}

const moto = new Moto("Honda", 2025);

moto.ligar();
moto.empinar();




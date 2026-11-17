/*
Exercício do slide 22: Pizza (15 min)

Crie uma classe Pizza com:

Atributos: sabor, tamanho (P, M ou G) e borda (true ou false)
Método calcularPreco() que retorna o preço pelo tamanho: P = R$ 25, M = R$ 35, G = R$ 50. Se tiver borda recheada, soma R$ 8.
Método resumo() que exibe todas as informações e o preço final: Pizza ${tamanho} com/sem borda custará R$ ${valor} reais
*/

//A classe e o constructor: crie class Pizza com um constructor que recebe sabor, tamanho e borda e guarda os três no objeto com this.

class Pizza {
    constructor (sabor, tamanho, borda) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.borda = borda;
    }

    calcularPreco() {

    // Guarde o preço numa variável dentro do método.
        let preco = 0

    // Decida o preço pelo tamanho. Os valores são exatos (P, M, G), então qual estrutura da Semana 2 se encaixa melhor?
        switch (this.tamanho) {
            case "P": preco = 45;
            break;
            case "M": preco = 60;
            break;
            case "G": preco = 90;
            break;
        }
// Se a pizza tiver borda, some 8. (Lembre: borda já é true ou false, então dá para usá-la direto no if.)

        if (this.borda) {
            preco = preco + 8
        }

        return preco
    }

/*resumo():
Chame this.calcularPreco() para pegar o valor.
Monte a frase do enunciado com crases e ${ }. Para escolher entre “com” e “sem” borda, qual operador curto de uma linha da Semana 2 serve? */
    
    resumo() {
        const total = this.calcularPreco();

        const textoBorda = this.borda ? "com" : "sem";

        console.log(`Pizza de ${this.sabor}, ${this.tamanho}, ${textoBorda} borda - R$ ${total}`);
    }

}

const pizza1 = new Pizza("Calabresa", "G", true);
const pizza2 = new Pizza("Mussarela", "P", false);

console.log(pizza1.resumo());
console.log(pizza2.resumo());


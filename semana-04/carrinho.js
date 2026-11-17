//1.Crie o array carrinho com 3 objetos (nome, preco e quantidade)
const carrinho = [
    {nome:"calça", preco: 49, quantidade: 10},
    {nome:"camisa", preco: 69, quantidade: 8},
    {nome:"sapato", preco: 150, quantidade: 5}
]

//2.Com .map(): Crie resumoItens formatando cada item como "${item.quantidade}x ${item.nome} - R$ ${item.preco}" e mostre no console.log().

const resumoItens = carrinho.map( item => `${item.quantidade}x ${item.nome} - R$ ${item.preco}`);
console.log(resumoItens.join("\n"));

//3.Com .filter(): Crie itensCaros pegando apenas quem tem preco >= 100 e mostre no console.log().
const itensCaros = carrinho.filter( item => item.preco >= 100);
console.log(itensCaros);

//4.Com .reduce(): Crie valorTotal multiplicando item.preco * item.quantidade e somando ao acumulador (começando em 0), e mostre no console.log().
const valorTotal = carrinho.reduce((total, item) => 
    {return total + ((item.quantidade * item.preco));
 }, 0);

 console.log(valorTotal);
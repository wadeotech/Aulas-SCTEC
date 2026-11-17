const precos = [20, 150, 80, 300];

//Com for, mostre cada preço com a numeração: Preço 1: R$ 20, Preço 2: R$ 150
for(let i = 0; i < precos.length; i++) {
    console.log(`Preço ${i + 1}: R$ ${precos[i]}`);
}

//Com forEath, mostre cada preço com a numeração: Preço 1: R$ 20, Preço 2: R$ 150

precos.forEach((preco, i) => {
    console.log(`Preço ${i + 1}: ${preco}`)
})

//Outra forma de escrever
precos.forEach((preco, i) => {
    console.log("Preço" + (i + 1) + " : " + preco)
})

//Com for, calcule o total dos preços. Dica: crie uma variável fora do laço, começando em 0, e vá somando dentro dele. Mostre o total no final.
let valorFinal = 0;

for(let i = 0; i < precos.length; i++) {
    valorFinal = valorFinal + precos[i]
}

console.log(valorFinal);

//Com for, mostre só os preços acima de 100. Dica: o que você aprendeu na Semana 2 e que decide o que mostrar?
for(let i = 0; i < precos.length; i++) {
    if (precos[i] < 100) {
        console.log(precos[i])}
}

//Quebre de propósito: troque o < por <= no item 1 e observe o que aparece no final. Depois conserte.
for(let i = 0; i <= precos.length; i++) {
    console.log(`Preço ${i + 1}: R$ ${precos[i]}`);
}

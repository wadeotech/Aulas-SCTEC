//Exercício 1 (slide 73, 10 min): Pode votar?

//Crie um programa que verifica uma data de nascimento (string) para decidir se, com base na idade, a pessoa pode votar, deve votar ou não pode votar.

const dataNascimento = "2000-05-15";

// Para transformar tipo de string para number usa o Number antes da expressão.

// Para etrair o ano desta string usamos .slice() O que ele faz: extrair um pedaço do texto.

const anoDeNascimento = Number (dataNascimento.slice(0,4));

//A expressão new Date().getFullYear() em JavaScript retorna 2026 (o ano atual com quatro dígitos baseado no horário local do sistema)
const anoAtual = new Date().getFullYear();

const idade = anoAtual - anoDeNascimento;

console.log ("Ano de Nascimento:" + anoDeNascimento);
console.log ("Ano Atual:" + anoAtual);
console.log ("Sua idade é:" + idade);

/*Regra do voto no Brasil (a lógica que você vai implementar)
Idade	Situação
Menos de 16	Não pode votar
16 e 17	Pode votar (voto facultativo)
18 a 69	Deve votar (voto obrigatório)
70 ou mais	Pode votar (voto facultativo)*/

if (idade >= 16 && idade <= 17) {
    console.log ("Pode votar. O voto é facultativo");}
else if (idade >= 18 && idade <= 69){
    console.log ("Deve votar. Voto obrigatório")
}
else {
    console.log ("Pode votar. O voto é facultativo")
};

 
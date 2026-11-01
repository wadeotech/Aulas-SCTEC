//Exercício proposto:

//Crie um programa que verifica uma data de nascimento (string) onsiderando dia, mês e ano para decidir se, com base na idade, a pessoa pode votar, deve votar ou não pode votar.

const dataNascimento = "1975-07-10";

// Para transformar tipo de string para number usa o Number antes da expressão.

// Para extrair o ano desta string usamos .slice() O que ele faz: extrair um pedaço do texto.

const anoDeNascimento = Number (dataNascimento.slice(0,4));

// getMonth() começa em 0 (janeiro), por isso o - 1
const mesNascimento = Number ((dataNascimento.slice(5,7)) -1);

const diaNascimento = Number (dataNascimento.slice(8,10));

//A expressão new Date().getFullYear() em JavaScript retorna o ano atual, com quatro dígitos baseado no horário local do sistema
const anoAtual = new Date().getFullYear();
const mesAtual = new Date().getMonth();
const diaAtual = new Date().getDate();

//console.log (anoAtual);
//console.log (mesAtual);
//console.log (diaAtual);

let idade = anoAtual - anoDeNascimento;

if (mesNascimento > mesAtual || (mesNascimento === mesAtual && diaNascimento > diaAtual)) {
    idade--
}

console.log ("Data do seu nascimento: " + dataNascimento);
console.log ("Sua idade atual é: " + idade + " anos");

/*Regra do voto no Brasil (a lógica que você vai implementar)
Idade	Situação
Menos de 16	Não pode votar
16 e 17	Pode votar (voto facultativo)
18 a 69	Deve votar (voto obrigatório)
70 ou mais	Pode votar (voto facultativo)*/

if (idade <= 15) {
    console.log ("Não pode votar. Não tem idade mínima");
} else if ((idade >= 16 && idade <= 17) || idade >= 70) {
    console.log ("Pode votar. O voto é facultativo");
} else {
    console.log ("Deve votar. O voto é obrigatório");
}

 
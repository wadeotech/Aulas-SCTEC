const input = require('prompt-sync')();
let nome = input ("Seu nome: ");
let idade = input ("Sua idade: ");

console.log ("Olá " + nome + ", você tem " + idade + " anos de idade " + ". Daqui a 10 nos, voce terá " + (idade + 10) + " anos");
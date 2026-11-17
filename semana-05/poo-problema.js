// 1.Crie 3 livros como objetos literais, cada um com titulo, autor e paginas.

const livro1 = {titulo: "Dom Casmurro", autor: "Machado de Assis", paginas: 256};
    
const livro2 = {titulo: "1984", autro: "George Orwell", paginas: 416};
    
const livro3 = {titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", paginas: 96};

//2.Agora imagine que a biblioteca quer o campo ano em todos. Adicione o ano nos 3 e mostre os 3 no console.

livro1.ano = 1899;
livro2.ano = 1949;
livro3.ano = 1943;

console.log(livro1);
console.log(livro2);
console.log(livro3); 

//Em um dos livros, escreva autor errado de propósito (por exemplo, autro). Mostre livro2.autor. O que aparece? O programa avisou o erro?

console.log(livro2.autor);
//o resultado: No terminal da undefined

/*
4.Responda em um comentário: o que aconteceria com 100 livros?
Resposta: Se tivesse que acrescentar caracteristica vai ser muito trabalhoso corrigir em todos. També se cometer algum erro de digitação o sistema não avisa e vai retornar undefined.
*/
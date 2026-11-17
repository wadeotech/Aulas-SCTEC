const fila = ["Ana", "Bruno", "Carla"];

//Acrescenta Diego no fim do array / lista
fila.push("Diego");
console.log(fila);

//Acrescenta Zeca no inicio do Array / lista
fila.unshift("Zeca");
console.log(fila);

//Remove primeiro nome do array
const removePrimeiroNome = fila.shift();
console.log(removePrimeiroNome)

//Remove último nome do array
const removeUltimoNome = fila.pop();
console.log(removeUltimoNome);

//Mostra array que sobrou
console.log(fila);

//Verificar se Carla está na lista
console.log(fila.includes("Carla"));

//Verifica qual o indice de carla
console.log(fila.indexOf("Carla"));

//Verifica o indice de um nome que não está na lista
console.log(fila.indexOf("Zeca"));

const numeros = [10,9,1,100];

//Verificar que erro sort() vazio devolve
numeros.sort();
console.log(numeros);

//Ordenar do menor para o maior
numeros.sort((a,b) => a - b);
console.log(numeros);

//Mostre a fila em uma linha só, com os nomes separados por " - ".
fila.join("-");
console.log(fila);

//Mostre a fila invertida.
fila.reverse();
console.log(fila);

//Preencher a lista numeros com "1"
numeros.fill(1);
console.log(numeros);

//Retroenar o último nome da lista "fila" usando "at"
console.log(fila.at(-1));

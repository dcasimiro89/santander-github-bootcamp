let nome = "Deivison";
let sobrenome = "Casimiro";
let fullName = `Nome completo: ${nome} ${sobrenome}`;
console.log(fullName);

// typeof nome => retornar o tipo da variável

nome.concat(sobrenome); // retorna DeivisonCasimiro
nome.length; // retorna o tamanho da string

let exemplo = new String("blablabla"); // objeto

let vazio = ""; // string vazio
nome[1]; // retorna o indice da String, vai retornar E

let concatenado = nome + " " + sobrenome;
concatenado = nome + "\n" + sobrenome; // quebra de linha
let escape = "\"";

let frase = "Olá, tudo bem?"
frase.split(""); // vai separar os argumentos da String [retornando como uma lista]
frase.split(" "); // vai separar por palavras
frase.includes("tudo");
frase.startsWith("O");
frase.endsWith("R");
frase.replace(",", "!");
let stringModificada = frase.replace(",", "!");

// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";

const empregado1: {codigo: number, nome: string} = {
    codigo: 3,
    nome: 'Deivison'
};

const empregado2 = {
    codigo: 32,
    nome: 'João'
}

interface Empregado {
    codigo: number,
    nome: string
}

const deivison: Empregado = {
    codigo: 33,
    nome: 'Deivison'
}
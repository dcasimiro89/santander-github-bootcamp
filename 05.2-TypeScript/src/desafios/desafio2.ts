// Como podemos melhorar o esse código usando TS? 

interface Pessoas {
    nome: string
    idade: number
    profissao: Profissoes
}

enum Profissoes {
    Padeiro,
    Atriz
}

let julia: Pessoas = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissoes.Atriz
};


let roberto: Pessoas = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissoes.Padeiro
};

let laura: Pessoas = {
    nome: "Laura",
    idade: 32,
    profissao: Profissoes.Atriz
};

let carlos: Pessoas = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
};
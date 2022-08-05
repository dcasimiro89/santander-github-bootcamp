"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Padeiro"] = 0] = "Padeiro";
    Profissoes[Profissoes["Atriz"] = 1] = "Atriz";
})(Profissoes || (Profissoes = {}));
let julia = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissoes.Atriz
};
let roberto = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissoes.Padeiro
};
let laura = {
    nome: "Laura",
    idade: 32,
    profissao: Profissoes.Atriz
};
let carlos = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
};

"use strict";
let botao = document.getElementById('button');
let inputOne = document.getElementById('input1');
let inputTwo = document.getElementById('input2');
function adicionandoNumero(num1, num2) {
    return num1 + num2;
}
if (botao) {
    botao.addEventListener('click', () => {
        if (inputOne && inputTwo) {
            console.log(adicionandoNumero(Number(inputOne.value), Number(inputTwo.value)));
        }
    });
}

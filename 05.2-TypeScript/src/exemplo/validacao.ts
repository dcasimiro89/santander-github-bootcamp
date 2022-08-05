let botao = document.getElementById('button');
let inputOne = document.getElementById('input1') as HTMLInputElement;
let inputTwo = document.getElementById('input2') as HTMLInputElement;

function adicionandoNumero(num1: number, num2: number) {
    return num1 + num2;
}

if (botao) {
    botao.addEventListener('click', () => {
        if (inputOne && inputTwo) {
            console.log(adicionandoNumero(Number(inputOne.value), Number(inputTwo.value)));
        }
    })
}
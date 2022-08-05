//adicionando o : number na função, não permite errar forçando a função ser completamente number
function somarValoresDefinida(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

// sem adicionar o number, permitiria o retorno numero2.toString() a funcionar normalmente [somando numero com string que é errado]
/*
function somaValores(numero1: number, numero2: number) {
    return numero1 + numero2.toString();
}
*/
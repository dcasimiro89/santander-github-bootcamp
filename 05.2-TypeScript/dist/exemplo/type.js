"use strict";
function somarValoresType(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValoresType(1, 5));
console.log(somarValoresType('Ola', ', tudo bem?'));
console.log(somarValoresType('que dia é hoje: ', 5));
/*
function somarValores2(input1:number | string, input2: number | string) {  // parâmetro for número (|)ou string
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString + input2.toString();
    } else {
        return input1 + input2;
    }
}
*/ 

const PRECO = 2; // valor que não altera
var desconto = 0.2;
var total;

total = PRECO - desconto;


function soma(a, b) {
    return a + b;
}

soma(3, 5);

console.log("Hello world!");

// =================================================

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par`);
        }
    }
    console.log("Os números pares são:" ,evenNums);
}

let array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array);
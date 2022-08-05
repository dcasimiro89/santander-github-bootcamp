function filtraPares(arr) {
    return arr.filter();
}

//ou
// function filtraPares(arr) {
//     return arr.filter(function(item) {
//         return item % 2 === 0;
// }

function callback(item) {
    return item % 2 === 0; // !== para ser ímpar
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filterPares(meuArray));
"use strict";
let valorAny;
valorAny = 3;
valorAny = 'Deivison';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'textão';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('Olá,', ' tudo bem?');

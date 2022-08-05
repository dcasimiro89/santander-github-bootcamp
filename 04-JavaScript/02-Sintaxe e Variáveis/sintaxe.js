function conferirNumeros(n1, n2) {
    var soma = n1 + n2;
    if (n1 === n2) {
        console.log("Sim, os números" ,n1 , " e ", n2 );
    } else if (n1 !== n2 && soma < 10 && soma < 20) {
        console.log(`Input:  ${n1} e ${n2}`);
        console.log(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma},
        que é menor que 10 e menor que 20.`);
    }          
}

conferirNumeros(2, 4);
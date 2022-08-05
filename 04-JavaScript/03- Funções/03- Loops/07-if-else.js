function numeroPositivo(num) {
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;
}

numeroPositivo(2)
// true

numeroPositivo(-4)
// false

// ============ ou

function numeroPositivo(num) {
    let resultado;

    const ehNegativo = num < 0;

    if (ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;
}

// ============ ou

function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if (ehNegativo) {
        return false;
    }
    return true;
}

// ===================================

function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if (ehNegativo) {
        return "Esse número é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!";
    }
    return "Esse número é positivo!"
}
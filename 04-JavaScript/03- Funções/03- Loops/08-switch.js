function getAnimal(id){
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3: 
            return "pássaro";
        default:
            return "peixe";
    }
}

getAnimal(1) // cão
getAnimal(4) // peixe
getAnimal("1") // peixe

// Equivale a uma comparação de tipo e valor (===)
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Bruna',
	idade: 35,
};

const pessoa2 = {
	nome: 'Deivison',
	idade: 33,
};

const animal = {
	nome: 'Hunter',
	idade: 3,
    raca: 'Golden',
};

console.log(calculaIdade.call(animal, 10));
console.log(calculaIdade.apply(pessoa2, [24]));
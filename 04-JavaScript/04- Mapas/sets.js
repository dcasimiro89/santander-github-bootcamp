const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
	let mySet = new Set(arr);
	return [...mySet];
}



console.log(uniqueElements(meuArray));
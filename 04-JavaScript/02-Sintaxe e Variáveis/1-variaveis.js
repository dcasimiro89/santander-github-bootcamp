var firstName = "Deivison";
var lastName = "Casimiro";

if (firstName === "Deivison"){
   var firstName = "Geraldo" ; // variável global
   let lastName = "Silva"; // variável de bloco
   console.log(firstName, lastName);
}

console.log(firstName, lastName);

//hoisting: declarar antes de utilizar
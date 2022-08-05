// autoinvocável
// IIFE(immediately Invoked Function Expression)

(
    function() {
        let name = "Deivison Savio Casimiro"
        return name;
    }
)();

(
    function(a, b) {
        return a + b;
    }
)(1, 2);

const soma3 = (
    function() {
        return a + b;
    }
)(1, 2);
console.log(soma3)

let num = parseInt(prompt("Introduce un número:"));
if (num % 2 === 0) {
    document.write(`${num} es divisible por 2`);
} else if (num % 3 === 0) {
    document.write(`${num} es divisible por 3`);
} else if (num % 5 === 0) {
    document.write(`${num} es divisible por 5`);
} else if (num % 7 === 0) {
    document.write(`${num} es divisible por 7`);
} else {
    document.write(`${num} no es divisible por 2, 3, 5 o 7`);
}

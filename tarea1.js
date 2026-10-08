/* datos
magdalena moccio
dni 42393867
*/

const prompt = require("prompt-sync")()

// ejercicio 1
console.log("Ejercicio 1");

let respuesta1 = "";
let numero = Number(prompt("Ingrese un numero: "));

if (numero === 0) {
    respuesta1 = "Es un cero!";
} else if (numero > 0) {
    respuesta1 = "Es positivo!";
} else {
    respuesta1 = "Es negativo!";
}

console.log(respuesta1);

// ejercicio 2
console.log("Ejercicio 2");

let respuesta2 = "";
let a = Number(prompt("Ingrese un numero: "));
let b = Number(prompt("Ingrese otro numero: "));
let c = Number(prompt("Ingrese un numero mas: "));

if (a === b && b === c) {
    respuesta2 = "Es un triangulo equilatero!";
} else if (a === b || a === c || b === c) {
    respuesta2 = "Es un triangulo isosceles!";
} else {
    respuesta2 = "Es un triangulo escaleno!";
}
console.log(respuesta2);

// ejercicio 3
console.log("Ejercicio 3");

let respuesta3 = "";
let edad = Number(prompt("Ingrese su edad: "));

if (edad < 12) {
    respuesta3 = "Sos un niño";
} else if (edad < 18) {
    respuesta3 = "Sos adolescente";
} else if (edad < 64) {
    respuesta3 = "Sos adulto";
} else {
    respuesta3 = "Sos adulto mayor";
}
console.log(respuesta3);

// ejercicio 4
console.log("Ejercicio 4");
let respuesta4 = "";
let numerito = Number(prompt("Ingrese un numero: "));

if (numerito % 2 === 0) {
    respuesta4 = "Es par";
} else {
    respuesta4 = "Es impar";
}
console.log(respuesta4);

// ejercicio 5
console.log("Ejercicio 5");
let respuesta5 = "";
let nota = Number(prompt("Ingrese su nota: "));

if (nota > 89) {
    respuesta5 = "Equivale a una A";
} else if (nota > 79) {
    respuesta5 = "Equivale a una B";
} else if (nota > 69) {
    respuesta5 = "Equivale a una C";
} else if (nota > 59) {
    respuesta5 = "Equivale a una D";
} else {
    respuesta5 = "Equivale a una F";
}
console.log(respuesta5);

// ejercicio 6
console.log("Ejercicio 6");
let respuesta6 = "";
let num1 = Number(prompt("Ingrese un numero: "));
let num2 = Number(prompt("Ingrese otro numero: "));

if (num1 === num2) {
    respuesta6 = "Los numeros son iguales";
} else {
    respuesta6 = Math.max(num1, num2) + " es el mayor";
}
console.log(respuesta6);

// ejercicio adicional
console.log("Ejercicio adicional");
let respuesta7 = "";
let numero1 = Number(prompt("Ingrese un numero: "));
let numero2 = Number(prompt("Ingrese otro numero: "));
let numero3 = Number(prompt("Ingrese un numero mas: "));

if (numero1 === numero2 && numero2 === numero3) {
    respuesta7 = "Los tres numeros son iguales";
} else {
    respuesta7 = Math.max(numero1, numero2, numero3) + " es el mayor";
}
console.log(respuesta7);
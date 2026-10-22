/* datos
magdalena moccio
dni 42393867
*/

const prompt = require("prompt-sync")()

// ejercicio 1
console.log("Ejercicio 1");
const frutas = ["manzana", "banana", "pera", "naranja"]
for (let i = 0; i < frutas.length; i++) {
    console.log(i + ": " + frutas[i])
}

// ejercicio 2
console.log("Ejercicio 2");
frutas.push("kiwi");
frutas.unshift("sandía");
frutas.shift();
frutas.pop();
console.log("Arreglo final:", frutas);

// ejercicio 3
console.log("Ejercicio 3");
let numero = Number(prompt("Ingrese un numero: "));
const numeros = [10, 20, 30, 40, 50]
let respuesta3 = "El numero NO esta"
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) {
        respuesta3 = "El numero esta!"
    }
}
console.log(respuesta3)

// ejercicio 4
console.log("Ejercicio 4");
const arregloNumeros = [1, 2, 3, 2, 4, 2, 5]
let contador = 0
for (let i = 0; i < arregloNumeros.length; i++) {
    if (arregloNumeros[i] === 2) {
        contador++
    }
}
console.log("El 2 aparece " + contador + " veces")

// ejercicio 5
console.log("Ejercicio 5");
const arreglo5 = [5, 12, 8, 20, 3, 15]
const nuevoArreglo = []
for (let i = 0; i < arreglo5.length; i++) {
    if (arreglo5[i] > 10){
        nuevoArreglo.push(arreglo5[i])
    }
}
console.log("El nuevo arreglo queda: " + nuevoArreglo)

// ejercicio 6
console.log("Ejercicio 6");
const nombres = ["Magda", "Sebastian", "Felipe", "Justina"]
const nuevoNombres = []
for (let i = nombres.length - 1; i >= 0; i--) {
    nuevoNombres.push(nombres[i])
}
console.log("Arreglo inverso " + nuevoNombres)

// ejercicio 7
console.log("Ejercicio 7");
const precios = [150.50, 42.00, 300.25, 89.99, 15.00];
let acumulador = 0;
for (let precio of precios) {
    acumulador = acumulador + precio
}
let promedio = acumulador / precios.length;
console.log("Gasto total: ", acumulador);
console.log("Precio promedio: ", promedio);

// ejercicio 8
console.log("Ejercicio 8");
const numerosMatriz = [[2, 65, -55], 
                       [1000, 0, 88], 
                       [-13, 89, 67]]
let sumaAbsoluta = 0
for (let i = 0; i < numerosMatriz.length; i++) {
    for (let j = 0; j < numerosMatriz[i].length; j++) {
        sumaAbsoluta = sumaAbsoluta + numerosMatriz[i][j]
    }
}
console.log("La suma de la matriz es " + sumaAbsoluta)

// ejercicio 9
console.log("Ejercicio 9");
const oceano = [["~", "~", "~"],
                ["~", "B", "~"],
                ["~", "~", "~"]]
let f = 0
let c = 0
for (let f = 0; f < oceano.length; f++) {
    for (let c = 0; c < oceano[f].length; c++) {
        if (oceano[f][c] === "B") {
            console.log("El barco esta en la fila " + f + " y en la columna " + c)
        }
    }
}
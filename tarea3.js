/* datos
magdalena moccio
dni 42393867
*/

const prompt = require("prompt-sync")()

const calculadora = {
    a: 0,
    b: 0,

    ingresarUno: function() {
        this.a = Number(prompt("Ingrese un numero: "))
    },

    ingresarDos: function() {
        this.a = Number(prompt("Ingrese el primer numero: "))
        this.b = Number(prompt("Ingrese el segundo numero: "))
    },

    sumar: function() {
        return this.a + this.b
    },

    restar: function() {
        return this.a - this.b
    },

    multiplicar: function() {
        return this.a * this.b
    },

    dividir: function() {
        let resultado = "Error: No se puede dividir por cero"
        if (this.b !== 0) {
            resultado = this.a / this.b
        }
        return resultado
    },

    potencia: function() {
        return Math.pow(this.a, 2)
    },

    raizCuadrada: function() {
        let resultado = "Error: No se puede calcular la raiz cuadrada de un numero negativo"
        if (this.a >= 0) {
            resultado = Math.sqrt(this.a)
        }
        return resultado
    },

    iniciar: function() {
        console.log("---------------------------------");
        console.log("Bienvenido a la calculadora");
        let opcion = ""
        while (opcion !== "7") {
            console.log("---------------------------------");
            console.log("Seleccione una opcion:");
            console.log("1. Sumar");
            console.log("2. Restar");
            console.log("3. Multiplicar");
            console.log("4. Dividir");
            console.log("5. Potencia");
            console.log("6. Raiz cuadrada");
            console.log("7. Salir");
            opcion = prompt("Ingrese una opcion: ");

            // opcion invalida
            if (opcion < "1" || opcion > "7") {
                console.log("Opcion invalida, elija una opcion del 1 al 7");
            } else { // opcion valida
                if (opcion === "7") {
                    console.log("---------------------------------");
                    console.log("Saliendo de la calculadora...");
                    console.log("Gracias por usar la calculadora, hasta luego!");
                    console.log("---------------------------------");
                } else {
                    switch(opcion) {
                        case "1":
                            this.ingresarDos()
                            const resultadoSuma = this.sumar()
                            console.log("El resultado de la suma es: " + resultadoSuma)
                            break;
                        case "2":
                            this.ingresarDos()
                            const resultadoResta = this.restar()
                            console.log("El resultado de la resta es: " + resultadoResta)
                            break;
                        case "3":
                            this.ingresarDos()
                            const resultadoMultiplicacion = this.multiplicar()
                            console.log("El resultado de la multiplicacion es: " + resultadoMultiplicacion)
                            break;
                        case "4":
                            this.ingresarDos()
                            const resultadoDivision = this.dividir()
                            console.log("El resultado de la division es: " + resultadoDivision)
                            break;
                        case "5":
                            this.ingresarUno()
                            const resultadoPotencia = this.potencia()
                            console.log("El resultado de la potencia al cuadrado es: " + resultadoPotencia)
                            break;
                        case "6":
                            this.ingresarUno()
                            const resultadoRaizCuadrada = this.raizCuadrada()
                            console.log("El resultado de la raiz cuadrada es: " + resultadoRaizCuadrada)
                            break;
                    }
                }
            }
        }
    }
}

calculadora.iniciar()
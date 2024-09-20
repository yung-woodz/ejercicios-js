const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// Imprimir en consola el número mayor de los tres.

let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}

console.log(mayor);

// Imprimir en consola el número menor de los tres.

let menor;

if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1;
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2;
} else {
    menor = numero3;
}

console.log(menor);

// Imprimir en consola si el numero1 es par o impar.

if(numero1 % 2 == 0) console.log("Es par");
else console.log("Es impar");

// Imprimir en consola si el numero2 es par o impar.

if(numero2 % 2 == 0) console.log("Es par");
else console.log("Es impar");

// Imprimir en consola si el numero3 es par o impar.

if(numero3 % 2 == 0) console.log("Es par");
else console.log("Es impar");

// Imprimir en consola si el numero1 es múltiplo de 5.

if(numero1 % 5 == 0) console.log("Es multiplo de 5");
else console.log("No es multiplo de 5");

// Imprimir en consola si el numero2 es múltiplo de 5.

if(numero2 % 5 == 0) console.log("Es multiplo de 5");
else console.log("No es multiplo de 5");

// Imprimir en consola si el numero3 es múltiplo de 5.

if(numero3 % 5 == 0) console.log("Es multiplo de 5");
else console.log("No es multiplo de 5");
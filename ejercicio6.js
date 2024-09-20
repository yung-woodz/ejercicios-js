// 1. Crea una función que reciba un string y retorne el string en mayúsculas.

function mayus(cadena){
    return cadena.toUpperCase();
}

const cadenita1 = mayus("hola");
console.log(cadenita1);


// 2. Crea una función que reciba un string y retorne el string en minúsculas.

console.log("");
function minus(cadena){
    return cadena.toLowerCase();
}

const cadenita2 = minus("HOLA");
console.log(cadenita2);

// 3. Crear una función que reciba como parámetro 2 números y los reste.

console.log("");
function resta(nro1, nro2){
    return nro1 - nro2;
}

const resultado1 = resta(2, 1);
console.log(resultado1);

// 4. Crear una función que reciba como parámetro 2 números y los divida.

console.log("");
function division(nro1, nro2){
    return nro1 / nro2;
}

const resultado2 = division(8, 2);
console.log(resultado2);

// 5. Crear una función que reciba como parámetro 2 números y los multiplique.

console.log("");
function multiplicacion(nro1, nro2){
    return nro1 * nro2;
}

const resultado3 = multiplicacion(8, 2);
console.log(resultado3);

// 6. Crear una función que reciba un string y devuelva la longitud del string.

console.log("");
function longitud(cadena){
    return cadena.length;
}

const cadenita3 = longitud("Renato");
console.log(cadenita3);
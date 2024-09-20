// 1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.

function suma(arreglo){
    
    let total = 0;
    for(let i = 0; i < arreglo.length; i++) total+=arreglo[i];

    return total;
}

const numeros1 = [1, 2, 3, 4, 5];
const resultado1 = suma(numeros1);
console.log(resultado1);

// 2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.

console.log("")
function promedio(arreglo){
    
    let total = 0;
    for(let i = 0; i < arreglo.length; i++) total+=arreglo[i];

    return total / arreglo.length;
}

const numeros2 = [1, 2, 3, 4, 5];
const resultado2 = promedio(numeros2);
console.log(resultado2);

// 3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.

console.log("")
function mayus(arreglo){
    
    return arreglo.map(arreglo => arreglo.toUpperCase());

}

const cadenasArray = ["hola", "didudo", "que tal"];
const resultado3 = mayus(cadenasArray);
console.log(resultado3);

// 4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.

console.log("")
function numeritos(arreglo){
    
    return arreglo.filter(nro => nro % 2 === 0);

}

const numeros3 = [1, 2, 3, 4, 5];
const resultado4 = numeritos(numeros3);
console.log(resultado4);
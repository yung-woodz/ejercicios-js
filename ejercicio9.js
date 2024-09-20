const usuario = {
    nombre: 'Dilan',
    apellido: 'Toro',
    edad: 22,
    direccion: {
      calle: 'Los Fresnos',
      numero: 123,
      ciudad: 'Concepción',
      pais: 'Chile'
    },
    contactos: {
      telefono: '9209247672',
      email: 'dilantoro@example.com',
      redesSociales: {
        linkedin: '@yung.wo0odz',
      }
    },
    intereses: ['Hacking', 'Inteligencia Artificial', 'Twitch']
};


// 1. Utiliza desestructuración para extraer las propiedades `nombre`, `apellido` y `ciudad` del objeto `usuario`.

console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.direccion.ciudad);
console.log("");

// 2. Extrae el primer interés del arreglo `intereses` en una variable llamada `primerInteres`.

const primerInteres = usuario.intereses[0];
console.log(primerInteres);
console.log("");

// 3. Extrae el `email` y `linkedin` de los contactos del usuario.

console.log(usuario.contactos.email);
console.log(usuario.contactos.redesSociales.linkedin);
console.log("");

// 4. Extrae `calle` y `numero` de la dirección, pero renómbralos como `calleUsuario` y `numeroUsuario`.

const calleUsuario = usuario.direccion.calle;
const numeroUsuario = usuario.direccion.numero;

console.log(calleUsuario);
console.log(numeroUsuario);
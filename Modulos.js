const saludos = require('./saludos.js');

console.log(saludos.saludar('Karl King'));
console.log(saludos.holaMundo());

// Para llamar una function especifica del modulo se pude usar una sintaxis de restructuracion {  }
//Ejemplo vamos a llamar solo la function holaMundo si queremos lalmar las 2 solo es usarla separada de ,
const {holaMundo} = require('./saludos.js');
console.log(holaMundo());
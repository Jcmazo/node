//FS es un modulo de sistemas de archivos, se puede usar como sincrono y asincrono
//Primero se incluye el modulo
const fs = require('fs');

//Para leer un archico 
fs.readFile('index.html','utf-8',(err,contenido) => {
 if(err){
  throw err;
 }
  console.log(contenido);
});

//Para cambiar nombre de un archivo
fs.rename('main.html', 'index.html', (err) => {
  if (err) {
    throw err;
  }
console.log('Nombre cambiado con exito')
});

//Agregar contenido a final de un archivo
fs.appendFile('index.html', '<p>Hola</p>', (err) => {
  if (err){
    throw err;
  }
  console.log('Archivo actulizado...');
});

//Remplazar todo el contenido del archivo 
fs.writeFile('index.html', 'Contenido nuevo', (err) => {
  if (err){
    throw err;
  }
  console.log('Contenido remplazado');
});

//Elimniar archivos
fs.unlink('main.html', (err) =>{
  if (err){
    throw err;
  }
  console.log('Archivo elimindado');
});
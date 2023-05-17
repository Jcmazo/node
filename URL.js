//Estrutura de una URL Modulo

const miURL = new URL('httos://www.ejemplo.org/cursos/progrmacion?ordenar=vistas&nivel=1');

//Nombre de host
console.log(miURL.hostname);

//Camino
console.log(miURL.pathname);

//Query o parametos de busqueda no va traer un Object
console.log(miURL.searchParams);
//acediendo a los parametros del Object
console.log(miURL.searchParams.get('ordenar'));
console.log(miURL.searchParams.get('nivel'));

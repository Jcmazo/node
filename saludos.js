function saludar(nombre){
    return `Hola, ${nombre}`;
}

function holaMundo(){
    return '!Hola, Mundo';
}

//Exportar funciones de Modulos 
//module.exports.saludar = saludar;
//module.exports.holaMundo = holaMundo;

//Alternatica para funciones de Modulos 
module.exports= {
    saludar: saludar,
    holaMundo: holaMundo
};
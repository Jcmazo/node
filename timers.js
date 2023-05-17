//setTimeout se usa para retrasos de verificacion en el servidor 
function mostarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
  }
  
  //resive como parametros primero la function, despues milesegundos de retraso, argumentos
  setTimeout(mostarTema, 1000, 'Node.js');
  
  //setImmediate  leda prioridad de forma inmediata una vez el codigo sincrono se alla terminado
  function mostarTemaImmediate(tema){
    console.log(`Estoy aprendiendo ${tema}`)
  }
  
  //resive como parametros primero la function los argumentos
  setImmediate(mostarTemaImmediate,'Nodeeee.js')
  
  //setInterval ejecuta codigo con retrraso un numero infinito de veces 
  function mostarTemaInterval(tema){
    console.log(`Estoy aprendiendo ${tema}`)
  }
  
  //resive como parametros primero la function, despues intervalo de milisegundos que se va mostrar, argumentos
  setInterval(mostarTemaInterval, 1500, 'Hola Wey')
//routint sinifica majenar las solicutudes del cliente del navegador, en base en 2 criterios el metodo y el camino

const http = require('http');

//Se instacia modulo cursos
const cursos = require('./cursos');

//Se crea el servidor
const sevidor = http.createServer((req, res) =>{
//Se estarte metodo de la solicitud
const metodo = req.method;

//Se determina que va ocurrir con ese metodo
switch(metodo){
  case 'GET' :
    return manejarSolicitudGET(req, res);
  case 'POST':
    return manejarSolicitudPOST(req, res); 
  case 'PUT':
      return manejarSolicitudPUT(req, res); 
  case 'DELETE':
        return manejarSolicitudDELETE(req, res);       
  default:
    res.statusCode = 501;
    res.end(`El metodo no puede ser manejado en el servidor: ${metodo}`)
}

function manejarSolicitudGET(req, res){
  const path = req.url;
  
  //Estamos diciendo si el camino esta en la paguina principal
  if(path=='/'){
    return res.end('Bienvenido a mi primer servidor y API creados con Node.js')
  }
  //Estamos diciendo si el camino es curso
  else if(path === '/cursos'){
    return res.end(JSON.stringify(cursos.infoCursos));
  }
  //Para obtener un curso en especifico
  else if(path === '/cursos/programacion'){
    return res.end(JSON.stringify(cursos.infoCursos.progrmacion));
  }

  res.statusCode = 404;
  return res.end('El recurso solicitado no existe...');

}

});

function manejarSolicitudPOST(req, res){
  const path = req.url;

  if(path === '/cursos/programacion'){
    
    let cuerpo = '';
    
    //Para añadir
    req.on('data',contenido =>{
      cuerpo += contenido.toString();
    });

    req.on('end',() => {
      console.log(cuerpo);
      console.log(typeof cuerpo);

      //Aqui lo cambiamos a un  Objecto de javascript
      cuerpo = JSON.parse(cuerpo);
      console.log(typeof cuerpo);
      console.log(cuerpo.titulo);

      return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    })
     // return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
  }
}

function manejarSolicitudPUT(req, res){
  const path = req.url;

  if(path === '/cursos/programacion'){
      return res.end('El servidor recibio una solicitud PUT para /cursos/programacion')
  }
  else{
    res.statusCode = 404;
    return res.end('El recurso solicitado no existe...');
  }
}

function manejarSolicitudDELETE(req, res){
  const path = req.url;

  if(path === '/cursos/programacion'){
      return res.end('El servidor recibio una solicitud DELETE para /cursos/programacion')
  }
}

//Se asigna numero de puerto
const PUERTO = 3000;

//Se escucha el servidor
sevidor.listen(PUERTO, () =>{
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});
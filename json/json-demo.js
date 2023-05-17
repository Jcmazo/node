//const curso = require ('./curso.json'); // Mostrando Object JSON
//console.log(curso);

let infoCurso={
    "titulo": "Aprende Node.js",
    "nunVistas": 45642,
    "numLikes": 21123,
    "temas":[
      "JavaScript",
      "Node.js"
    ],
    "esPublico": true
  };

  // estamos pasando la informacion de Object a cadena de Texto
  let infoCursoJSON = JSON.stringify(infoCurso);
  console.log(infoCursoJSON);
  console.log(typeof infoCursoJSON)

  // estamos pasando la informacion de cadena de Texto a Object
  let infoCursoObjeto=  JSON.parse(infoCursoJSON);
  console.log(infoCursoObjeto);

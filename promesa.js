const estatusPedido = () =>{
    const estatus = Math.random() < 0.8;
    return estatus;
  };
  
  const miPedidoDePizza = new Promise((resolve , reject) => {
    setTimeout(()=>{
      if (estatusPedido()){
        resolve('Pedido exito si pizza esta en camino');
      }else{
        reject('Pedido rechazado...');
      }
    }, 3000);
  });
  
  
  /* const manejarPedido= (mensajeDeConfirmacion) =>{
    console.log(mensajeDeConfirmacion);
  };
  
  const rechazarPedido= (mensajeDeEror) =>{
    console.log(mensajeDeEror);
  };
   */
  
  miPedidoDePizza
  .then((mensajeDeConfirmacion)=>{
    console.log(mensajeDeConfirmacion);
  })
  .catch((mensajeDeEror)=>{
    console.log(mensajeDeEror);
  });
  
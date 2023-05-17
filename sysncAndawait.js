function ordenarProducto(producto){
    return new Promise((resolve,reject) =>{
      console.log(`Ordenando: ${producto} de freeCodeCmap`);
      setTimeout(() => {
        if (producto === 'taza'){
          resolve('Producto ordenado')
        }else {
          reject('Producto rechazado')
        }
      },2000);
    });
  }
  
  function procesarPedido(respuesta){
    return new Promise(resolve =>{
      console.log('Procesando respuesta..');
      console.log(`La respuesta fue; "${respuesta}"`);
      setTimeout(() => {
        resolve('Gracias por tu compra difruta tu producto')
      },4000)
    })
  }
  
  /* ordenarProducto('taza')
  .then(respuesta => {
    console.log('Respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta);
  }).then(respuestaProcesada =>{
    console.log(respuestaProcesada);
  }).catch(error => {
    console.log(error)
  }) */
  
  async function relaizarPedido(producto){
    try{
      const respuesta = await ordenarProducto(producto);
      console.log('Respuesta recibida');
      console.log(respuesta)
      const respuestaProcesada = await procesarPedido(respuesta);
      console.log(respuestaProcesada);
    }catch (error){
      console.log(error);
    }
  }
  
  relaizarPedido('taza');
//Modulo Process vamos a recorrer un arreglo 
for (let i= 2; i < process.argv.length; i++){
    console.log(process.argv[i])
}

//Para saber cuanta memoria se esta usando 
console.log(process.memoryUsage());
function writeAndLog(text, callback){
    console.log(text);
    callback(null, 'File write succesfully')
}

writeAndLog('Gracias Francisco. Ny rules!', (error, mensaje) =>{
    const fecha = new Date().toLocaleDateString()
    if(error){
        console.error(`${fecha}:Se presento un error`)
    }else{
        console.log(`${fecha}: ${mensaje}`);
    }
    
})
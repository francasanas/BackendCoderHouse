function hacerTarea(num,cb){
    console.log('haciendo tarea', num);
    return new Promise((resolve, reject) => {
        
        setTimeout(resolve(1), 400)
    })
}
console.log('incio de tarea');
(async function(){
    await hacerTarea(1)
    await hacerTarea(2)
    await hacerTarea(3)
    await hacerTarea(4)

    console.log('fin de tarea')
})

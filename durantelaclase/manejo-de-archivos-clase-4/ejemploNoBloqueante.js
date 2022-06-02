function hacerTarea(num,cb){
    console.log('haciendo tarea', num);
    return new Promise((resolve, reject) => {
        
        setTimeout(resolve(1), 400)
    })
}
console.log('incio de tarea');

hacerTarea(1, ()=>{
    hacerTarea(2, ()=>{
        hacerTarea(3, ()=>{
            hacerTarea(4, ()=>{
                console.log('fin de tarea');
            })
        })
    })
})
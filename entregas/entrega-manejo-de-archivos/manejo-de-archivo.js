const fs=require('fs')

const productos = [];
class Archivo{
    constructor(nombre){
        this.nombre=nombre  
    }

    async leer(){
        try{
            let st= await fs.promises.readFile(this.nombre, 'utf-8')  
            return st
        }catch(err){
            console.error([])
        }
    }
    async guardar(producto){
        try{
            productos.push(producto)
            await fs.promises.writeFile(this.nombre, JSON.stringify(productos, null, '\t'))
            return producto.id
        }catch(err){
            console.error('No se pudo guardar: ' + err)
        }
    }
    async borrar(){
        try{
            await fs.promises.unlink(this.nombre, (err)=>{
                if(err) return console.log('Error archivo borrado: ' + err)
            })
        }catch(err){
            console.error('Error archivo borrado: ' + err)
        }
    }
}
const archivo = new Archivo('./productos.txt')
archivo.guardar({
    title: 'remeras', 
    price: 1000, 
    thumbnail: 'https://i.imgur.com/yo2QIDw.jpg',
    id:productos.length + 1
})
archivo.guardar({
    title: 'anillo', 
    price: 2000, 
    thumbnail: 'https://i.imgur.com/tgYSPkj.jpg',
    id:productos.length + 1
})
archivo.guardar({
    title: 'pollera', 
    price: 1500, 
    thumbnail: 'https://i.imgur.com/m2LLMql.jpg',
    id:productos.length + 1
})
archivo.leer()

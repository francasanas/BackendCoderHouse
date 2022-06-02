const fs = require('fs');

const productos =[
    {
        id: 1,
        nombre: 'Camisa',
        precio: 20,
        descripcion: 'Camisa de manga corta',
        thumbnail:"https://www.mismarcas.com/wp-content/uploads/2018/10/camisa-manga-corta-1.jpg"
    },
    {
        id: 2,
        nombre: 'Pantalon',
        precio: 30,
        descripcion: 'Pantalon de manga larga',
        thumbnail:"https://www.mismarcas.com/wp-content/uploads/2018/10/pantalon-manga-larga-1.jpg"
    },
    {
        id: 3,
        nombre: 'Zapatos',
        precio: 40,
        descripcion: 'Zapatos de talle 42',
        thumbnail:"https://www.mismarcas.com/wp-content/uploads/2018/10/zapatos-42-1.jpg"
    }
]

fs.writeFileSync("./src/data/productos.txt", JSON.stringify(productos));


class Container {
    constructor(){
        this.productos = [];
    }
    getAll(){
        let data = fs.readFileSync("./src/data/productos.txt");
        data = JSON.parse(data);
        this.productos.push(data);
        return this.productos;
    }
    getRandomProduct(){
        let data = fs.readFileSync('./src/data/productos.txt');
        data = JSON.parse(data);
        let randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    }
}

module.exports=Container
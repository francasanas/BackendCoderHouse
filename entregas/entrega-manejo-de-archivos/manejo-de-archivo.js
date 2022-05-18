const fs = require('fs');

const productos = [
    {
        id: 1,
        nombre: "telefono",
        precio: 1000,
        thumbnail: "https://blog.movical.net/wp-content/uploads/2019/11/encontrar-el-archivo-boot.img-en-un-tel%C3%A9fono-Huawei-min-1024x1024.jpg"
    },
    {
        id: 2,
        nombre: "computadora",
        precio: 3000,
        thumbnail: "https://www.cetrogar.com.ar/media/catalog/product/c/m/cm3251.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds"
    },
    {
        id: 3,
        nombre: "tablet",
        precio: 2000,
        thumbnail: "https://www.musicalisimo.com.ar/public/images/productos/grande/producto_4279_1.jpg"
    }
];

fs.writeFileSync("./productos.txt", JSON.stringify(productos));
let data = fs.readFileSync("./productos.txt", "utf-8");
data = JSON.parse(data);

class Contenedor {
    constructor(productos) {
        this.productos = productos
    }
    async save(productoNuevo) {
        try {
            this.productos.push(productoNuevo);
            await fs.promises.writeFile("./productos.txt", JSON.stringify(this.productos), error => { if (error) { console.log(error); } else console.log(""); });

            let arrayId = this.productos.map(e => e.id);
            let idMax = Math.max(...arrayId);
            return console.log(idMax);
        }
        catch (error) {
            console.log(error);
        }
    }
    getById(num) {
        try {
            let idFiltrado = this.productos.filter(e => num === e.id)
            return console.log(idFiltrado);
        } catch (error) {
            console.log(error);
        }
    }
    async getAll() {
        try {
            let dato = await fs.promises.readFile("./productos.txt", "utf-8");
            console.log(JSON.parse(dato));
        } catch (err) {
            return []
        }
    }
    async deleteById(num) {
        try {
            let arregloNuevo = [];
            arregloNuevo.push(this.productos.filter(e => num !== e.id));
            await fs.promises.writeFile("./productos.txt", JSON.stringify(arregloNuevo), error => { if (error) { console.log(error); } else console.log(""); });
            return console.log(arregloNuevo);
        } catch (err) {
            console.log(err);
        }

    }
    async deleteAll() {
        try {
            let arrayVacio = []
            await fs.promises.writeFile("./productos.txt", arrayVacio, error => { if (error) { console.log(error); } else console.log(""); })
            return console.log(arrayVacio);
        } catch (err) {
            console.log(err);
        }
    }
}



const nuevoContenedor = new Contenedor(data);

nuevoContenedor.save({ id: 4, nombre: "pantalla", precio: 2000 });
nuevoContenedor.getById(2);
nuevoContenedor.getAll();
nuevoContenedor.deleteById(1);
nuevoContenedor.deleteAll();
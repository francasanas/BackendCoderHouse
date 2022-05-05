class Usuario {

    constructor (nombre, apellido) {
        this.nombre= nombre
        this.apellido= apellido
        this.libros = []
        this.mascotas = []
    }
    getFullName() {
        return `Mi nombre es ${this.nombre} ${this.apellido}`
    }
    addMascotas = (nombre) => {
        this.mascotas.push(nombre)
        return this.mascotas
    }
    countMascotas(){
        console.log(`Tengo ${this.mascotas.length} mascota`);
    }
    addBooks(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
        return this.libros
    }
    getBookName(){
        return this.libros.map(e => e.nombre)
    }   
}


const usuario = new Usuario ('Francisco', 'Casañas');

usuario.getFullName();
console.log(usuario.getFullName());


console.log(usuario.addMascotas('Hugo'));
usuario.countMascotas();


console.log(usuario.addBooks('Como vender una pluma', 'Elon Musk'));
console.log(usuario.getBookName());



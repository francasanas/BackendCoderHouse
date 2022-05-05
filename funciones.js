
//funciones comunes
function saludar (name){
    console.log('Saludos a ', name);
}

//funciones anonimas
const saludar2 = function(name) {
    console.log(('Saludos a', name));
}

//funciones flecha
const SaludarArrow = name =>{
    console.log(('Saludos a', name));
}

const arrow1 = name => 'Saludos a ' + name;

// IIFE
(function(){
    console.log('IIFE executed');
})()

saludar('Francisco');
console.log(arrow1('Eduardo'));

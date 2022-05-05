
const multiplicadorX = (numero) =>{
    return (n) => {
        return n * numero
    }
}
const times2 = multiplicadorX(2)
const times3 = multiplicadorX(3)



console.log(times2(2));
console.log(times2(4));
// setTimeout(() => {
//     console.log("Passou 03 segundos")
// }, 3000) // => 03 segundos

let segundos = 0
const intervalo = setInterval(() => {
    console.log("Passou 01 segundo")
    segundos++

    if(segundos == 5){
        clearInterval(intervalo)
    }
}, 1000)
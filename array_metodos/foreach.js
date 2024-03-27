const numeros = [1, 2, 3, 5, 4, 6, 7, 8, 9, 0]

numeros.forEach((elemento) => {
    console.log(elemento)
})

numeros.forEach((elemento) => {
    console.log(`Elemento: ${elemento}`)
})

numeros.forEach((elemento) => {
    console.log(`Elemento: ${elemento*2}`)
})






numeros.forEach((elemento, indice) => {
    console.log(`O elemento ${elemento} esta na posicao ${indice+1}`)
})


numeros.forEach((elemento, indice, array) => {
    console.log(array)
})


// posso mudar o contexto utilizado dentro da função
numeros.forEach(function(elemento){
    console.log(this)
}, {numeros})



// PRÁTICA

const array = [[1,2], [3,4], [5,6]]
const transformado = []

array.forEach((elemento) => {
    elemento.forEach((numero) => {
        transformado.push(numero)
    })
})

console.log(transformado)
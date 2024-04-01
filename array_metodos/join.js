const palavras = ["Hello", "World"]

const helloWorld = palavras.join(" ")

console.log(helloWorld)


const frutas = ["banana", "maçã", "abacaxi", "uva", "manga"]

const saladaDeFrutas = frutas.join(";")

console.log(frutas)
console.log(saladaDeFrutas)


const numeros = [1,2,3,4,5,6]

const numerosJuntos = numeros.join(',')

console.log(numerosJuntos)


// PRÁTICA

const itens = [[1,2],[3,4],[5,6]]

// 1,2;3,4;5,6

let linhas = itens.map(linha => {
    return linha.join(",")
})

console.log(linhas)

linhas = linhas.join(";")

console.log(linhas)
const numeros = [1, 2, 3, 5, 4, 6, 7, 8, 9, 0]


let soma = 0

numeros.forEach(numero => {
    soma += numero
})

console.log(`Soma: ${soma}`)


const somaReduce = numeros.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 0)

console.log(`Soma com reduce: ${somaReduce}`)


const multiplicacao = numeros.reduce((valorAnterior, valorAtual) => {
    if(valorAtual === 0){
        valorAtual = 1
    }
    return valorAnterior * valorAtual
}, 1)

console.log(`Multiplicação com reduce: ${multiplicacao}`)


// PRÁTICA

// Crie uma lógica para encontrar o valor mínimo e outra
// para encontrar o valor máximo do array abaixo

const valores = [-1, 30, 10, 5, -10, 25]

const maximo = valores.reduce((valorAnterior, valorAtual) => {
    return Math.max(valorAnterior, valorAtual)
}, -Infinity)

const minimo = valores.reduce((valorAnterior, valorAtual) => {
    return Math.min(valorAnterior, valorAtual)
}, Infinity)

console.log(`máximo: ${maximo}`)
console.log(`mínimo: ${minimo}`)
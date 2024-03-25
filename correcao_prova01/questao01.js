const calcular = (funcao) => {
    return funcao(5,10)
}

function soma(a,b){
    return a+b
}

function substracao(a,b){
    return a-b
}

console.log(calcular(soma))
console.log(calcular(substracao))
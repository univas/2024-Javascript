const numeros = [1, 2, 3, 5, 4, 6, 7, 8, 9, 0]

let calculo = (elemento) => {
    return elemento * 2
}

calculo = elemento => elemento * 2

console.log(calculo(10))

const numerosTransformados = numeros.map(calculo)

console.log(numeros, numerosTransformados)





const frutas = ["banana", "maçã", "pêra"]

const frutasMaiusculo = frutas.map(fruta => {
    return fruta.toUpperCase()
})

console.log(frutasMaiusculo)




const pessoas = [
    {
        nome: "Marcos", sobrenome: "Antonio"
    },
    {
        nome: "Bruno", sobrenome: "Henrique"
    },
    {
        nome: "Carlos", sobrenome: "Roberto"
    }
]

const pessoasCompleto = pessoas.map(pessoa => {
    return {
        ...pessoa,
        nomecompleto: `${pessoa.nome} ${pessoa.sobrenome}`
    }
})

console.log(pessoasCompleto)



// PRÁTICA

const alunos = [
    {
        nome: "Marcos",
        notas: [1,2,3,4]
    },
    {
        nome: "José",
        notas: [5,2,1,4]
    },
    {
        nome: "Joaquim",
        notas: [3,2,7,4]
    }
]

const alunosComMedia = alunos.map((aluno) => {
    let media = 0
    aluno.notas.forEach(nota => {
        media += nota
    })

    media /= aluno.notas.length

    return {
        ...aluno,
        media
    }
})

console.log(alunosComMedia)

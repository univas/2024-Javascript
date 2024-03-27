const numeros = [1, 2, 3, 5, 4, 6, 7, 8, 9, 0]

const numerosMaioresQueQuatro = numeros.filter((numero) => {
    return numero > 4 // operação lógica
})

console.log(numerosMaioresQueQuatro)

const numerosPares = numeros.filter(numero => {
    return numero % 2 === 0
})

console.log(numerosPares)


const palavras = ["maçã", "porta", "caneta", "martelo", "isopor"]

const palavrasComM = 
palavras.filter(palavra => palavra.startsWith("m"))
// ===
// palavras.filter(palavra => {
//      return palavra.startsWith("m")
// })

console.log(palavrasComM)




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


// ALUNOS COM MÉDIA MAIOR QUE 02 E TENHA MAIS DE 04 LETRAS NO NOME

const alunosFiltrados = alunosComMedia.filter(aluno => {
    return aluno.media > 2 && aluno.nome.length > 4
})

console.log(alunosFiltrados)
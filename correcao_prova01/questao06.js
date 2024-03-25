const pessoa = {
    nome: "Marcos",
    nascimento: "05/01/1996",
    cpf: "111.111.111-11"
}

const alunos = [
    {
        ...pessoa,
        notas: [1,2,3,4],
        media: function (){
            let media = 0
            this.notas.forEach(nota => {
                media += nota
            })
            media /= this.notas.length
            return media
        }
    },
    {
        ...pessoa,
        notas: [1,3,5,7],
        media: function (){
            let media = 0
            this.notas.forEach(nota => {
                media += nota
            })
            media /= this.notas.length
            return media
        }
    },
    {
        ...pessoa,
        notas: [2,4,6,8],
        media: function (){
            let media = 0
            this.notas.forEach(nota => {
                media += nota
            })
            media /= this.notas.length
            return media
        }
    }
]

function mediaGeral(alunos){
    let media = 0
    let mediaMenor = undefined
    let mediaMaior = undefined
    alunos.forEach(aluno => {
        const mediaAluno = aluno.media()
        media += mediaAluno
        if(mediaMenor === undefined || mediaMenor > mediaAluno){
            mediaMenor = mediaAluno
        }
        if(mediaMaior === undefined || mediaMaior < mediaAluno){
            mediaMaior = mediaAluno
        }
    })

    media /= alunos.length
    return {
        media: media,
        maior: mediaMaior,
        menor: mediaMenor
    }
}

console.log(mediaGeral(alunos))
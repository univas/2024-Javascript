const pessoa = {
    nome: "Marcos",
    nascimento: "05/01/1996",
    cpf: "111.111.111-11"
}

const aluno = {
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
}

console.log(aluno.media())
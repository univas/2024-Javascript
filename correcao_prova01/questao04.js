const pessoa = {
    nome: "Marcos",
    sobrenome: "Antonio",
    idade: "27",
    nomeCompleto: function(){
        // this herda o contexto do objeto pai
        return this.nome + " " + this.sobrenome
    },
    nomeComIdade: () => {
        // this não recebe nenhum contexto
        return this.nome + " " + this.idade
    }
}

console.log(pessoa.nomeCompleto())
console.log(pessoa.nomeComIdade())
const escreverMensagemComDelay = (mensagem) => {
    setTimeout(() => {
        console.log(mensagem)
    }, 5000)
}

escreverMensagemComDelay("Mensagem bonita de Natal!")
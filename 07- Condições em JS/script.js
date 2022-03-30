var botão = window.document.getElementById('botao')
botão.addEventListener('click', verificaMaioridade)

function verificaMaioridade() {
    var txti = window.document.getElementById('txtidade')
    var idade = Number(txti.value)
    var resultado = window.document.getElementById('resultado')
    if (idade >= 18) {
        resultado.innerHTML = `Você tem <strong>${idade} anos</strong>, portanto é MAIOR  de idade`
    } else
        resultado.innerHTML = `Você tem <strong>${idade} anos</strong>, portanto é MENOR de idade`
}


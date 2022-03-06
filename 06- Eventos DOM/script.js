/*EVENTOS E FUNÇÕES EM JAVASCRIPT*/

var div = window.document.getElementById('area')
div.addEventListener('click', clicar)
div.addEventListener('mouseenter', entrar)
div.addEventListener('mouseout', sair)

function clicar() {
    var div = window.document.getElementById('area')
    div.innerText = "Clicou"
    div.style.backgroundColor = "red"
}

function entrar() {
    var div = window.document.getElementById('area')
    div.innerText = "Entrou"
}

function sair() {
    var div = window.document.getElementById('area')
    div.innerText = "Saiu"
    div.style.backgroundColor = "rgb(59, 137, 111)"
}


/*EVENTOS E FUNÇÕES EM JAVASCRIPT*/

/*EXEMPLO 1*/
var div = window.document.getElementById('area')
div.addEventListener('click', clicar)
div.addEventListener('mouseenter', entrar)
div.addEventListener('mouseout', sair)

function clicar() {
    var div = window.document.getElementById('area')
    div.innerText = "Você clicou no quadrado."
    div.style.backgroundColor = "rgb(132, 90, 194)"
}

function entrar() {
    var div = window.document.getElementById('area')
    div.innerText = "Você entrou no quadrado."
}

function sair() {
    var div = window.document.getElementById('area')
    div.innerText = "Você saiu do quadrado."
    div.style.backgroundColor = "rgb(90, 194, 159)"
}

/*EXEMPLO 2*/
function somar() {
    var tn1 = window.document.getElementById("txtn1")         /*selecionando a caixa 1*/
    var tn2 = window.document.querySelector("input#txtn2")    /*selecionando caixa 2*/
    var resposta = window.document.getElementById("resposta") /*selecionando a div de resposta*/
    var n1 = Number(tn1.value)                                /*convertendo string para number*/
    var n2 = Number(tn2.value)
    var resul = n1 + n2
    resposta.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${resul}`
}


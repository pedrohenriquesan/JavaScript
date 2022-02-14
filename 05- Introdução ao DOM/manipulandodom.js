/*ALTERANDO CARACTERÍSTICAS VISUAIS COM O DOM*/
/*COM USO DO getElementsByTagName() pelo nome das tags*/
var p1 = window.document.getElementsByTagName('p')[0]   
var p2 = window.document.getElementsByTagName('p')[1] 
window.document.write(`Está escrito "${p1.innerText}" no primeiro parágrafo. <br>`)
window.document.write(`Está escrito "${p2.innerText}" no segundo parágrafo. <br>`)
window.document.write(`Está escrito "${p2.innerHTML}" no segundo parágrafo, com "DOM" em negrito.`)
p1.style.color = "red"
p2.style.color = "blue"
var corpo = window.document.body
corpo.style.background = "brown"

/*COM USO DO getElementById()*/
var div = window.document.getElementById("copiadiv")
div.style.backgroundColor = "violet"
div.innerText = "Usei getElementById()"

/*COM USO DO getElementsByName()*/
var div = window.document.getElementsByName("copiadiv")[0]
div.style.backgroundColor = "violet"
div.innerText = "Usei getElementsByName()[]"

/*COM USO DO getElementsByClassName()*/
var div = window.document.getElementsByClassName("copiadiv")[0]
div.style.backgroundColor = "violet"
div.innerText = "Usei getElementsByClassName()[]"

/*COM USO DO querySelector() com id*/
var div = window.document.querySelector('div#seletorid')
div.style.backgroundColor = "violet"
div.innerText = "Usei querySelector() com id"

/*COM USO DO querySelector() com class*/
var div = window.document.querySelector('div.seletorclass')
div.style.backgroundColor = "violet"
div.innerText = "Usei querySelector() com class"


function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 9
    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 8 && hora < 12) {
        img.src = 'imagens/manhãredonda.png'
        document.body.style.backgroundColor = '#F0E68C'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'imagens/tarderedonda.png'
        document.body.style.backgroundColor = '#F4A460'
    } else {
        img.src = 'imagens/noiteredonda.png'
        document.body.style.backgroundColor = '#4682B4'
    }
}


function verificar () {
    var data = new Date ()
    var ano = data.getFullYear ()                           //pega o ano atual com os 4 dígitos
    var nascimento = document.getElementById('txtano')
    var resultado = document.querySelector('div#res')

    if (nascimento.value.lenght == 0 || nascimento.value > ano) {
        window.alert('[ERRO]')
    } else {
        var idade = ano - Number(nascimento.value)          //verifica idade

        var sexo = document.getElementsByName('radsex')     //verifica sexo
        var gênero = ''
        var img = document.createElement('img')             //cria o elemento imagem no JS
        /*img.setAttribute('id', 'foto') */                     //cria o atributo id para o elemento imagem
        if (sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'imagens/meninoredondo.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'imagens/homemjovemredondo.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/homemredondo.png')
            } else {
                img.setAttribute('src', 'imagens/idosoredondo.png')
            }
        } else if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'imagens/meninaredonda.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'imagens/mulherjovemredonda.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/mulherredonda.png')
            } else {
                img.setAttribute('src', 'imagens/idosaredonda.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `<p>Você é um(a) ${gênero} com ${idade} anos.</p>`
        resultado.appendChild(img)
    }
}


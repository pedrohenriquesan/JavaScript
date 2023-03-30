function tabuada () {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.lenght == 0) {
        window.alert("Por favor digite um número")
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''      //LIMPA O SELECT
        while (c <= 10) {
            var item = document.createElement('option')     //CRIA ELEMENTOS NO HTML
            item.text = `${n} x ${c} = ${n*c}`              //CÁLCULO E ADIÇÃO DO CONTEÚDO
            item.value = `tab${c}`                          //ADICIONA VALUE NOS OPTIONS
            tab.appendChild(item)                           //CONCLUI A ADIÇÃO DOS ELEMENTOS
            c++                                             //INCREMENTO
        }
    }
}


function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    //a verificação de valores não está funcionando e não faço ideia do porque
    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('FALTAM DADOS')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('o passo deve ser um valor positivo')
        } else if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c}`
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c}`
            }
        }
        //contagem de valores maiores estão ultrapassando a section, não sei porque
    }
}


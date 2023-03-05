//var hora = 20
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if(hora > 19) {
    console.log(`Bom noite!`)
} else if (hora > 13) {
    console.log(`Boa tarde!`)
} else if (hora > 6) {
    console.log(`Bom dia!`)
} else
    console.log(`Boa madrugada!`)


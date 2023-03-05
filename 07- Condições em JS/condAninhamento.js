var idade = 20

console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não pode votar na eleição')
} else if (idade < 18 || idade > 65 ) {
    console.log('Você tem voto opcional na eleição')
} else
    console.log('Você tem a obrigação ode votar na eleição')


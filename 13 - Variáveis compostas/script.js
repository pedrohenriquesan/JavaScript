var num = [5, 8, 2, 9, 3]   /*CRIAÇÃO VETOR*/

console.log(`Nosso vetor inicial é: ${num}`)

num[5] = 6      /*ADIÇÃO DE VALOR, SABENDO O ÍNDICE*/

console.log(`Nosso vetor com 10 é: ${num}`)

num.push(7)     /*ADIÇÃO DE VALOR NA ÚLTIMA POSIÇÃO*/

console.log(`Nosso vetor com 7 é: ${num}`)

console.log(`Nosso vetor possui ${num.length} posições`)    /*TAMANHO DO VETOR*/

num.sort()      /*ORDENA O VETOR EM ORDEM CRESCENTE*/

console.log(`Nosso vetor ordenado é: ${num}`)

for (var i = 0; i < num.length; i++) {      /*EXIBINDO O VETOR COM ITERAÇÕES*/
    console.log(`A posição ${i} tem valor ${num[i]}`)
}

/*for (var i in num) {        EXBINDO VETOR COM FOR IN
    console.log(`A posição ${i} tem valor ${num[i]}`)
}*/

console.log(num.indexOf(2))
console.log(num.indexOf(5))
console.log(num.indexOf(4))


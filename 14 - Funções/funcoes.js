/*FUNÇÃO 1*/
function parimpar(n) {
    if (n%2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

console.log(parimpar(4))

/*FUNÇÃO 2*/

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2,5))

/*Caso um parâmetro não seja enviado (undefined), o resultado será NaN*/
/*Podemo colocar soma(2=0, 5=-), caso algum não seja passado será 0*/

/*FUNÇÃO 3*/

var v = function(x) {
    return x*2
}

console.log(v(5))

/*As variáveis JS conseguem receber funções*/

/*FUNÇÃO 4 RECURSIVA*/

function fatorial(n) {
    if (n == 1) {
        return 1        /*Fatorial de 1 é 1*/
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))


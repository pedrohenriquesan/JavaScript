/*OPERADORES ARITMÉTICOS*/
document.write("Operadores aritméticos: <br>")

var a = 5+2                         
document.write(`5 + 2 = ${a} <br>`)     /*operador de soma*/

var b = 5-2
document.write(`5 - 2 = ${b} <br>`)     /*operador de subtração*/

var c = 5*2
document.write(`5 * 2 = ${c} <br>`)     /*operador de multiplicação*/

var d = 5/2
document.write(`5 / 2 = ${d} <br>`)     /*operador de divisão*/

var e = 5%2
document.write(`O resto da divisão de 5/2 = ${e} <br>`)     /*operador de resto*/

var f = 5**2
document.write(`5^2 = ${f} <br> <hr>`)                      /*operador de potenciação*/


/*OPERADORES DE ATRIBUIÇÃO*/
document.write("Operadores de atribuição: <br>")

var x = 5 + 3                                                                   /*atribuição*/
document.write(`O operador de atribuição é o sinal de =, onde uma variável 
"recebe" um valor, nesse caso x recebeu uma operação aritmética (5 + 3) que      
resultou em ${x}. <br>`)

x++
document.write(`Pós incremento de x = ${x} <br>`)       /*operador de incremento*/

x--
document.write(`Pós decremento de x = ${x} <br>`)       /*operador de incremento*/

++x
document.write(`Pré incremento de x = ${x} <br>`)

--x
document.write(`Pré decremento de x = ${x} <br>`)

x += 8                                                                              /*auto atribuição*/
document.write(`Auto atribuições são operações aritméticas feitas com o atual 
valor de uma variável, onde este é usado para gerar um novo para substitui-lo,      
uma auto atribuição de soma foi feita: x += 8 resultando em ${x} <br> <hr>`)


/*OPERADORES RELACIONAIS*/
document.write("Operadores relacionais: <br>")

document.write(`Os operadores relacionais são binários e retornam sempre um valor
booleano (true or false) <br>`)

r1 = 5 > 2
document.write(`5 é MAIOR que 2? resposta: ${r1} <br>`)             /*operador de maior*/

r2 = 7 < 4
document.write(`7 é MENOR que 4? resposta: ${r2} <br>`)             /*operador de menor*/

r3 = 8 >= 8
document.write(`8 é MAIOR ou IGUAL a 8? resposta: ${r3} <br>`)      /*operador maior ou igual*/

r4 = 9 <= 7
document.write(`9 é MENOR ou IGUAL a 2? resposta: ${r4} <br>`)      /*operador menor ou igual*/

r5 = 5 == 5
document.write(`5 é IGUAL a 5? resposta: ${r5} <br>`)               /*operador de igualdade*/

r6 = 4 != 4
document.write(`4 é DIFERENTE que 4? resposta: ${r6} <br>`)         /*operador de desigualdade*/

document.write(`Operadores relacionais de identidade (igualdade e desigualdade 
restrita, os quais verificam o tipo de dado além do valor que os operadores normais 
já fazem): <br>`)

r7 = 5 === '5'
document.write(`5 é igual a '5' em VALOR e TIPO de dado? responsta: ${r7} <br>`)                /*igualdade restrita*/

r8 = 4 !== '4'
document.write(`4 é diferente de '4' em VALOR e TIPO de dado? resposta: ${r8} <br> <hr>`)       /*desigualdade restrita*/


/*OPERADORES LÓGICOS*/
document.write("Operadores lógicos: <br>")

document.write(`São aqueles estudados em lógica que devolvem um valor booleano igual os
relacionais, geralmente usados em condições, são os famosos 'não', 'e' e 'ou' <br>`)

var l1 = !false                                                                             /*operador de negação*/
document.write(`O operador de NEGAÇÃO é representado por '!' e para devolver um valor 
verdadeiro deve recebe um falso: l1 = !false (${l1}) <br>`)

var l2 = true && true                                                                       /*operador de conjunção*/
document.write(`O operador de CONJUNÇÃO é representado por '&&' e para devolver um valor 
verdadeiro deve receber dois valores verdadeiros: l2 = true && true (${l2}) <br>`)

var l3 = true || false                                                                      /*operador de disjunção*/
document.write(`O operador de DISJUNÇÃO é representado por '||' e para devolver um valor 
verdadeiro deve receber um valor verdadeiro: l3 = true || false (${l3}) <br> <hr>`)


/*OPERADOR TERNÁRIO*/ 
document.write("Operador ternário: <br>")

document.write(`O operador ternário é um operador que toma uma decisão baseado em um 
resultado booleano de uma operação, o mesmo recebe a operação, uma ação para um valor 
true e outra para um valor false. <br>`)

var media = 5.5
var resul = media > 6 ? 'APROVADO' : 'REPROVADO'                                            /*operador ternário*/

document.write(`A media foi de ${media} e o aluno foi ${resul} <br> <hr>`)


/*ORDEM DE PRECEDÊNCIA DOS OPERADORES*/
document.write("Ordem de precedência de uma operação: <br>")

document.write(`Em uma operação completa com todos os operadores possíveis, existe uma ordem
e precedência para resolve-los, tal ordem é: aritméticos (parênteses, potenciação, divisão, 
multiplicação, resto, adição e subtração), relacionais (em qualquer ordem), lógicos 
(negação, conjunção e disjunção) e por último o operador ternário`)


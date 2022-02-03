var nome = window.prompt("POR FAVOR, DIGITE SEU NOME:")                    /*armazenando o nome do usuário*/ 
window.alert('Seja bem-vindo ' + nome + '!')                               /*exibindo o nome do usuário armazenado na variável 'nome'*/

var n1 = Number.parseFloat(window.prompt("POR FAVOR, DIGITE UM NÚMERO:"))  /*convertendo(1° fomra) e armazenando o primeiro número*/
var n2 = Number(window.prompt("POR FAVOR, DIGITE OUTRO NÚMERO"))           /*convertendo(2° forma) e armazenando o segundo número*/
var soma = n1 + n2                                                         /*operação aritmética com as variáveis em uma nova variável*/


/*convertendo(duas formas possíveis) e exibindo o resultado da manipulação dos dados armazenados*/ 
window.alert(n1.toString() + " + " + n2.toString() + " = " + String(soma))  

window.alert(`Os números ${n1} e ${n2} somados dão ${soma} tá bom ${nome}?`)    /*uso template string para formatação de strings*/


/*USO DE OUTRAS FUNÇÕES*/ 
document.write(`Eae, ${nome}! Seu nome possui ${nome.length} letas. <br>`)              /*lenght*/ 
document.write(`Seu nome escrito em letras maiúsculas é: ${nome.toUpperCase()}. <br>`)  /*toUpperCase*/ 
document.write(`Seu nome escrito em letras minúsculas é: ${nome.toLowerCase()}`)        /*toLowerCase*/


// PASSA DADOS COMO STRING 
// var n1 = prompt('digite numero')  
// var n2 = prompt('digite numero') 
// var s = n1+n2; 
// alert('a soma dos valores é ' + s)

// FORÇA A CONVERÇÃO EM INTEIRO, REAL (parseInt OU parseFloat)
// var n1 = Number.parseInt(prompt ('digite um numero'))
// var n2 = Number.parseInt(prompt('digite um numero'))
// var s = n1+n2 
// alert ('soma dos valores ' + s)

var n1 = Number(prompt ('digite um numero'))
var n2 = Number(prompt('digite um numero'))
var s = n1+n2 
//alert ('soma dos valores ' + s.toString())// convertendo em string
alert (`soma dos valores  ${n1} e ${n2}  é  ${s}`) // exibindo valores 
alert ('soma dos valores ' + String(s)) // convertendo em string






// var nun1 = Number(prompt('digite um numero'))
// var nun2 = Number(prompt('digite um numero'))

// var soma = nun1 + nun2
// alert('a soma e ' + soma) // aula sobre converção de valores 

// var produto = 'oleo'
// var valor = 10.00

// console.log(`o ${produto} a ${valor} esta muito caro`) // usa template string
// console.log('o ' + produto + ' a ' + valor + ' esta muito caro') //forma padrão para concatenar

// var nome = prompt('Qual seu nome?')
// document.writeln(` Ola, ${nome} seu nome tem ${nome.length} letras`) //document.write escre na tela -> ln e quebra de linha
// document.write(` seu nome em Maiusculo e ${nome.toUpperCase()} `) //escreve em minusculo
// document.write(` seu nome em Minusculo e ${nome.toLowerCase()} `) //escreve em minusculo

// alert('ola')

// function converterValor() {
//     let valor = parseInt(document.querySelector("#converter-valor").value);

//     console.log('o valor é: ' + valor.toLocaleString('pt-BR', {
//         style: 'currency',
//         currency: 'BRL'
//     }))
//     alert('o valor é: ' + valor.toLocaleString('pt-BR', {
//         style: 'currency',
//         currency: 'BRL'
//     }))
// }


//     //var valor1 = document.querySelector("#converter-valor").value;
//     // var button = document.querySelector('#envi')
//     // if (valor1)
//     // alert(valor1)
//     // if (valor1)
// }

var nome = prompt('Qual seu nome? ')
document.write(` Seu nome tem ${nome.length} letras <br/>`) 
document.write(` Seu nome em maiusculo é  ${nome.toUpperCase()} <br/>`) 
document.write(` Seu nome em minusculo é  ${nome.toLowerCase()} <br/>`) 



///////////////////////////////////////
//CONVERTENDO VALOR EM R$ 

var n1 = 1458.89
var n2 = 5542.54
var soma 
soma = n1+n2
document.write(`trocando ponto por vircula: ${soma.toFixed(2).replace('.', ',')} <br/>`) 
document.write(`convertendo valor em real: ${soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br/>`)
document.write (`convertendo sinal de R$ para US$: ${soma.toLocaleString ('pt-BR', {style: 'currency' , currency: 'USD'})}<br/>`)

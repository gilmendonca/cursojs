//EXEMPLO 1
/*var idade = 55
console.log(`Sua idade é ${idade}`)
if (idade < 16) {
    console.log('Não vota')

} else if (idade < 18 || idade > 65) { // opcional (idade >= 16 && idade < 18)
    console.log('Voto opcional')

} else { // não e necessario (idade >= 18) 
    console.log('Voto obrigatorio')
}*/

//EXEMPLO 2
var pessoaIdade = 70
console.log(`Sua idade é ${pessoaIdade}`)
if (pessoaIdade < 16) {
    console.log('Não vota')
} else {
    if (pessoaIdade < 18 || pessoaIdade > 65) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatorio')
    }
}
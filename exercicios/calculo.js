
function somar(){
    var inputn1 = document.getElementById('n1')
    var inputn2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var somaN1 = Number(inputn1.value)
    var somaN2 = Number(inputn2.value)
    var soma = somaN1 + somaN2

    res.innerHTML = `A soma entre os valores ${somaN1} é ${somaN2} é <strong> ${soma} <strong>`

}

function entrar(){
    var b = document.getElementById('n1')
    b.addEventListener('mouseover', entrar)// não deu certo 
 
    c.style.background = 'green'
    
}

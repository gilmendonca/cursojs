function verificar() {

    var txtpais = document.querySelector('input#txtpais').value
    var res = document.querySelector('div#res')
        //var vel = (txtpais.value)

    res.innerHTML = `<p> Seu país é o ${txtpais} </p>`
    if (txtpais == 'BRASIL') {
        res.innerHTML += `<p>Você e brasileiro<p>`
    } else {
        res.innerHTML += `<p>Você é estrangeiro </p>`
    }
}
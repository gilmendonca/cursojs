function calcular() {
    var txtvel = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtvel.value)

    res.innerHTML = `<p>Sua velocidade atual é de <strong> ${vel} Km/h </strong> </p>`
    if (vel > 60) {
        res.innerHTML += `<p> Voce esta <strong> Multado </strong> por exesso de velocidade`
    }
    res.innerHTML += `Dirija sempre com sinto de segurança`
}
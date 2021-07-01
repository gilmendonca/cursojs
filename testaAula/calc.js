alert('Vamos Calcular')

function calcular() {
    var num = parseInt(document.getElementById('valor-informado').value.replace("\n", "<br>"));
    // var operacao = document.getElementById('operacao')
    var resposta = document.getElementById('resposta');
    var calculo = ''



    for (var count = 1; count <= 10; count++)
        calculo += num + " x " + count + " = " + num * count + "<br>";
    resposta.innerHTML = calculo;


}
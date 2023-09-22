var nota1 = 7.1
var nota2 = 6.9
var nota3 = 6.9
var soma

soma = (nota1 + nota2 + nota3) / 3
if (soma >= 7) {
    console.log('Sua nota final é: ' + soma.toFixed(1))
    console.log('APROVADO')

} else {
    console.log('Sua nota final é: ' + soma.toFixed(1))
    console.log('REPROVADO')
}

// function mostrarTexto(texto) {
//     document.getElementById("resultado").innerHTML += texto;
// }

//function executar(ev) {
//ev.preventDefault();
var resultado = "<table><tr>";


// Escrever aqui o código
for (var i = 1; i <= 10; i = i + 1) {
    resultado = resultado + "\n";
    for (var j = 0; j <= 10; j = j + 1) {
        var multiplicacao = i - j;
        var linha = "" + i + " - " + j + " = " + multiplicacao + "\n";
        resultado = resultado + linha;
    }
    resultado = resultado + "\n";
    if (i % 5 === 0) {
        resultado = resultado + "<tr></tr>";
    }

}
console.log(resultado)
    //resultado = resultado + "</tr></table>";
    //mostrarTexto(resultado);

//}
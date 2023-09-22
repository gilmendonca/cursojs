/*var nome = "Gil";
var idade = 29;
var frase = "gil sm"
    //alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(idade);
//console.log(frase.replace("gil", "giovane"));
console.log(frase.toLocaleLowerCase());*/
//var lista = ["uva ", "maça ", "pera ", "goiaba"];
//lista.push("laranja");
//lista.pop(lista);
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//var fruta = { nome: "marça", cor: "vermelha" };
//console.log(fruta.nome);

/*var frutas = [{ nome: "marça", cor: "vermelha" }, { nome: "uva", cor: "rocho" }];
console.log(frutas)
console.log(frutas[1].nome);*/

//var idade = 18;
/*var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade")
} else {
    alert("menor de idade");
}*/

/*var count = 0
while (count <= 5) {
    console.log(count);
    count++;
};*/

/*var count;
for (count = 0; count <= 5; count++) {
    alert(count);
};*/

//var d = new Date();
//alert(d.getMonth() + 1);
//alert(d.getHours());
//alert(d.getMinutes());
//alert(d.getDay());

/*function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japa", "Japa", "Bra"));*/

// function soma(n1, n2) {
//     return n1 + n2;
// }

/*function validaIdade(idade) {
    var validar; //local
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar
}
var idade = prompt("qual sua idade");
console.log(validaIdade(idade));*/

/*var validar//global

function validaIdade(idade) {
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar
}
var idade = prompt("qual sua idade");
validaIdade(idade)
console.log(validar);*/
// alert('test')
// var idade = 30
// var idade = prompt('qual sua idade')
// if (idade >= 18) {
//     console.log('maior de idade')
// } else {
//     console.log('menor de  idade')
// }

// function calcularNota() {


//     var nota1 = document.querySelector("#nota-1").Value;
//     var nota2 = document.querySelector("#nota-2").Value;
//     var nota3 = document.querySelector("#nota-3").Value;
//     var nota4 = document.querySelector("#nota-4").Value;

//     media = (nota1 + nota2 + nota3 + nota4) / 4
//     console.log('SUA MÉDIA É: ' + media.toFixed(2))
//     console.log(media >= 7 ? 'APROVADO' : 'REPROVADO')
// }
function calcularNota() {

    var media

    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nota3 = parseInt(document.getElementById('nota3').value);


    media = (nota1 + nota2 + nota3) / 3
    document.writeln('Media Final: ' + media.toFixed(2))
    document.writeln(media >= 7 ? 'APROVADO' : 'REPROVADO')
}
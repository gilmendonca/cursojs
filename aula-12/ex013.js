var horaAtual = new Date()
var hora = horaAtual.getHours()
var minutos = horaAtual.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos`)

if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora <= 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
var change = 0
var dinInserido = 0
var totalPago = 0
var msg = ""

var doces = ["cupcake", "sorvete", "donut"]
var preço = 8

var mensagem1 = document.getElementById("mensagem")

const currencyOne = 1
const currencyTwo = 2
const currencyFive = 5

function getTotal() {
    var currencyOnes = Number(document.getElementById("1").value)
    var currencyTwos = Number(document.getElementById("2").value)
    var currencyFives = Number(document.getElementById("5").value)

    if(currencyOnes > 0){
        currencyOnes = currencyOnes * currencyOne
    }
    if(currencyTwos > 0){
        currencyTwos = currencyTwos * currencyTwo
    }
    if(currencyFives > 0){
        currencyFives = currencyFives * currencyFive
    }

    totalPago = currencyOnes + currencyTwos + currencyFives

    return totalPago.toFixed(2)
}
function contagem(){
    dinInserido = getTotal();
    document.getElementById("pago").innerHTML = dinInserido
}
function limpar(){
    document.getElementById("1").value = 0
    document.getElementById("2").value = 0
    document.getElementById("5").value = 0
    dinInserido = 0;
    document.getElementById("pago").innerHTML = dinInserido
}
function cancelar(){
    getTotal()
    if(totalPago > 0 ){
        msg = "Transação cancelada. $" + totalPago.toFixed(2) + " foi retornado."
        mensagem1.innerHTML = msg;
        limpar()
    } else if (totalPago == 0) {
        msg = "Insira o dinheiro..."
        mensagem1.innerHTML = msg;
        limpar()
    }
}
function calculateChange(){
    var tempChange = 0

    if(getTotal() != 0) {
        return(tempChange = (getTotal() - preço).toFixed(2))
    }

    return tempChange.toFixed(2)
}
function retirarDoce(doce){
    mensagem1.innerHTML = ""
    change = 0

    var doceSelecionado = doces[doce]

    change = calculateChange()

    if (change < 0){
        msg = "Dinheiro Insuficiente. $" + totalPago.toFixed(2) + " foi retornado."
        totalPago = 0
        change = 0
        limpar()
        mensagem1.innerHTML = msg;
    } else if (change > 0){
        msg = doceSelecionado + " foi retirado. $" + change + " foi retoranado."
        totalPago = 0
        change = 0
        limpar()
        mensagem1.innerHTML = msg;
    } else if (totalPago == 0) {
        msg = "Pague antes de selecionar o doce"
        mensagem1.innerHTML = msg;
    } else if (change == 0){
        msg = doceSelecionado + " foi retirado."
        totalPago = 0
        change = 0
        limpar()
        mensagem1.innerHTML = msg;
    }
}
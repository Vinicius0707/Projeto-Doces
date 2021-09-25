var change = 0;
var moneyInserted = 0;
var msg = ";";

var candys = ["Cupcake", "Sorvete", "Donut"];
const price1 = 6.00;
const price2 = 7.00;
const price3 = 8.00;

var messageElement = document.getElementById("message")

var totalPaid = 0;

const currency_one = 1;
const currency_two = 2;
const currency_five = 5;


function getTotal() {
    var currency_ones = Number(document.getElementById('ones').value);
    var  currency_twos = Number(document.getElementById('two').value);
    var currency_fives = Number(document.getElementById('fives').value);
    
    if (currency_ones > 0) {
        currency_ones = currency_ones * currency_one;
    }

    if(currency_twos > 0) {
        currency_twos = currency_twos * currency_two;
    }

    if (currency_fives > 0) {
        currency_fives = currency_fives * currency_five;
    }
   
    totalPaid = currency_ones + currency_twos + currency_fives;
    return totalPaid.toFixed(2);
} 

function tally() {
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearTally() {
    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearForm() {
    document.getElementById("ones").value = 0;
    document.getElementById("two").value = 0;
    document.getElementById("fives").value = 0;
}

function cancel() {
    getTotal();

    if(totalPaid > 0) {
        msg = "Transição Cancelada. R$" +totalPaid.toFixed(2) + " foi retornado." 
        clearForm();
        clearTally();

        messageElement.innerHTML = msg;
    } else if(totalPaid == 0) {
        msg = "Insira o dinheiro primeiro e selecione o doce";

        messageElement.innerHTML = msg;
    }
}

function calculateChange(candy) {
    var tempChange = 0;

    // return (tempChange = (getTotal() - price).toFixed(2));
    if(getTotal() != 0) {
        if(candy == "Cupcake") {
            return (tempChange = (getTotal() - price1).toFixed(2));
        } else if(candy ==  "Sorvete") {
            return (tempChange = (getTotal() - price2).toFixed(2));
        } else {
            return (tempChange = (getTotal() - price3).toFixed(2));
        }
    }
    return tempChange.toFixed(2);
}

function dispenseCandy(candy) {
    
    var  selectedCandy = candys[candy];

    change = calculateChange(candys[candy]);

    console.log(change)

    if(change < 0) {
        msg = "Você não me deu dinheiro suficiente. R$" + totalPaid.toFixed(2) + " retornado!";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageElement.innerHTML = msg;
    } else if(change > 0) {
        msg = selectedCandy + ' liberado! Seu troco é de R$' + change;

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();
        messageElement.innerHTML = msg;
    } else if (totalPaid == 0) {
        msg = "Por favor! Insira o dinheiro antes de selecionar o doce.";
        messageElement.innerHTML = msg;
    } else if(change == 0) {
        msg = selectedCandy + " dispensado com sucesso!";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();
        messageElement.innerHTML = msg;
    }
}
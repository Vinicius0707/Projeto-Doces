function escolher(){
    let cash = document.getElementById('cash')
    let res = document.getElementById('res')
    let doce = document.getElementsByName('doce')
    let  troco = Number(cash.value)
    var doceS = ''

    if(cash.value.length == 0){

        window.alert('Dinheiro insuficiente')

    } else {

        if(doce[0].checked){

            doceS = 'Cupcake'
            troco = troco - 6
            if(troco < 0){
                window.alert('Dinheiro insuficiente')
            } else {
                res.innerHTML = `Seu doce é ${doceS} e seu troco é ${troco}`
            }

        } else if (doce[1].checked){

            doceS = 'Sorvete'
            troco = troco - 7
            if(troco < 0){
                window.alert('Dinheiro insuficiente')
            } else {
                res.innerHTML = `Seu doce é ${doceS} e seu troco é ${troco}`
            }

        } else {

            doceS = 'Donut'
            troco = troco - 8
            if(troco < 0){
                window.alert('Dinheiro insuficiente')
            } else {
                res.innerHTML = `Seu doce é ${doceS} e seu troco é ${troco}`
            }

        }

    }

}
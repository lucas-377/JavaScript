var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100)
        return true
    else
        return false
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1)
        return true
    else
        return false
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else
        alert('Valor inválido! Fora do range ou já na lista.')
    
        num.value = ''
        num.focus()
}

function finalizar(){
    if(valores.length == 0)
        alert('Adicionar valores primeiro!')
    else{
        var total = valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo são ${total} números cadastrados</p>`

        var menor = valores[0]
        var maior = valores[0]
        var soma = 0
        var media = 0

        for (var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        
        res.innerHTML += `<p>O menor é ${menor}</p>`
        res.innerHTML += `<p>O maior é ${maior}</p>`
        res.innerHTML += `<p>A soma é ${soma}</p>`
        res.innerHTML += `<p>A média é ${soma / total}</p>`
    }
}
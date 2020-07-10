function tab(){
    var nb1 = document.getElementById('txtnb')
    var n1 = Number(nb1.value)
    
    res = document.getElementById('resultado')
    res.innerHTML = ``

    for(var c = 0; c < 11; c++){
        res.innerHTML += `${n1} x ${c} = <strong>${n1 * c}</strong><br>`
    }
}
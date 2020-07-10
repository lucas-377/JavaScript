function contar(){

    var ini = document.getElementById('txti')
    var final = document.getElementById('txtf')
    var ite = document.getElementById('txtp')
    var res = document.getElementById('resultado')

    if (ini.value.lenght == 0 || final.value.lenght == 0 || ite.value.lenght == 0){
        alert('Faltam dados!')
    } 
    
    else{
        res.innerHTML = `Contando...`
    }
}
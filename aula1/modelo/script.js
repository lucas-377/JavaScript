function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}h</strong>`

    if(hora < 12){
        img.src = 'manha.png'
        window.document.body.style.background = '#a6a6a6'
    }
    else if(hora >= 12 && hora < 19){
        img.src = 'tarde.png'
        window.document.body.style.background = '#7eab8f'
    }
    else{
        img.src = 'noite.png'
        window.document.body.style.background = '#535b69'
    }
}

function carregar(){
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` 
    if (hora >= 0 && hora < 18) {
        //Bom dia
        img.scr = 'morning.png'
    } else if(hora >= 12 && hora < 18){
        img.src = 'afternoon.png'
    }else{
        img.scr = 'nigth.png'
    }

}
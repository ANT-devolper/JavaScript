function contar(){
    window.document.getElementById('msg').innerHTML = null
    let end = Number(window.document.getElementById('fim').value)
    let passo = Number(window.document.getElementById('pass').value)
    let res = window.document.getElementById('msg')
    let inicio =  Number(window.document.getElementById('inicio').value)
    res.innerHTML = '<p>Contando:</p>'
    if(passo <= 0){
        alert('Não é possivel contar com passo 0 sera contado com Passo 1.')
        passo = 1
    }
    if(end <= 0){
        alert('fim Precisa ser preenchido')
    }else if(inicio < end){//contagem crescente
        for(let i =inicio; i <= end; i += passo){
            res.innerHTML += `${i} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }else{//contagem decrescente
        for(let i = inicio; i >= end; i -= passo){
            res.innerHTML += `${i} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
    
}
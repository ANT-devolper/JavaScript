function calc(){
    let n = window.document.getElementById('num')
    let tab = window.document.getElementById('res')
    tab.innerHTML = null
    if(num.value.length == 0){
        alert('Por favor, digite um numero!')
    }else{
        let num = Number(n.value)
        for(let c= 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}
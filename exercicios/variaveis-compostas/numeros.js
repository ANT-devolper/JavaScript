let num = [1,4,6,2,7,1,5,9,8]
//forma atualizada
num.sort()
for(let pos in num){
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}






/* forma tradicional
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}
*/
let amigo = {Nome:'Marcos', Sexo:'M', Idade:'16',peso:84 ,engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(50)
console.log(`${amigo.Nome} Pesa ${amigo.peso}Kg`)
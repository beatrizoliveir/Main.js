const alunos = ['João', 'Bia','Dudiss', 'Marlena', 'Thefa', 'Mabe','Marê']

// splice = significa emendar, juntar 
// o primeiro indica o índice do primeiro a retirar e o segundo indica 
// a quantidade
// o método splice altera o array original (diferente do splice)

 alunos.splice (1,1)
 console.log(alunos)

 // alunos.splice(1,2,"Beatriz") // permite um terceiro parâmetro
 // console.log(alunos)
 
 // Ou podemos fazer assim:

 alunos.splice(1,2,"Beatriz")
 console.log(alunos)

 
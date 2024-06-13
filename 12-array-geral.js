

// retirar o primeiro elelmento utilizando o método *** shift ***
let retirar_primeiro = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
retirar_primeiro.shift()
console.log(retirar_primeiro)
retirar_primeiro[0] = 100 // inclusão do valor 100 no índice 0 (indexação)
console.log(retirar_primeiro);

//*** adicionando elementos na primeira posição ***
let frutas = ['maça', 'banana', 'pera', 'abacaxi', 'mamão', 'caqui', 'amora'];
console.log(frutas)
frutas.unshift('leite')
console.log(frutas)
// *** adicionando elementos/modificando na primeira posição com indexação
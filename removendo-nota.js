const notas = [10, 6, 8, 5.5, 10]

notas.pop()// REMOVE O ÚLTIMO ELEMENTO DO ARRAY(LISTA)
console.log(notas)


const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length
let medidaarredondado = Math.round(media)
console.log(`A média é ${mediaarredondado}`)

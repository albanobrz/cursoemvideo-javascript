let num = [5, 8, 9, 3]


num.sort()
num.length
//console.log(num + ' o vetor tem ' + num.length + ' posições')
//console.log(`O primeiro valor do vetor é ${num[0]}`)

//console.log(num[2])

//for (let pos = 0;pos < num.length;pos++) {
//    console.log(num[pos])
//}

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num)
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) { 
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)

    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}


function finalizar () {

    if (valores.length == 0) {
        window.alert('Adicione valores')
    } else { 
        valores.sort()
        let quant = valores.length
        res.innerHTML = `Existem ${quant} valores na tabela<br>`

        let maior = valores[quant - 1]
        res.innerHTML += `O maior valor é ${maior}<br>`

        let menor = valores[0]
        res.innerHTML += `O menor valor é ${menor}<br>`
        
        let soma = 0
        for (x = 1; x <= quant ; x++) {
            soma += valores[x-1]
        }
        res.innerHTML += `A soma dos valores é ${soma}<br>`

        let media = soma / quant
        res.innerHTML += `A média dos valores é ${media}` 
    }   
}

function limpar() {
    
        valores.splice(0, valores.length) 
        lista.innerHTML = '' 
        res.innerHTML = 'Insira os valores'
    }

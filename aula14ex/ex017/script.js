function gerar() {
    let numero = window.document.getElementById('numero')
    let n = Number(numero.value)
    let tab = document.getElementById('seltab')
    let multi = 1

    /*res.innerHTML = ' '

    if (n.length == 0) {
        alert('Insira um número')
    } else {
        res.innerHTML = `<p>Tabuada de ${n}</p><br>`
        for (let c = 1; c <= 10; c++) {
            multi = c * n
            
           res.innerHTML += `${c} X ${n} = ${multi} <br>`
        }
    }
    //res.innerHTML */

    if (n == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let c = 1
        tab.innerHTML = ''
        
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }


}
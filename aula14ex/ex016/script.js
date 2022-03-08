function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    let inicioc = Number(inicio.value)
    var fimc = Number(fim.value)
    var passoc = Number(passo.value)
    var contagem = document.querySelector('div#contagem')
    
    window.document.querySelector('div#contagem').innerHTML = ''
    //window.document.querySelector('div#contagem').innerHTML = 

if (passoc == 0 || passoc < 1) {
    alert('Digite um passo maior ou igual a 1')
    } else { 
        contagem.innerHTML = 'Contando: <br>'
        if (inicioc < fimc) {
            // Contagem crescente
            for (var c = inicioc; c <= fimc; c = c + passoc) {
            
                contagem.innerText = ' ' + contagem.innerText + ' ' + c + '\u{1f449}'
                
            }
        } else {
            //contagem decrescente
            for (var c = inicioc; c >= fimc; c -= passoc) {
                contagem.innerHTML += ` ${c} \u{1F449}`
            }
        }
        contagem.innerHTML += `\u{1F3C1}`
    }
       

    }
 



    //window.alert(inicioc + fimc + passoc)



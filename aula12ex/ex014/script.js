function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 14

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12) {
    // BOM DIA!
    img.src = 'manha.png'
    document.body.style.background = 'green'  // ou coloca o codigo de cor, hexadecimal do Photoshop
} else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.jpg'
    document.body.style.background = 'orange'
    // BOA TARDE!
} else {
    img.src = 'noite.jpg'
    document.body.style.background = 'purple'
    // BOA NOITE!
}
}
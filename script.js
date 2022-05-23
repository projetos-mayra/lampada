var botao = document.getElementById('botao')
var lamp = document.getElementById('lampada')

botao.onclick = function()  {
    //alert('Clicado')
    if (botao.value == 'acender') {
        lamp.src = './img/acesa.png' 
        botao.value = 'apagar'
        botao.innerHTML = 'apagar'
    } else{ 
        lamp.src = './img/apagar.png'
        botao.value = 'acender'
        botao.innerHTML = 'acender'

    }
}
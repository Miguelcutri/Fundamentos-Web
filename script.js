let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let comentario = document.querySelector('#comentario')
let nomeOk = false;
let emailOk = false;
let comentarioOk = false;
let mapa = document.querySelector('#mapa')

nome.style.width = '98%'
email.style.width = '98%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'

    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'blue'
        nomeOk = true;
    }
} 

function validaEmail(){
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
     } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'blue'
        emailOk = true;
     }
}

function validaComentario(){
    let txtComentario = document.querySelector('#txtComentario')

    if (comentario.value.length >= 100) {
        txtComentario.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtComentario.style.color = 'red'
        txtComentario.style.display = 'block'
    } else {
        txtComentario.style.display = 'none'
       comentarioOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && comentarioOk== true){
        alert("Enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente antes de enviar")
    }
}

function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '400px'
    mapa.style.transition = '2s'
}
function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}






function salvar(){
   
    var nome = document.querySelectorAll('#nome')[0]
    var email = document.querySelectorAll('#email')[0]
    var mensagem = document.querySelectorAll('#mensagem')[0]
    var erro = document.querySelectorAll('.erro')[0]

    if (nome.value == ''){
        erro.innerHTML = 'Preencha o nome'
        nome.classList.add('input-erro')
        nome.focus()
        return false
    }
    nome.classList.remove('input-erro')    
       
    if (email.value == ''){
        erro.innerHTML = 'Preencha o e-mail'
        email.classList.add('input-erro')
        email.focus()
        return false
    }
    email.classList.remove('input-erro')
    
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if (regex.test(email.value) == false){
    if (!regex.test(email.value)){
        erro.innerHTML = 'E-mail inválido'
        email.classList.add('input-erro')
        email.focus()
        return false
    }
    email.classList.remove('input-erro')
    
    if (mensagem.value == ''){
        erro.innerHTML = 'Escreva a mensagem'
        mensagem.classList.add('input-erro')
        mensagem.focus()
        return false
    }
    mensagem.classList.remove('input-erro')    
       
    alert('Mensagem enviada!')
}





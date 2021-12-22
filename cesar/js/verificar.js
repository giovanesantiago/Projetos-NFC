function VerificaNome(conteudo) {
    const nome = conteudo // Recendo dados
    var nomeHTML = document.getElementById('nome')
    var temNumero = false
    for (let value of nome){
        if (parseInt(value) >= 0) {
            temNumero = true
            break
        }
    }

    if (temNumero){
        alert('[error] - Nao pode haver numeros.') 
        nomeHTML.value = ''
    }else if (nome.length <= 3){
        alert('[error] - Nome incompleto.')
        nomeHTML.value = ''
    }
}

function VerificarTel(conteudo) {
    const telefone = conteudo
    var telHtml = document.getElementById('telefone')
    
    function validPhone (phone) {
        var regex = new RegExp('^\[0-9]{2}\((3[0-9]{7})|(9[0-9]{8}))$');
        return regex.test(phone);
    }
    
    if (validPhone(telefone) == false){
        alert('[error] Confira se o numero foi digitado corretamente : \n  - inclua o DDD com 2 digitos \n - confira se nao faltou nenhum numero')
        telHtml.value = ''
    }
}
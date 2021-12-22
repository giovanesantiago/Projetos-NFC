function enviar() {
   const opmoto = document.getElementById('moto').value
    var moto = ''
    const oppag = document.getElementById('pag').value
    var pag = ''
   switch (opmoto) {
       case '1' : 
            moto = 'Meteor';
            break;
       case '2' :
           moto = 'Himalayan';
           break;
       case '3' :
           moto = 'Interceptor';
           break;
       case '4' :
           moto = 'Continetal';
           break
       default : 
            alert('Escolha uma opção de moto')
   }
   switch (oppag) {
    case '1' : 
         pag = 'a vista';
         break;
    case '2' :
        pag = 'Cartão';
        break;
    case '3' :
        pag = 'Financiamento';
        break;
    default : 
         alert('Escolha uma opção de pagamento')
}
   
    const dados = [
       'Nome : ' + document.getElementById('nome').value + '\n',
       'telefone : ' + document.getElementById('telefone').value + '\n',
       'Email : ' + document.getElementById('email').value + '\n',
       'Moto :' + moto + '\n',
       'Pagamento :' + pag
   ]
   
    
}
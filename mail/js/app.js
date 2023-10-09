// creare la costante con il valore dell'input
const mailDOMElement = document.getElementById('email');
// creare la costante per il valore in caso di successo
const successDOMElement = document.getElementById('success');
// creare la costante per il valore in caso di errore
const errorDOMElement = document.getElementById('error');
// costante messaggio di errore
const invalidInputMail = 'Try again';
// costante messaggio di successo
const correctInputMail = 'We just stole your card data :)';
// costante pulsante login
const loginBtnDOMElement = document.getElementById('login-btn');
// costante array con mail
const email = ['luigi.buffon@gmail.com', 'massimo.boldi@gmail.com', 'giancarlo.magalli@gmail.com', 'jerry.scotti@gmail.com'];
//costante numero elementi array
const lunghezzaArray = email.length;
// creare il loop da controllare
for (let i = 0; i < lunghezzaArray; i++) {
  const emailCorrente = email[i];
  // controllare il loop
  // creare event listener sul pulsante login
  loginBtnDOMElement.addEventListener('click', function () {
    // creare le condizioni da controllare e risultato da stampare
    // condizione per prima mail
    if (mailDOMElement.value === email[0]) {
      successDOMElement.innerHTML = correctInputMail;
    }
    // condizione per seconda mail
    else if (mailDOMElement.value === email[1]) {
      successDOMElement.innerHTML = correctInputMail;
    }
    // condizione per terza mail
    else if (mailDOMElement.value === email[2]) {
      successDOMElement.innerHTML = correctInputMail;
    }
    // condizione per quarta mail
    else if (mailDOMElement.value === email[3]) {
      successDOMElement.innerHTML = correctInputMail;
    }
    // condizione per mail non registrata
    else {
      successDOMElement.innerHTML = invalidInputMail;
    }
  }
  )
}

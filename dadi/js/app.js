console.log('dadi');

let winnerAi = 'Hai perso!';

let winnerUser = 'Hai vinto!';

let draw = 'Pareggio!'

let aiResult = document.getElementById('box');

let playBtnDOMElement = document.getElementById('play-btn');

let resultAi = document.querySelector('.number-ai');

let resultUser = document.querySelector('.number-user');

playBtnDOMElement.addEventListener('click', function () {
  let aiNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  console.log(aiNumber);
  resultAi.innerHTML = aiNumber;

  let userNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  console.log(userNumber);
  resultUser.innerHTML = userNumber;

  if (aiNumber > userNumber) {
    aiResult.innerHTML = winnerAi;

  } else if (aiNumber < userNumber) {
    aiResult.innerHTML = winnerUser;
  } else {
    aiResult.innerHTML = draw
  }
})
var scores, roundscores, activePlayer, dice;

scores = [0,0];
roundscore= 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

document.getElementById("current-" + activePlayer).textContent = dice;
// document.getElementById("current-" + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector("#score-0").textContent;

document.querySelector('.dice').style.display = 'none';
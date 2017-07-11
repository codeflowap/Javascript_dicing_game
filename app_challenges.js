/* NEW RULES

1- The player loses its ENTIRE score if he rolls two 6 in a row and it is the next player turn. 


*/

var scores, roundscores, activePlayer, dice, gamePlaying, dice_roll_1, score_input;

// initialize the game
init();
   // document.querySelector('#fin-score').classList.remove("shadow");








//document.getElementById("current-" + activePlayer).textContent = dice;
// document.getElementById("current-" + activePlayer).innerHTML = '<em>' + dice + '</em>';


document.querySelector('.btn-roll').addEventListener('click', function () {
    
    //using state variable to finish the game
    if (gamePlaying) {
        
    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the results
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';
    
    
    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        
        if (dice === 6) {
            
            if (dice_roll_1 !== 6) {
                
                addScore();
                dice_roll_1 = dice;
            }
            
            else {
                scores[activePlayer] = 0;
                
                // Update the UI
                document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

                diceDOM.src = 'images/dice-6-2.png';
                dice_roll_1 = 0;
                setTimeout(nextPlayer,1000);
                
            }
        } // if (dice === 6)
        
        else {
                addScore();
                dice_roll_1 = dice;
        }
    } // if (dice !== 1) 

        else {
            diceDOM.src = 'images/dice-1-2.png';
            setTimeout(nextPlayer,1000);
        }
    }
})
        
    
    


/* HOLD button ***************************************************************

****************************************************************************/

document.querySelector('.btn-hold').addEventListener('click', function () {
    
    //using state variable to finish the game
    if (gamePlaying) {

    // Add current score to global score
    scores[activePlayer] += roundScore;
    console.log('score = ' + scores[activePlayer]);
        
    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
     // Check if player win the game
    if (scores[activePlayer] >= score_input) {
        document.querySelector('#name-' + activePlayer).textContent = "WINNER!";
        document.querySelector('.dice').style.display = 'none';
        
        // For w/o using state variables to finish the game
        // document.querySelector('.btn-roll').style.display = 'none';
        // document.querySelector('.btn-hold').style.display = 'none';
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
        gamePlaying = false;
        dice_roll_1 = 0;
    }
    
    else {
    // Next Player
     nextPlayer();
    }   
    }
  
    
/* ********************************************************/
    
})

function nextPlayer() {
            // Next player
            // ternary opertor
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            // toggle between the wrappers by making them active 
            /*
            if (activePlayer === 0) {
                document.querySelector('.player-1-panel').classList.remove('active');
                document.querySelector('.player-0-panel').classList.add('active');
            }
            
            else {
                document.querySelector('.player-0-panel').classList.remove('active');
                document.querySelector('.player-1-panel').classList.add('active');
            }
            */
            
            // Updating UI
            document.querySelector('#current-0').textContent = '0';
            document.querySelector('#current-1').textContent = '0';

    
            // toggle between the wrappers by making them active easier method
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    
            
            // hide the dice
            document.querySelector('.dice').style.display = 'none';
            roundScore = 0;
            dice_roll_1 = 0;
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    dice_roll_1 = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Plater 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
        
    document.querySelector('#fin-score').style.display = "block";
    document.querySelector('#btn-fin-score').style.display = "block"; 
    document.querySelector('#scr_input').style.display = "none";
    document.getElementById('fin-score').value = '';
    document.querySelector('#fin-score').placeholder = 'SCORE (2-100)';
    
    // For w/o using state variables to finish the game
    // document.querySelector('.btn-roll').style.display = 'block';
    // document.querySelector('.btn-hold').style.display = 'block';
    
    window.onload = setTimeout(function(){ alert("Enter your desired final score to win!"); }, 500);
    window.onload = setTimeout(function(){document.querySelector('#fin-score').classList.add("shadow"); }, 700);
    
}

function addScore() {
    roundScore += dice;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
}
   
/*
function addShadow() {
    document.querySelector('#fin-score').classList.add("shadow");
   }
     
function removeShadow() {
    document.querySelector('#fin-score').classList.remove("shadow");
    }
*/

function submitScore() {
    
    score_input = document.getElementById('fin-score').value;
    console.log('score =' + score_input);
    
    document.querySelector('#fin-score').style.display = "none";
    document.querySelector('#btn-fin-score').style.display = "none";
    document.querySelector('#scr_input').style.display = "block";

    document.getElementById('scr_input').innerHTML = "TARGET =" + score_input; 

}










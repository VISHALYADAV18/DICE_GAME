	/*
	GAME RULES:  

	- The game has 2 players, playing in rounds
	- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
	- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
	- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
	- The first player to reach 100 points on GLOBAL score wins the game

	*/
	//declare game variable
	var scores,roundScore,activePlayer,gamePlaying,finalScore;

	init();

	//changing dice on click of roll dice and storing the value of dice into current box
	document.querySelector('.btn-roll').addEventListener('click',function()
	{
		if(gamePlaying)
		{
		//generating random no between 1 and 6 
		var dice=Math.floor((Math.random()*6)+1);

		var diceDOM=document.querySelector('.dice');
		diceDOM.style.display = 'block';
	    diceDOM.src = 'dice-' + dice + '.png';

	    // Update the round score IF the rolled number was NOT a 1
	    if(dice !== 1)
	    {
	    roundScore+=dice;
	    document.querySelector('#current-'+activePlayer).textContent=roundScore;
	    }
	    else
	    {
	    	//next player
	         nextPlayer();
	    }
	}

	});
	function nextPlayer()
	{
		  	activePlayer==0 ? activePlayer=1 : activePlayer=0
	    	roundScore=0;
	        document.getElementById('current-0').textContent = '0';
	    	document.getElementById('current-1').textContent = '0';
			document.querySelector('.player-0-panel').classList.toggle('active');
	    	document.querySelector('.player-1-panel').classList.toggle('active');
	}



	document.querySelector('.btn-hold').addEventListener('click',function()
	{
	if(gamePlaying)
	{
	//upating to the main wallet/scoreboard
	scores[activePlayer]+=roundScore;
	document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
	document.querySelector('.dice').style.display = 'none';
	// Undefined, 0, null or "" are COERCED to false
    // Anything else is COERCED to true
	 
	//checking who wins the game
	if (scores[activePlayer]>=10)
	{
	document.querySelector('#name-'+activePlayer).textContent='Winner !';
	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
	document.querySelector('.cup-'+activePlayer).style.display = 'block';
	gamePlaying=false;

	}
	else
	{
		nextPlayer();
	}
}

	});


   //restaring the game if the match is over
   document.querySelector('.btn-new').addEventListener('click', init);
   function init()
   {
    scores=[0,0];
	roundScore=0;
	activePlayer=0;
	gamePlaying=true;

	//reseting all the values to zero
	document.querySelector('#score-0').textContent='0';
	document.querySelector('#score-1').textContent='0';
	document.querySelector('#current-0').textContent='0';
	document.querySelector('#current-1').textContent='0';
	document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
   document.querySelector('.cup-0').style.display = 'none';
   document.querySelector('.cup-1').style.display = 'none';



   }
















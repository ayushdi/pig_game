/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores=[0,0];
var finscores=[0,0];
var active=0;
// console.log(dice);
document.querySelector(".dice").style.display='none';
document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice=Math.floor(Math.random()*6)+1;
    document.querySelector(".dice").style.display='block';
    
    document.querySelector(".dice").src="dice-"+dice+'.png';
    
    if(dice!=1)
    {
        scores[active]+=dice;
        document.querySelector("#current-"+active).textContent=scores[active];
    }
    else{
        document.querySelector('.player-'+active+'-panel').classList.remove('active');
        scores[active]=0;
        document.querySelector("#current-"+active).textContent=scores[active];
        if(active==1)
            active=0;
        else
            active=1;
        document.querySelector('.player-'+active+'-panel').classList.add('active');    
    }
    console.log(scores);
    
})
document.querySelector('.btn-hold').addEventListener('click',function(){
    document.querySelector('.player-'+active+'-panel').classList.remove('active');
    if(active==1)
    {
        finscores[active]+=scores[1];
        scores[1]=0;
        active=0;
        
    } 
    else
    {
        finscores[active]+=scores[0];
        scores[0]=0;
        active=1;
        
    }
    document.querySelector('.player-'+active+'-panel').classList.add('active');
    console.log(finscores);
})
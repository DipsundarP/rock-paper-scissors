const score = JSON.parse(localStorage.getItem('score'))|| {
  wins: 0,
  losses: 0,
  ties: 0
}; 



updateScoreElement();




/*
if(!score) {
score ={
  wins: 0,
  losses: 0,
  Ties: 0
}
};
*/


function playgame(playerMove)
{
const computerMove = picComputerMove();   
let result = '';
if(playerMove === 'rock') {
  
    if(computerMove === 'rock') {
      result = 'Tie.';}

    else if(computerMove === 'paper') {
      result = 'you lose.';}
      
    else if(computerMove === 'scissors') {
      result = 'you win.';} 
} else if (playerMove === 'paper') {
  if(computerMove === 'rock') {
       result = 'you win.';}

  else if(computerMove === 'paper') {
       result = 'Tie.';}

   else if(computerMove === 'scissors') {
        result = 'you lose.';}
} else if (playerMove === 'scissors') {
  if(computerMove === 'rock') {
      result = 'you lose.';}

   else if(computerMove === 'paper') {
      result = 'you win.';}

   else if(computerMove === 'scissors') {
       result = 'Tie.';} 

}
 if(result === 'you win.') {
  score.wins += 1;
}
else if(result === 'you lose.') {
  score.losses += 1;
}
else if(result === 'Tie.') {
  score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score)); 

updateScoreElement();
 
document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = ` You
<img src="${playerMove}.png" class="move-icon">
<img src="${computerMove}.png" class="move-icon">
Computer`;
    
}
function updateScoreElement()
{
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`;
}


function picComputerMove(){
const randomNumber= Math.random();
let computerMove = '';
if(randomNumber >= 0 && randomNumber < 1 / 3){
computerMove ='rock';} 


else if (randomNumber >= 1 / 3 && randomNumber < 2 /3){
  computerMove ='paper';}


else if(randomNumber >= 2 / 3 && randomNumber < 1){
computerMove = 'scissors';}

//console.log(computerMove);

return computerMove;


}
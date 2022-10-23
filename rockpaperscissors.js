"use strict";
const computerChoiceDisplay= document.getElementById('computer-choice');
const userChoiceDisplay= document.getElementById('user-choice');
const resultDisplay= document.getElementById('result');

const possibleChoices=document.querySelectorAll('button');

let userchoice, computerChoice,result;
possibleChoices.forEach(button => button.addEventListener('click',(e)=> {
   userchoice=e.target.id;
   userChoiceDisplay.innerHTML=userchoice;
   generateComputerChoice();
   getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*possibleChoices.length) +1;

    if(randomNumber===1) {
        computerChoice='rock';
    }
    if(randomNumber===2) {
        computerChoice='paper';
    }
    if(randomNumber===3) {
         computerChoice='scissors'; 
    }

    computerChoiceDisplay.innerHTML=computerChoice;
}

function getResult(){
    if (computerChoice===userchoice){
      result='draw';
   }
    if (computerChoice==='rock' && userchoice==='paper'){
    result='you win';
   }
    if (computerChoice==='rock' && userchoice==='scissors'){
    result='you lose';
   } 
    if (computerChoice==='paper' && userchoice==='scissors'){
    result='you win';
   }
    if (computerChoice==='paper' && userchoice==='rock'){
    result='you lose';
   }
    if (computerChoice==='scissors' && userchoice==='paper'){
    result='you lose';
   }
    if (computerChoice==='scissors' && userchoice==='rock'){
    result='you win';
   }

   resultDisplay.innerHTML=result;
}
let randomnumber = Math.round((Math.random()*100 + 1));

const submit  =  document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot  = document.querySelector('.guesses');
const remening = document.querySelector('.lastResult');
const lowhigh = document.querySelector('.lowOrHi');

const start = document.querySelector('.resultParas');

const p  = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playGame =true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess =parseInt( userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess >100){
        alert('please enter a valid number');
    }
    else{
        prevguess.push(guess);
        if(numguess>10){
            dispGuess(guess);
            dispMsg(`Game Over..Random Number was ${randomnumber}`);
            endGame();
        }
        else{
            dispGuess(guess);
            checkGuess(guess);

        }
    }

}

function checkGuess(guess){
    if(guess === randomnumber){
        dispMsg(`you guessed right !! you Won:)`);
        endGame();
    }
    else if(guess<randomnumber){
        dispMsg(`you guess is smaller!!`);
    }
    else{
        dispMsg(`you guess is higher!!`);
    }
}
function dispGuess(guess){
    userInput,VALUE ='';
    guessSlot.innerHTML +=`${guess} `;
    numguess++;
    remening.innerHTML = `${11-numguess}`;
}
function dispMsg(msg){
    lowhigh.innerHTML = `<h2>${msg}</h2>`;
}

function endGame(){
    userInput.value ='';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
    start.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
    const newbtn = document.querySelector('#newGame');
    newbtn.addEventListener('click',()=>{
        randomnumber = Math.round((Math.random()*100 + 1));
        prevguess=[];
        numguess=1;
        guessSlot.innerHTML=''
        remening.innerHTML = `${11-numguess}`;
        userInput.removeAttribute('disabled');
        start.removeChild('p');
        playGame=true;
    })
}

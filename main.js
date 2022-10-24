window.addEventListener('load',init);
// Availbale Level
const levels ={
	easy:5,
	medium:3,
	hard:1
};


const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;


const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Array of Words
const words = [
'hat',
'river',
'lucky',
'statue',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'javascript',
'nutrition',
'revolver',
'echo',
'siblings',
'investigate',
'horrendous',
'symptom',
'laughter',
'magic',
'master',
'space',
'defintion'
];

// Initialize Game
function init(){
	
	showWord(words);
	seconds.innerHTML = currentLevel
	wordInput.addEventListener('input',startMatch);
	setInterval(countdown,1000);
	setInterval(checkStatus,50);
}

//Start Match
function startMatch(){
	if(matchWords()){
		isPlaying = true;
		time =currentLevel + 1;
		showWord(words);
		wordInput.value ='';
		score++;
	}
	scoreDisplay.innerHTML =score;
	
	if(score === -1)
	{
		scoreDisplay.innerHTML =0;
	}
	else
	{
		scoreDisplay.innerHTML =score;
	}

}

function matchWords(){
if(wordInput.value === currentWord.innerHTML){
		message.innerHTML = "Correct !!!";
		return true;	
		}
		else{
		message.innerHTML='';
		return false
		}
}

function showWord(words){
	const randIndex = Math.floor(Math.random() * words.length); // Math.random gives the number between 0 to 1 min =0 max=1 and between like 0.99
	currentWord.innerHTML = words[randIndex];
}


function countdown()
{
	// Make sure time is not run not
	if(time>0){
		
	time--;
	}
	else if(time ==0)
		
	isPlaying = false;

	timeDisplay.innerHTML = time;

}

function checkStatus(){
	if(!isPlaying && time === 0){
		message.innerHTML="Game Over!!!";
		score=-1;
	}
}
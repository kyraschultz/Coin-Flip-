let coinFlipper = {
	'coinside': ['H', 'T'],
	
}
var score = 0;
var count = 0;
score.innerHTML = 0;
document.getElementById("new-game").style.visibility="hidden";
document.getElementById("coin-flip").style.visibility ="visible";
document.getElementById("reset").style.visibility ="visible";
document.getElementById("end-button").style.visibility ="visible";
let coinFlipSound = new Audio('static/sounds/coinflip.mp3')
document.querySelector('#coin-flip').addEventListener('click', coinFlip);
document.querySelector('#reset').addEventListener('click', reset);
document.querySelector('#end-button').addEventListener('click', endGame);
document.querySelector('#new-game').addEventListener('click', pageReload);
//document.querySelector("BUTTON").addEventListener('click',location.reload());
function reset(){
	document.querySelector('img').remove();
}
function randomCoin(){
	let randomIndex = Math.floor(Math.random()*2);
	return coinFlipper['coinside'][randomIndex];
}

function coinFlip(){
	coinFlipSound.play();
	count ++;
	let coin = randomCoin();
	let coinImage = document.createElement('img');
	let coinGuess = prompt("Heads or Tails?: ")
	if (coin === 'H')
	{
		if (coinGuess === "Heads"){
			score += 1;
		}
		coinImage.src = 'kyra.jpg'
       setTimeout(function() { document.querySelector('body').appendChild(coinImage); }, 1000);
	}
	else if (coin === 'T'){
		if (coinGuess === "Tails"){
			score += 1;
		}
		coinImage.src = 'https://random-ize.com/coin-flip/us-half-dollar/us-half-dollar-back.jpg'
       setTimeout(function() { document.querySelector('body').appendChild(coinImage); }, 1000);
	}
	
}
function endGame(){
	//document.write('Score: ' + score);
	document.getElementById("new-game").style.visibility ="visible";
	document.getElementById("message").innerHTML = "Final Score: " + score + " correct out of " + count + " coin flips";
	document.getElementById("coin-flip").style.visibility="hidden";
	document.getElementById("reset").style.visibility="hidden";
	document.getElementById("end-button").style.visibility="hidden";
	for (let i = 0; i <count; i++)
	{
		document.querySelector('img').remove();
	}
	//document.write("Final Score: " + score + " correct out of " + count + " coin flips");
	
	//document.write("AHHHHHH");
	//document.getElementById("new-game").style.visibility ="visible";
	//document.write("AHHHHHH");
	
}

function pageReload(){
	location.reload();
}


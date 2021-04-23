/* Global constants/variables*/

// Wasp
let waspSprite = document.getElementById("annoying");

let timer;

let score = 0, 
misses = 0, 
speed = 3000; //lower = faster

/* Elements */

let txtScore = document.getElementById("score");
let txtMisses = document.getElementById("misses");
let txtStatus = document.getElementById("status");
let divStatus = document.getElementById("statusArea");

/* Listeners */

waspSprite.addEventListener("mousedown", swat);
document.getElementById("resetScore").addEventListener("click", resetScore);
document.getElementById("resetSpeed").addEventListener("click", resetSpeed);

/* Main */

window.addEventListener("load", function() {
	TMSignOn();
	waspDefaultLocation();
});

/* Functions */

function swat() {
	// Change status
	txtStatus.textContent = "Wasp was swatted!";
	divStatus.style.backgroundColor = "#007c00";
	
	// Reward player for swatting
	score ++;
	txtScore.textContent = score;

	// Descrease timer speed
	speed -= 75;
	
	// Reset timer
	clearTimeout(timer);

	// Move wasp
	moveWasp();
}

function noSwat() {
	// Change status
	txtStatus.textContent = "You missed the wasp!";
	divStatus.style.backgroundColor = "#9b0000";

	// Reward player for missing like a newb Widowmaker
	misses++;
	txtMisses.textContent = misses;

	// Move wasp
	moveWasp();
}

function moveWasp() {
	let randomx = Math.floor(Math.random() * (630 - 10) + 10);
	let randomy = Math.floor(Math.random() * (330 - 10) + 10);
	waspSprite.style.left = randomx + "px";
	waspSprite.style.top = randomy + "px";
	timeToMove();
}

function resetSpeed() {
	// Change status
	txtStatus.textContent = "The speed has been reset!";
	divStatus.style.backgroundColor = "#082568";
	
	// Reset timer
	clearTimeout(timer);

	// Reset speed
	speed = 3500;

	// Move wasp
	moveWasp();
}

function resetScore() {
	// Change status
	txtStatus.textContent = "The score has been reset!";
	divStatus.style.backgroundColor = "#082568";
	
	// Reset timer
	clearTimeout(timer);

	// Reset score
	score = 0;
	txtScore.textContent = score;
	misses = 0;
	txtMisses.textContent = misses;
	
	// Move wasp
	moveWasp();
}

function waspDefaultLocation() {
	waspSprite.style.left = 500 + "px";
	waspSprite.style.top = 325 + "px";
}

function timeToMove() {
	timer = setTimeout(noSwat, speed);
}

function TMSignOn() {
	console.log("TMinus10 is signing on. (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧");
}
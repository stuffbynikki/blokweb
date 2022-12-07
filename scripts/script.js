/****************/ /* Hamburger menu */ /****************/

// stap 1: zoek de menu-button op en sla die op in een variabele
var deMenuButton = document.querySelector("header > button")
var deNav = document.querySelector("header nav");
var deSluitButton = document.querySelector("header nav button");
var deWaas = document.querySelector("header div");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deMenuButton.addEventListener("click", toggleMenu)
deSluitButton.addEventListener("click", toggleMenu)
deWaas.addEventListener("click", toggleMenu)

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {
  deNav.classList.toggle("open");
  deWaas.classList.toggle("open");
}

/****************/ /* Button Mp3 afspeler */ /****************/
var playButton = document.querySelector(".mp3button");
var sound = document.querySelector("audio");

playButton.addEventListener("click", playSound);

function playSound() {
	sound.play();
}

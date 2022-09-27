
const words = [
    'mirar',
    'pensar',
    'amar',
    'respirar',
    'enamorar',
    'caminar',
    'bailar',
    'reir'
];

const word = words[Math.floor(Math.random()*words.length)];

const wordsWithHyphens = word.replace(/./g, " _");


function secret_word() {
    const word = document.getElementById("inputTexto").value
    
}

function iniciarJuego() {
    document.getElementById("enterWord").style.display = "none";
    document.getElementById("iconifyId").style.display = "none";
    document.getElementById("saveStart").style.display = "none";
    document.getElementById("cancel").style.display = "none";

}

let buttonPlay = document.getElementById("startGameId");
buttonPlay.addEventListener("click", iniciarJuego);

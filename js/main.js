import Hero from './modules/Hero.js';


let  le_heros = new Hero({ name: "Fangor"})

function changeHeroName(event) {
    le_heros.name = event.target.value
}

var el = document.getElementById("heroNameInput");
el.addEventListener("change", changeHeroName, false);

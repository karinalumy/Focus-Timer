// ------------------------------------------------------------------------------------------ //
//                                      Tema                                                  //
// ------------------------------------------------------------------------------------------ //


const buttonSun = document.querySelector(".sun")
const buttonMoon = document.querySelector(".moon")

function mudaModo() {
    document.body.classList.toggle("dark");
    
    buttonSun.classList.add('hide')
    
    buttonMoon.classList.remove('hide')
  }

  function mudaModoMoon() {
    document.body.classList.toggle("dark");
    buttonSun.classList.remove('hide')
    
    buttonMoon.classList.add('hide')
  }


// ------------------------------------------------------------------------------------------ //
//                                      Sons e Volumes                                        //
// ------------------------------------------------------------------------------------------ //

const tree = new Audio("music/Floresta.wav");
let volumeTree = document.querySelector("#volume-sliderTree")
volumeTree.addEventListener("change", function(e){
  tree.volume = e.currentTarget.value / 100
})
function treeSound () {
  tree.play()
}


const Rain = new Audio("music/Chuva.wav");
let volumeRain = document.querySelector("#volume-sliderRain")
volumeRain.addEventListener("change", function(e){
  Rain.volume = e.currentTarget.value / 100
})
function rainSound () {
  Rain.play()
}

const shop = new Audio("music/Cafeteria.wav");
let volumeshop = document.querySelector("#volume-sliderShop")
volumeshop.addEventListener("change", function(e){
  shop.volume = e.currentTarget.value / 100
})
function coffeeSound () {
  shop.play()
}

const fireplace = new Audio("music/Lareira.wav");
let volumefireplace = document.querySelector("#volume-sliderFire")
volumefireplace.addEventListener("change", function(e){
  fireplace.volume = e.currentTarget.value / 100
})
function fireplaceSound () {
  fireplace.play()
}

// ------------------------------------------------------------------------------------------ //
//                                          Timer Buttons                                     //
// ------------------------------------------------------------------------------------------ //

var min = 0;
var seconds = 0;

var intervalTempo = 1000; //quantos milésimos de segundos
var tempoInicioMin = document.getElementsByClassName("minutes")[0].innerText

var tempoInicioSec =  document.getElementsByClassName("seconds")[0].innerText

var cron;

function start() {
    if (tempoInicioMin == 0 && tempoInicioSec == 0) {
        return (alert ("Quanto tempo?"))
    }
    cron = setInterval(() => { timer(); }, intervalTempo);

} 

function stop() {
    clearInterval(cron);
    tempoInicioMin = 0;
    tempoInicioSec = 0;

    var formatMin = (tempoInicioMin < 10 ? "0" + tempoInicioMin : tempoInicioMin)
    //var formatMin = String(tempoInicioMin).padStart(2, "0")
    document.getElementsByClassName("minutes")[0].innerText = formatMin

    var formatSec = (tempoInicioSec < 10 ? "0" + tempoInicioSec : tempoInicioSec)
    document.getElementsByClassName("seconds")[0].innerHTML = formatSec

}

function plus() {
    tempoInicioMin = Number(tempoInicioMin)
    tempoInicioMin = tempoInicioMin +5
    var formatMin = String(tempoInicioMin).padStart(2, "0")

    document.getElementsByClassName("minutes")[0].innerText = formatMin
}

function minus() {
    tempoInicioMin = Number(tempoInicioMin)
    tempoInicioMin = tempoInicioMin -5
    var formatMin = String(tempoInicioMin).padStart(2, "0")

    if (tempoInicioMin < 0) {
        alert("O valor do cronômetro não pode ser negativo")
        tempoInicioMin = 0;
        tempoInicioSec = 0;

        var formatMin = (tempoInicioMin < 10 ? "0" + tempoInicioMin : tempoInicioMin)
        //var formatMin = String(tempoInicioMin).padStart(2, "0")
        document.getElementsByClassName("minutes")[0].innerText = formatMin

        var formatSec = (tempoInicioSec < 10 ? "0" + tempoInicioSec : tempoInicioSec)
        document.getElementsByClassName("seconds")[0].innerHTML = formatSec
        return
    }
    document.getElementsByClassName("minutes")[0].innerText = formatMin
}

function timer() {
    tempoInicioSec = tempoInicioSec-1
    
    if (tempoInicioSec < 0) {
        tempoInicioSec = 59
        tempoInicioMin--
    } 
    
    var formatSec = String(tempoInicioSec).padStart(2, "0")
    //var formatSec = (tempoInicioSec < 10 ? "0" + tempoInicioSec : tempoInicioSec)
    document.getElementsByClassName("seconds")[0].innerHTML = formatSec

    //var formatMin = (tempoInicioMin < 10 ? "0" + tempoInicioMin : tempoInicioMin)
    var formatMin = String(tempoInicioMin).padStart(2, "0")
    document.getElementsByClassName("minutes")[0].innerHTML = formatMin

    if (tempoInicioMin == 0 && tempoInicioSec == 0) {
        clearInterval(cron)
    }
}


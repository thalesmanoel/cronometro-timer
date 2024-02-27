var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var tipos = document.getElementById("tipos")
var btnIniciar = document.getElementById("iniciar")
var btnCronometro = document.getElementById("cronometrobtn")
var btnTimer = document.getElementById("timerbtn")
var inputs = document.querySelector("#inputs-none")

inputs.classList.remove("inputs")
inputs.classList.add("inputs-none")

var numerator = document.getElementById("timer")
var secCron = 0
var minCron = 0
var hoursCron = 0
var interval

//FUNÇÃO PARA MUDAR ENTRE CRONÔMETRO E TIMER
function timerClicado(){
    if(tipos.classList.contains("tipo-cron")){

        tipos.classList.remove("tipo-cron")
        tipos.classList.add("tipo-timer")

        inputs.classList.remove("inputs-none")
        inputs.classList.add("inputs")
    }
}

function cronClicado(){
    if(tipos.classList.contains("tipo-timer")){
        
        tipos.classList.remove("tipo-timer")
        tipos.classList.add("tipo-cron")

        inputs.classList.remove("inputs")
        inputs.classList.add("inputs-none")
    }
}

btnTimer.addEventListener('click', ()=>{
    opcoes.innerHTML = `
<p class="iniciar" onclick="iniciarTimer()" id="iniciar">Iniciar</p>`

}) 

btnCronometro.addEventListener('click', ()=>{
    opcoes.innerHTML = `<p class="zerar" onclick="zerarCron()">Zerar</p>
<p class="parar" onclick="pausarCron()">Parar</p>
<p class="iniciar" onclick="iniciarCron()" id="iniciar">Iniciar</p>`
    
})


    //FUNÇÕES PARA O CRONÔMETRO
function iniciarCron(){
    interval = setInterval(counter, 1000)
}

function pausarCron(){
    clearInterval(interval)
}

function zerarCron(){
    clearInterval(interval)
    secCron = 0
    minCron = 0
    numerator.innerHTML =`00:00:00`
}

function counter(){
    secCron++
    if(secCron == 60){
        minCron++
        secCron = 0
        if(minCron == 60){
            minCron = 0
            hoursCron++
        }
    }

    numerator.innerHTML =`${formatador(hoursCron)}:${formatador(minCron)}:${formatador(secCron)}`
}

function formatador(numero){
    if(numero < 10){
        return("0"+numero)
    }else{
        return(numero)
    }
}
    

// FUNÇÕES PARA O TIMER
function iniciarTimer(){
    var duration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + parseInt(seconds.value)

    
    timer(duration, numerator)
}

const timer = (duration, numerator)=>{
    let tempo = duration
    let hours, minutes, seconds
    var contador = setInterval(() => {
        hours = Math.floor((tempo/60)/60)
        minutes = Math.floor((tempo/60)-(hours * 60))
        seconds = Math.floor(tempo % 60)

        hours = hours < 10 ? "0"+hours : hours
        minutes = minutes < 10 ? "0"+minutes : minutes
        seconds = seconds < 10 ? "0"+seconds : seconds

        numerator.innerHTML = `${hours}:${minutes}:${seconds}`

        tempo -= 1

        if(tempo < 0){
            numerator.innerHTML = "ACABOU"
            clearInterval(contador)
        }
    }, 1000);
}

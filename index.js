var minutes = 00
var seconds = 00
var miliSeconds = 00
var appendMinutes = document.getElementById('minutes')
var appendSeconds = document.getElementById('seconds')
var appendMiliSeconds = document.getElementById('miliSeconds')
var start = document.getElementById('start')
var stop = document.getElementById('stop')
var reset = document. getElementById('reset')

var interval;

function toStart(){
    clearInterval(interval)
    interval = setInterval(starTimer, 
    10)
}

function toStop() {
    clearInterval(interval)
}

function toReset() {
    clearInterval(interval)
    miliSeconds = "00"
    seconds = "00"
    minutes ="00"
    appendMiliSeconds.innerHTML = miliSeconds
    appendSeconds.innerHTML = seconds
    appendMinutes.innerHTML = minutes
}

function starTimer() {
    miliSeconds++

    if(miliSeconds <= 9){
        appendMiliSeconds.innerHTML = "0" + miliSeconds
    }
    
    if (miliSeconds > 9) {
        appendMiliSeconds.innerHTML = miliSeconds
    }
    
    if(miliSeconds > 99) {
        seconds++
        appendSeconds.innerHTML = "0" + seconds
        miliSeconds = 0
    }
    
    if(seconds > 9) {
        appendSeconds.innerHTML = seconds
    }

    if(seconds > 59) {
        minutes++
        appendMinutes.innerHTML = "0" + minutes
        appendSeconds.innerHTML = "00" 
        seconds = 00
    }

    if(minutes > 9) {
        appendMinutes.innerHTML = minutes
    }
}

start.addEventListener('click', toStart)
stop.addEventListener('click', toStop)
reset.addEventListener('click', toReset)

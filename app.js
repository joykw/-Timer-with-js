//Data and Variables
let timer;
let oldTime;
const SECONDS_IN_MINUTES = 60;
let timeLeft = 25 * SECONDS_IN_MINUTES + 00; //Minutes as seconds plus the second

//Cache the DOM
const display = document.querySelector('.display');
const minutes = display.querySelector('.minutes');
const seconds = display.querySelector('.seconds');
const controls = document.querySelector('.controls');
const starttButton = controls.querySelector('.start');
const stopButton = controls.querySelector('.stop');
const resetButton = controls.querySelector('.reset');


//Add listeners
starttButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

//Initialization
render();
    
    //Functions
function start(){
    oldTime = timeLeft;
    if(!timer){
        timer = setInterval(tick, 1000);
    }  
}


function tick(){
    timeLeft -= 1
    render();
}


function stop (){
    clearInterval(timer);
    timer = undefined;
}

function reset(){
    if(!oldTime){
        return;
    }
    timeLeft = oldTime;
    stop();
    render();

}


function render(){
const minutesLeft = Math.floor(timeLeft / SECONDS_IN_MINUTES);
const secondsLeft = timeLeft % SECONDS_IN_MINUTES;
minutes.textContent = pad(minutesLeft);
seconds.textContent = pad(secondsLeft);
}
function pad(num){
    if(num < 10){
        return `0${num}` 
    } else {
        return num
    }
}
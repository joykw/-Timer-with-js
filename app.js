class Timer{
    constructor(element, minutes=25, seconds=0){
        this.SECONDS_IN_MINUTES = 60;
        this.timeLeft = minutes * this.SECONDS_IN_MINUTES + seconds;
        this.element = element;
        this.cacheDOM();
        this.addListeners();
        this.render();
    }

    cacheDOM(){
        this.rootElement = document.querySelector(this.element)
        this.display = this.rootElement.querySelector('.display')
        this.minutes = this.display.querySelector('.minutes');
        this.seconds = this.display.querySelector('.seconds');
        this.controls = this.rootElement.querySelector('.controls');
        this.startButton = this.controls.querySelector('.start');
        this.stopButton = this.controls.querySelector('.stop');
        this.resetButton = this.controls.querySelector('.reset');

    }
    addListeners(){
        this.startButton.addEventListener('click', this.start.bind(this));
        this.stopButton.addEventListener('click', this.stop.bind(this));
        this.resetButton.addEventListener('click', this.reset.bind(this));
    }
    render(){
        const minutesLeft = Math.floor(this.timeLeft / this.SECONDS_IN_MINUTES);
        const secondsLeft = this.timeLeft % this.SECONDS_IN_MINUTES;
        this.minutes.textContent = this.pad(minutesLeft);
        this.seconds.textContent = this.pad(secondsLeft);
    }
    start(){
        this.oldTime =this.timeLeft
        if(!this.ticker){
            this.ticker = setInterval(this.tick.bind(this), 1000);
        }
    }
    stop(){
        clearInterval(this.ticker);
        this.ticker = undefined;
    }
    reset(){
        if(!this.oldTime){
            return
        }

        this.timeLeft = this.oldTime;
        this.stop();
        this.render();

    }

    tick(){
if(this.timeLeft === 0){
    this.stop();
}else {
    this.timeLeft -= 1;
        this.render();
    }     
}
    
    pad(num){
        if(num < 10){
            return  `0${num}`;
        } else {
            return num;
        }
    }
}
console.log(new Timer('#timer', 0, 5));



// new Timer('#timer2')
//Data and Variables
// let timer;
// let oldTime;
// const SECONDS_IN_MINUTES = 60;
// let timeLeft = 25 * SECONDS_IN_MINUTES + 00; //Minutes as seconds plus the second

// //Cache the DOM
// const display = document.querySelector('.display');
// const minutes = display.querySelector('.minutes');
// const seconds = display.querySelector('.seconds');
// const controls = document.querySelector('.controls');
// const starttButton = controls.querySelector('.start');
// const stopButton = controls.querySelector('.stop');
// const resetButton = controls.querySelector('.reset');


// //Add listeners
// starttButton.addEventListener('click', start);
// stopButton.addEventListener('click', stop);
// resetButton.addEventListener('click', reset);

// //Initialization
// render();
    
//     //Functions
// function start(){
//     oldTime = timeLeft;
//     if(!timer){
//         timer = setInterval(tick, 1000);
//     }  
// }


// function tick(){
//     timeLeft -= 1
//     render();
// }


// function stop (){
//     clearInterval(timer);
//     timer = undefined;
// }

// function reset(){
//     if(!oldTime){
//         return;
//     }
//     timeLeft = oldTime;
//     stop();
//     render();

// }


// function render(){
// const minutesLeft = Math.floor(timeLeft / SECONDS_IN_MINUTES);
// const secondsLeft = timeLeft % SECONDS_IN_MINUTES;
// minutes.textContent = pad(minutesLeft);
// seconds.textContent = pad(secondsLeft);
// }
// function pad(num){
//     if(num < 10){
//         return `0${num}` 
//     } else {
//         return num
//     }
// }
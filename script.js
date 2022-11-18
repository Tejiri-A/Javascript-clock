setInterval(setClock, 1000) //to call a function every millisecond

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

//the time function
function setClock() {
    const currentDate = new Date(); //gives the current time you run it on
    const secondsRatio = (currentDate.getSeconds() / 60); //gets seconds of date rotates at 60 seconds
    const minuteRatio = (secondsRatio +  currentDate.getMinutes()) / 60; //gets minute of the date rotates gradually at every minute, seconds ratio is the percentage of a minute
    const hoursRatio = ((minuteRatio +  currentDate.getHours()) / 12); // rotates clock gradually at evert hour, minutes ratio is the percentage of an hour

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hoursRatio);
}

// the rotation function
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
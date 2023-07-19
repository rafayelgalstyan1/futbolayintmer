let seconds = 30;

function getElement(id) {
    return document.getElementById(id);
}

function timer() {
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);

        }
        if (seconds === 8) {
            getElement("time").style.color = "blue"
        }
        if (seconds === 29) {
            getElement("time").style.color = "green"
        }
        if (seconds === 20) {
            getElement("time").style.color = "yellow"
        }
        if (seconds === 5) {
            getElement("time").style.color = "red"
        }
    }, 1000);
}

timer();


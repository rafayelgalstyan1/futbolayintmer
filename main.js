let seconds = 30;
let correctAnswer = 0;
let incorrectAnswer = 0;


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

function check() {
    let input;
    try {
      input = document.querySelector('input[name = "option"]:checked').value;
    } catch {
      return;
    }
    if (input === "Հայաստան") {
      correctAnswer++;
      getElement("score").innerHTML = correctAnswer;
    } else {
      incorrectAnswer++;
    }
    clearInterval(checkInterval);
  }
  function finish() {
    clearInterval(checkInterval);
    let percentage = (correctAnswer / (correctAnswer+incorrectAnswer)) *100;
    getElement("alertaccuracy").innerHTML = ` qo ardyunqn e ${percentage}%`;
  }
  let checkInterval = setInterval(check, 50);
  timer();


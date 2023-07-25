let correct;
let seconds = 30;
let correctAnswer = 0;
let incorrectAnswer = 0;


function getElement(id) {
  return document.getElementById(id);
}

function getRandomCountry() {
  return countries[Math.floor(Math.random() * (countries.length - 1))]
}

function main() {
  let options = []
  const maxOptions = 3;
  while (options.length < maxOptions) {
    let coun = getRandomCountry();
    if (options.indexOf(coun) === -1) {
      options.push(coun)
    }
  }
  for (let i = 0; i < options.length; i++) {

    getElement(`optionlabel${i}`).innerHTML = options[i].name;
    getElement(`optioninput${i}`).value = options[i].name;
    getElement(`optioninput${i}`).checked = false;
  }

  correct = options[Math.round(Math.random() * (options.length - 1))]
  getElement("footballteam").src = correct.team
}

function timer() {
  setTimeout(finish, seconds * 1000);
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
  if (input === correct.name) {
    correctAnswer++;
    getElement("score").innerHTML = correctAnswer;
  } else {
    incorrectAnswer++;
  }
  main();
}
function finish() {
  clearInterval(checkInterval);
  getElement("alert").style.display = "block";
  getElement("card").style.display = "none";
  getElement("alertscore").innerHTML = correctAnswer;
  let percentage = (correctAnswer / (correctAnswer + incorrectAnswer)) * 100;
  if (isNaN(percentage)) {
    percentage = 100;
  } 
  getElement("alertaccuracy").innerHTML = ` Քո արձյունքն է${percentage}%`;
}

 function refresh() 
 { 
     location = location;
 }
let checkInterval = setInterval(check, 50);
main();


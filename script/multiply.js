const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const wrongAudio = document.getElementById("wrong");
const correctAudio = document.getElementById("correct");

let answer = 0;

function generateEquation() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);

    let dummy1 = Math.floor(Math.random() * 144);
    let dummy2 = Math.floor(Math.random() * 144);

    answer = num1 * num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    let allAnswers = [answer, dummy1, dummy2];
    let shuffled = [];

    for (let i = allAnswers.length; i > 0; i--) {
        shuffled.push(allAnswers.splice(Math.floor(Math.random() * i), 1)[0]);
    }

    option1.innerHTML = shuffled[0];
    option2.innerHTML = shuffled[1];
    option3.innerHTML = shuffled[2];
}

function checkAnswer(option) {
    if (parseInt(option.innerHTML) === answer) {
        correctAudio.play();
        generateEquation();
    } else {
        wrongAudio.play();
    }
}

option1.addEventListener("click", () => checkAnswer(option1));
option2.addEventListener("click", () => checkAnswer(option2));
option3.addEventListener("click", () => checkAnswer(option3));

generateEquation();

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("wrong");
let answer = 0;
let operation = 'add'; // default, can be set dynamically
let score = 0;

function generateEquation(){
    let num1, num2;
    let dummy1, dummy2;

    if(operation === 'add'){
        num1 = Math.floor(Math.random() * 13);
        num2 = Math.floor(Math.random() * 13);
        answer = num1 + num2;
    } else if(operation === 'subtract'){
        num1 = Math.floor(Math.random() * 13);
        num2 = Math.floor(Math.random() * num1);
        answer = num1 - num2;
    } else if(operation === 'multiply'){
        num1 = Math.floor(Math.random() * 13);
        num2 = Math.floor(Math.random() * 13);
        answer = num1 * num2;
    } else if(operation === 'divide'){
        num2 = Math.floor(Math.random() * 12) + 1;
        num1 = num2 * (Math.floor(Math.random() * 12) + 1);
        answer = num1 / num2;
    }

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    dummy1 = answer + Math.floor(Math.random() * 5) + 1;
    dummy2 = answer - Math.floor(Math.random() * 5) - 1;

    let allAnswers = [answer, dummy1, dummy2];
    let switchAnswers = [];

    for(i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i+1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
}

function addListeners(){
    option1.addEventListener("click", checkAnswer);
    option2.addEventListener("click", checkAnswer);
    option3.addEventListener("click", checkAnswer);
}

function checkAnswer(event){
    if(parseInt(event.target.innerHTML) === answer){
        score++;
        generateEquation();
    } else {
        audio.play();
    }
    document.getElementById("score").innerText = `स्कोर: ${score}`;
}

// Set operation dynamically
function setOperation(op){
    operation = op;
    score = 0;
    document.getElementById("score").innerText = `स्कोर: ${score}`;
    generateEquation();
}

addListeners();
generateEquation();

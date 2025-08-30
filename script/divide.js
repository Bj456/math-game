let scoreDiv = 0;
let currentDivQuestion = {};

function generateDivQuestion() {
    const num2 = Math.floor(Math.random() * 10) + 1;
    const num1 = num2 * (Math.floor(Math.random() * 10) + 1); // num1 divisible by num2
    currentDivQuestion = {
        question: `${num1} ÷ ${num2} = ?`,
        answer: num1 / num2
    };
    document.getElementById('question').innerText = currentDivQuestion.question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentDivQuestion.answer) {
        scoreDiv++;
        document.getElementById('feedback').innerText = 'सही उत्तर! ✅';
    } else {
        document.getElementById('feedback').innerText = `गलत उत्तर! ❌ सही उत्तर: ${currentDivQuestion.answer}`;
    }
    document.getElementById('score').innerText = `स्कोर: ${scoreDiv}`;
    generateDivQuestion();
}

window.onload = generateDivQuestion;

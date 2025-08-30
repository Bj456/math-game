let scoreAdd = 0;
let currentAddQuestion = {};

function generateAddQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    currentAddQuestion = {
        question: `${num1} + ${num2} = ?`,
        answer: num1 + num2
    };
    document.getElementById('question').innerText = currentAddQuestion.question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentAddQuestion.answer) {
        scoreAdd++;
        document.getElementById('feedback').innerText = 'सही उत्तर! ✅';
    } else {
        document.getElementById('feedback').innerText = `गलत उत्तर! ❌ सही उत्तर: ${currentAddQuestion.answer}`;
    }
    document.getElementById('score').innerText = `स्कोर: ${scoreAdd}`;
    generateAddQuestion();
}

window.onload = generateAddQuestion;

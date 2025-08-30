let scoreSub = 0;
let currentSubQuestion = {};

function generateSubQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * num1) + 1; // सुनिश्चित करें कि num1 >= num2
    currentSubQuestion = {
        question: `${num1} - ${num2} = ?`,
        answer: num1 - num2
    };
    document.getElementById('question').innerText = currentSubQuestion.question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentSubQuestion.answer) {
        scoreSub++;
        document.getElementById('feedback').innerText = 'सही उत्तर! ✅';
    } else {
        document.getElementById('feedback').innerText = `गलत उत्तर! ❌ सही उत्तर: ${currentSubQuestion.answer}`;
    }
    document.getElementById('score').innerText = `स्कोर: ${scoreSub}`;
    generateSubQuestion();
}

window.onload = generateSubQuestion;

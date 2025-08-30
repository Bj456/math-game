let scoreMul = 0;
let currentMulQuestion = {};

function generateMulQuestion() {
    const num1 = Math.floor(Math.random() * 12) + 1;
    const num2 = Math.floor(Math.random() * 12) + 1;
    currentMulQuestion = {
        question: `${num1} × ${num2} = ?`,
        answer: num1 * num2
    };
    document.getElementById('question').innerText = currentMulQuestion.question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentMulQuestion.answer) {
        scoreMul++;
        document.getElementById('feedback').innerText = 'सही उत्तर! ✅';
    } else {
        document.getElementById('feedback').innerText = `गलत उत्तर! ❌ सही उत्तर: ${currentMulQuestion.answer}`;
    }
    document.getElementById('score').innerText = `स्कोर: ${scoreMul}`;
    generateMulQuestion();
}

window.onload = generateMulQuestion;

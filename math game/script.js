// Variables
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const resultElement = document.getElementById('result');

// Random math question generator
let num1, num2, correctAnswer;

function generateQuestion() {
    const operators = ['+', '-', '×', '÷']; // Array operator
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    // Hitung hasil yang benar
    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '×':
            correctAnswer = num1 * num2;
            break;
        case '÷':
            correctAnswer = (num1 / num2).toFixed(2); // Biar hasilnya lebih rapi
            break;
    }

    questionElement.textContent = `What is ${num1} ${operator} ${num2}?`;
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === correctAnswer) {
        resultElement.textContent = '✅ Correct!';
        resultElement.style.color = 'lime';
    } else {
        resultElement.textContent = '❌ Wrong, try again!';
        resultElement.style.color = 'red';
    }
    setTimeout(generateQuestion, 1500);
}

// Initial load
generateQuestion();
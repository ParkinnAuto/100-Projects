const firstNum = document.querySelector('.firstNum');
const secondNum = document.querySelector('.secondNum');
const answer = document.querySelector('.answer');
const submit = document.querySelector('.submit');
const score = document.querySelector('.score');

let currentScore = 0;

const generateNumber = () => {
    const num1 = Math.floor(Math.random()*10)+1; // 1-10
    const num2 = Math.floor(Math.random()*10)+1; // 1-10
    firstNum.textContent = num1;
    secondNum.textContent = num2;
    return { num1, num2 };
}

// Initial number generating
let {num1,num2} = generateNumber();
let correctAnswer = num1*num2;

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    checkAnswer();
})

const checkAnswer = () => {
    const userAnswer = parseFloat(answer.value.trim());
    
    if (isNaN(userAnswer)) {
        alert("Please enter a valid number!");
        return;
    }

    if (userAnswer === correctAnswer) {
        currentScore++;
    } else {
        currentScore = Math.max(0, currentScore-1); 
    }

    score.textContent = currentScore;
    const newNumbers = generateNumber();
    correctAnswer = newNumbers.num1 * newNumbers.num2;
    answer.value = '';
    answer.focus();
};

generateNumber();
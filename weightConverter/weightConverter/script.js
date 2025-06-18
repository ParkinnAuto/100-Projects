const pounds = document.querySelector('.pounds');
const kg = document.querySelector('.kg');

const calculatingKG = () => {
    const userInput = parseFloat(pounds.value.trim());

    if (isNaN(userInput)) {
        kg.textContent = "0";
        return;
    }

    const kgOutput = (userInput * 0.453592).toFixed(2);
    kg.textContent = kgOutput;
};

pounds.addEventListener('input', calculatingKG);
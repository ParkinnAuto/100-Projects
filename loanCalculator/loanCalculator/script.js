const inputAmount = document.querySelector('.inputAmount');
const inputRate = document.querySelector('.inputRate');
const inputMonth = document.querySelector('.inputMonth');
const output = document.querySelector('.output');
const btn = document.querySelector('.btn');

const calculate = () => {
  const amount = parseFloat(inputAmount.value);
  const rate = parseFloat(inputRate.value);
  const months = parseInt(inputMonth.value);

  if (isNaN(amount) || isNaN(rate) || isNaN(months) || months <= 0) {
    output.textContent = "Invalid input";
    return;
  }

  const monthlyInterest = (rate / 100) / 12;
  const monthlyPayment = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months));
  
  output.textContent = `$${monthlyPayment.toFixed(2)}`;
};

btn.addEventListener('click', calculate);

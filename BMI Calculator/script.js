const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result'); 
const bmiOutput = document.getElementById('bmiOutput'); 

const calculateBMI = () => {
  const userHeight = parseFloat(height.value) / 100; 
  const userWeight = parseFloat(weight.value);

  if (!userHeight || !userWeight || userHeight <= 0 || userWeight <= 0) {
    alert("Please enter valid height and weight.");
    return;
  }

  const bmiValue = (userWeight / (userHeight * userHeight)).toFixed(2);

  bmiOutput.value = bmiValue;

  if (bmiValue < 18.5) {
    result.innerText = "Underweight";
  } 
  
  else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    result.innerText = "Normal weight";
  } 
  
  else if (bmiValue >= 25 && bmiValue <= 29.9) {
    result.innerText = "Overweight";
  } 
  
  else if (bmiValue >= 30) {
    result.innerText = "Obesity";
  }
};

btn.addEventListener('click', calculateBMI);

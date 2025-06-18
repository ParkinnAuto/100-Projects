const bill = document.getElementById('bill');
const percentage = document.getElementById('percentage');
const calculate = document.getElementById('calculate');
const resultNumber = document.getElementById('resultNumber');


calculate.addEventListener('click', (e) => {
    e.preventDefault();
    calculateTip();
});

const calculateTip = () => {
    const bill2 = bill.value.trim();
    const percentage2 = percentage.value.trim();

    if(!bill2 || !percentage2) {
        alert("Please enter bill and percentage");
        return;
    }
    
    const bill3 = parseFloat(bill2);
    const percentage3 = parseFloat(percentage2);
    const tipAmount = (bill3*percentage3)/100;
    const totalAmount = bill3+tipAmount;

    resultNumber.textContent = "$" + totalAmount.toFixed(2);
}
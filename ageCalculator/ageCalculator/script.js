const calculate = document.getElementById('calculate');
const ageDisplay = document.querySelector('.age');
const dateInput = document.querySelector('input[type="date"]');

calculate.addEventListener('click', (e) => {
    e.preventDefault();
    calculatingAge();
});

const calculatingAge = () => {
    const birthDate = new Date(dateInput.value);
    const currentDate = new Date();

    // Validate date was selected
    if (!dateInput.value) {
        alert("Please select a birth date");
        return;
    }

    // Validate birth date isn't in future (with parentheses)
    if (birthDate.getFullYear() > currentDate.getFullYear()) {
        alert("Please choose a year before " + currentDate.getFullYear());
        return;
    }

    // Calculate age (with parentheses and correct properties)
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    ageDisplay.textContent = age; 
};
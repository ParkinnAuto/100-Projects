const month = document.querySelector('.month');
const day = document.querySelector('.day');
const date = document.querySelector('.date');
const year = document.querySelector('.year');

const today = new Date();
const todayMonth = today.getMonth()+1;
const todayDay = today.toLocaleDateString('en-US', { weekday: 'long' });;
const todayDate = today.getDate();
const todayYear = today.getFullYear();

month.textContent = todayMonth;
day.textContent = todayDay;
date.textContent = todayDate;
year.textContent = todayYear;
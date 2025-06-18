const rating = document.querySelector('.rating');
const submit = document.querySelector('.submit');

const ratingsContainer = document.querySelector('.ratingsContainer');

let selectedRating = '';

rating.forEach((ratingEl => {
  ratingEl.addEvenListener('click',(e) => {
    removeActive();
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  });
}));

submit.addEventListener('click', () => {
  if (selectedRating !=="") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
})

const removeActive = () => {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
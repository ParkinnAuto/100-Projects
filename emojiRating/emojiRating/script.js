const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];

starsEl.forEach((starEl, index) => {
    starEl.addEventListener('click', () => {
        updateRating(index);
    });
});

const updateRating = (index) => {
    // Update stars
    starsEl.forEach((starEl, idx) => {
        starEl.classList.toggle('active', idx <= index);
    });
    
    // Update emojis
    emojisEl.forEach((emojiEl, idx) => {
        if (idx === index) {
            emojiEl.style.display = 'inline-block';
            emojiEl.style.color = colorsArray[index];
            emojiEl.classList.add('active');
        } else {
            emojiEl.style.display = 'none';
            emojiEl.classList.remove('active');
        }
    });
}

updateRating(0);
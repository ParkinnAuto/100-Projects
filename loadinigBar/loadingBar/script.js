const counter = document.querySelector('.counter');
const progressBar = document.querySelector('.progress-bar');

let percent = 0;

const loadingProgress = () => {
    percent++;

    counter.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;

    if(percent > 75) {
        progressBar.style.backgroundColor = '#4CAF50';
    }

    else if(percent > 50) {
        progressBar.style.backgroundColor = '#FFC107';
    }

    if (percent < 100) {
        setTimeout(loadingProgress, 30);
    }

    else {
        counter.textContent = "Complete!";
    }
}

loadingProgress();
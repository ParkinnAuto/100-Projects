const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const ampm = document.querySelector('.ampm');

displayTime();

function displayTime() {
    const now = new Date();
    let outputHour = now.getHours();
    const outputMinute = now.getMinutes().toString().padStart(2, '0');
    const outputSecond = now.getSeconds().toString().padStart(2, '0');

    let AMPM = 'AM';

    if(outputHour >= 12){
        AMPM = 'PM';
    }

    else {
        AMPM = 'AM';
    }

    hour.value  = outputHour;
    minute.value = outputMinute;
    second.value = outputSecond;
    ampm.textContent = AMPM;
    
    setTimeout(displayTime, 1000);
}

displayTime();

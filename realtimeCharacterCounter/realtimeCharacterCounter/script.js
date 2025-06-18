const characters = document.querySelector('.textArea');
const numberTotal = document.querySelector('.numberTotal');
const numberRemain = document.querySelector('.numberRemain');

let max = 50;
let currentLength = 0;

numberTotal.textContent = currentLength;
numberRemain.textContent = max

characters.addEventListener('input', ()=> {
    const input = characters.value.trim();
    const currentLength = input.length;
    numberTotal.textContent = currentLength;

    const remaining = max-currentLength;
    numberRemain.textContent = remaining;

    if(remaining <= 0){
        let trimmed = '';
        let count = 1;

        for (let char of input) {
            if (char !== ' ') {
                count++;
            }

            if (count > max) break;

            trimmed = trimmed+char;
        }

        characters.value = trimmed;
        alert("Maximum reached");
        return
    }
})
const celcius = document.querySelector('.celcius');
const farenheit = document.querySelector('.farenheit');
const kelvin = document.querySelector('.kelvin');

let outputCelcius;
let outputFarenheit;
let outputKelvin;

const calculatingNonCelcius = () => {
    const userCelcius = parseFloat(celcius.value.trim());

    if (isNaN(userCelcius)) {
        farenheit.value = '';
        kelvin.value = '';
        return;
    }

    outputFarenheit = (((userCelcius*9)/5) + 32).toFixed(2);
    outputKelvin = (userCelcius+273.15).toFixed(2);

    farenheit.value = outputFarenheit;
    kelvin.value = outputKelvin;
}

const calculatingNonFarenheit = () => {
    const userFarenheit = parseFloat(farenheit.value.trim());

    if (isNaN(userFarenheit)) {
        celcius.value = '';
        kelvin.value = '';
        return;
    }

    outputCelcius = ((((userFarenheit-32)*5)/9)).toFixed(2);
    outputKelvin = (((((userFarenheit-32)*5)/9)+273.15)).toFixed(2);

    celcius.value = outputCelcius;
    kelvin.value = outputKelvin;
}

const calculatingNonKelvin = () => {
    const userKelvin = parseFloat(kelvin.value.trim());

    if (isNaN(userKelvin)) {
        celcius.value = '';
        farenheit.value = '';
        return;
    }

    outputCelcius = (userKelvin-273.15).toFixed(2);
    outputFarenheit = ((userKelvin-273.15)*1.8).toFixed(2);

    celcius.value = outputCelcius;
    farenheit.value = outputFarenheit;
}

celcius.addEventListener('input', calculatingNonCelcius);

farenheit.addEventListener('input', calculatingNonFarenheit);

kelvin.addEventListener('input', calculatingNonKelvin);
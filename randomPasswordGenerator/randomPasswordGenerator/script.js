document.addEventListener('DOMContentLoaded', () => {
    const submit = document.querySelector('.submit');
    const input = document.querySelector('.input'); 

    const generatePassword = () => {
        const length = 14;
        const charset = {
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            numbers: '0123456789',
            symbols: '!@#$%^&*()_+~`|}{[]\\:;?><,./-='
        };

        const allChars = charset.lowercase + charset.uppercase + charset.numbers + charset.symbols;
        let password = '';

        for (let index = 0; index < length; index++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }

        input.style.paddingLeft = '5px';
        input.value = password;
        
    };

    submit.addEventListener('click', generatePassword);
});

generatePassword();
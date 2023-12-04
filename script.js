let allLetters = 'jinxedwzarsphluckvyfombgqtñ'

let randomiseCode = (event) => {
    let password = ['0', '6', '3', '8', '1', '7', '9', '6', '4', '7', '0', '3', '1', '5', '3', '7', '8', '2', '8', '2'];
    event.preventDefault();
    let input = document.getElementById('cipher-input').value.toLowerCase();
    let encoded = [];
    let usedIndexes = [];
    let usedRandomLetters = [];


    for (let i = 0; i < input.length; i++) {
        if (!allLetters.includes(input[i])) {
            encoded[i] = input[i];
            continue;
        }
        if (usedIndexes.includes(i)) {
            continue;
        }
        let randomLetter = getRandomLetter();
        while (usedRandomLetters.includes(randomLetter)) {
            randomLetter = getRandomLetter()
        }
        encoded[i] = randomLetter;
        usedRandomLetters.push(randomLetter);

        let allLettersIndex = allLetters.indexOf(input[i]);
        password[allLettersIndex] = randomLetter;

        for (let j = input.length; j > i; j--) {
            if (input[i] === input[j]) {
                encoded[j] = randomLetter;
                usedIndexes.push(j)
            }
        }
    }
    
    let hide1 = document.getElementsByClassName('hide')[0];
    hide1.style.display = 'block';
    let cipheredCode = document.getElementsByClassName('ciphered-code')[0];
    cipheredCode.innerHTML = encoded.join('');
    cipheredCode.style.display = 'block';

    let hide2 = document.getElementsByClassName('hide')[2];
    hide2.style.display = 'block';
    let cipheredPassword = document.getElementsByClassName('password')[0];
    cipheredPassword.innerHTML = password.join('');
    cipheredPassword.style.display = 'block';
    return encoded;
}

let decipherCode = (event) => {
    event.preventDefault();
    let cipheredCode = document.getElementById('ciphered-input').value.toLowerCase();
    let password = document.getElementById('password-input').value.toLowerCase();
    let resultCode = [];

    for (let i = 0; i < cipheredCode.length; i++) {
        let cipheredLetter = cipheredCode[i];
        let originalLetter = allLetters[password.indexOf(cipheredLetter)];
        resultCode.push(originalLetter !== undefined ? originalLetter : cipheredLetter);
    }

    let decipheredCode = document.getElementsByClassName('deciphered-code')[0];
    decipheredCode.innerHTML = resultCode.join('');
    decipheredCode.style.display = 'block';
    let decipheredCodeHeading = document.getElementsByClassName('hide')[0];
    decipheredCodeHeading.style.display = 'block';
}

let getRandomLetter = () => randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
let cipherForm = document.getElementById('cipher-form')
if (cipherForm) { 
    cipherForm.addEventListener('submit', randomiseCode);
}

let decipherForm = document.getElementById('decipher-form')
if (decipherForm) {
    decipherForm.addEventListener('submit', decipherCode);
}
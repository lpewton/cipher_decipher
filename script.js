let allLetters = 'jinxedwzarsphluckvyfombgqtñ'
let password = ['>', '-', ';', '<', '1', '}', '{', '8', '[', '?', ',', '/', '.', '3', '_', '|', ']', '2'];

function generateRandomString() {
    let result = '';
    const characters = '0123456789!@#$%^&*()-_=+[{]}|;:,<.>?/';

    for (let i = 0; i < 27; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

// Generate a random string of 27 characters without letters
const randomString = generateRandomString();
let randomiseCode = (event) => {
    event.preventDefault()
    let input = document.getElementById('cipher-input').value.toLowerCase();
    let encoded = []
    let usedIndexes = []
    let usedRandomLetters = []


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
        console.log(password)
    }
    let ciperedCode = document.getElementsByClassName('ciphered-code')[0];
    ciperedCode.innerHTML = encoded.join('');
    let cipheredPassword = document.getElementsByClassName('password')[0];
    cipheredPassword.innerHTML = password.join('');
    return encoded;
}

let getRandomLetter = () => randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
let cipherForm = document.getElementById('cipher-form')
cipherForm.addEventListener('submit', randomiseCode);

let allLetters = 'Jinxedwzarspluckvyfombgqtñ'

let randomiseCode = (event) => {
    event.preventDefault()
    let input = document.getElementById('cipher-input').value;
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
        console.log(usedRandomLetters);

        for (let j = input.length; j > i; j--) {
            if (input[i] === input[j]) {
                encoded[j] = randomLetter;
                usedIndexes.push(j)
            }
        }
    }
    let ciperedCode = document.getElementsByClassName('ciphered-code')[0];
    ciperedCode.innerHTML = encoded.join('');
    return encoded;
}

let getRandomLetter = () => randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
let cipherForm = document.getElementById('cipher-form')
cipherForm.addEventListener('submit', randomiseCode);
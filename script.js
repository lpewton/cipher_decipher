
let allLetters = 'Jinxedwzarspluckvyfombgqt'
console.log(allLetters.length)
let processInput = () => {
    let input = document.getElementById('cipher-input').value;
    if (input) {
        return input;
    } else {
        document.getElementById('cipher-input').value = 'PLEASE ADD TEXT HERE!';
    }
}

let randomiseCode = () => {
    let input = processInput();
    let encoded = []
    let usedIndexes = []

    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            encoded[i] = ' ';
            continue;
        }
        if (usedIndexes.includes(i)) {
            continue;
        }

        getRandomLetter()
        encoded[i] = (allLetters[randomLetter])

        for (let j = input.length; j > i; j--) {
            if (input[i] === input[j]) {
                encoded[j] = allLetters[randomLetter]
                usedIndexes.push(j)
            }
        }
    }
    let ciperedCode = document.getElementsByClassName('ciphered-code')[0];
    ciperedCode.innerHTML = encoded.join('');
    return encoded;
}

let getRandomLetter = () => randomLetter = Math.floor(Math.random() * 24);
console.log(allLetters)
let cipherButton = document.getElementById('cipher-btn')
cipherButton.addEventListener('click', randomiseCode);
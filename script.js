// Makes sure there is a value in Input
let processInput = () => {
    let input = document.getElementById('cipher-input').value;
    console.log('Hello')
    if (input) {
        return input;
    } else {
        document.getElementById('cipher-input').value = 'PLEASE ADD TEXT HERE!';
    }
}

let cipherButton = document.getElementById('cipher-btn')
cipherButton.addEventListener('click', processInput);
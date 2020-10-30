const letterCount = document.getElementById("letter-count");
const vowelCount = document.getElementById("vowel-count");
const consonantCount = document.getElementById("consonant-count");
const errorMessage = document.getElementById("check");
const submitBtn = document.getElementById("submit");

let numVowels;
let numConsonants;
let numErrors;

function activateCount() {
    numVowels = 0;
    numConsonants = 0;
    numErrors = 0;

    let userInput = document.getElementById("user-input").value;
    for (const letter of userInput) {
        switch (letter) {
            case "A":
            case "a":
            case "E":
            case "e":
            case "I":
            case "i":
            case "O":
            case "o":
            case "U":
            case "u":
                numVowels++;
                break;
            case "B":
            case "b":
            case "C":
            case "c":
            case "D":
            case "d":
            case "F":
            case "f":
            case "G":
            case "g":
            case "H":
            case "h":
            case "J":
            case "j":
            case "K":
            case "k":
            case "L":
            case "l":
            case "M":
            case "m":
            case "N":
            case "n":
            case "P":
            case "p":
            case "Q":
            case "q":
            case "R":
            case "r":
            case "S":
            case "s":
            case "T":
            case "t":
            case "V":
            case "v":
            case "W":
            case "w":
            case "X":
            case "x":
            case "Y":
            case "y":
            case "Z":
            case "z":
                numConsonants++;
                break;
            default:
                numErrors++;
                break;
        }
    }

    if (numErrors > 0) {
        errorMessage.textContent = "Error: Please enter a word that does not include any numbers or symbols.";
        letterCount.textContent = `Letter Count: -`;
        vowelCount.textContent = `Vowel Count: -`;
        consonantCount.textContent = `Consonant Count: -`;
    } else {
        errorMessage.textContent = "";
        letterCount.textContent = `Letter Count: ${userInput.length}`;
        vowelCount.textContent = `Vowel Count: ${numVowels}`;
        consonantCount.textContent = `Consonant Count: ${numConsonants}`;
    }
}

submitBtn.addEventListener("click", activateCount);

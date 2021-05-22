// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseCharac = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharac = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalCharac = "0123456789";
var specialCharac = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function generatePassword() {

    var password = "";
    var passwordCharac = "";
    // Create prompt to select password length
    var passwordLengthUser = prompt("How many characters would you like your password to be? Password MUST be between 8-128 characters.");
    passwordLengthUser = parseInt(passwordLengthUser);

    if (passwordLengthUser < 8) {
        alert("Sorry, invalid. Password must be at least eight characters.");
        return "";
    }
    
    if (passwordLengthUser > 128) {
        alert("Sorry, invalid. Password must not exceed 128 characters.");
        return "";
    }

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
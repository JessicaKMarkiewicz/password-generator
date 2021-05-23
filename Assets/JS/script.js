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
    var passwordLength = prompt("How many characters would you like your password to be? Password MUST be between 8-128 characters.");
    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Sorry, invalid. Password must be at least eight characters and not exceed 128 characters.");
        generatePassword();
        return "";
    }
    else
    {
        alert("You chose " + passwordLength + " which fits the criteria. Excellent!");
    }

    // Create confirm for lower
    var lowercaseCharacChoice = confirm("To add lowercase letters select 'OK' if not, hit 'CANCEL.'");

    passwordCharac += lowercaseCharac;
    alert("So far you want a password with:\n -" + passwordLength + " characters\n -Lowercase letters = " + lowercaseCharacChoice + ".")


    // uppercase
    var uppercaseCharacChoice = confirm("Add some uppercase letters!");

    //passswordCharac += uppercaseCharac;
    alert("So far you want a password with:\n -" + passwordLength + " characters\n -Lowercase letters = " + lowercaseCharacChoice + 
        "\n -Uppercase letters = " + uppercaseCharacChoice + ".")

    // numerical
    var numericalCharacChoice = confirm("Would you like to add some numbers?");
    alert("So far you want a password with:\n - " + passwordLength + " characters\n - Lowercase letters = " + lowercaseCharacChoice + 
        "\n - Uppercase letters = " + uppercaseCharacChoice + "\n - Numerical characters = " + numericalCharacChoice + ".")


    // special charac
    var specialCharacChoice = confirm("Would you like to add special characters?");
    alert("So far you want a password with:\n - " + passwordLength + " characters\n - Lowercase letters = " + lowercaseCharacChoice + 
        "\n - Uppercase letters = " + uppercaseCharacChoice + "\n - Numerical characters = " + numericalCharacChoice + 
        "\n - Special charachers = " + specialCharacChoice + ".")

    for (var i = 0; i < passwordLength; i++) {
        password = passwordCharac[Math.floor(Math.random() * passwordCharac.length)]
        
    }



// Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var pwTextArea = document.getElementById("password");
        passwordText.value = password;
    }

}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
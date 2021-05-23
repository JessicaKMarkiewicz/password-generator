// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseCharac = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharac = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalCharac = "0123456789";
var specialCharac = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() 
{
    var password = generatePassword();
    
    if (password != null)
    {
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
}

function generatePassword() {

    var password = "";
    var passwordCharac = "";
    // Create prompt to select password length
    var passwordLength = prompt("How many characters would you like your password to be? Password MUST be between 8-128 numerical characters.");
    if(passwordLength.length == 0) return;
    passwordLength = parseInt(passwordLength);

    if (passwordLength >= 8 && passwordLength <= 128) {
        alert("You chose " + passwordLength + " which fits the criteria. Excellent! " +
        "You will now be prompted to choose your desired password criteria. " + 
        "\n\nPlease note: you MUST select 'OK' (true) for at least one criteria.");
    }
    else
    {
        alert("Sorry, invalid. Please check the requirements and generate password again.");
        return;
    }

    // Create confirm for lower
    var lowercaseCharacChoice = confirm("To add lowercase letters select 'OK' (true) if not, select 'CANCEL' (false).");    
    alert("So far you want a password with:\n - " + passwordLength + 
        " characters\n - Lowercase letters = " + lowercaseCharacChoice + ".")
    if (lowercaseCharacChoice) passwordCharac += lowercaseCharac;

    // uppercase
    var uppercaseCharacChoice = confirm("To add uppercase letters select 'OK' (true) if not, select 'CANCEL' (false).");
    //passwordCharac += uppercaseCharac;
    alert("So far you want a password with:\n - " + passwordLength + 
        " characters\n - Lowercase letters = " + lowercaseCharacChoice + 
        "\n - Uppercase letters = " + uppercaseCharacChoice + ".")
    if (uppercaseCharacChoice) passwordCharac += uppercaseCharac;

    // numerical
    var numericalCharacChoice = confirm("To add numerical characters select 'OK' (true) if not, select 'CANCEL' (false).");
    alert("So far you want a password with:\n - " + passwordLength + " characters\n - Lowercase letters = " + lowercaseCharacChoice + 
        "\n - Uppercase letters = " + uppercaseCharacChoice + 
        "\n - Numerical characters = " + numericalCharacChoice + ".")
    if (numericalCharacChoice) passwordCharac += numericalCharac;

    // special charac
    var specialCharacChoice = confirm("To add special characters select 'OK' (true) if not, select 'CANCEL' (false).");
    alert("So far you want a password with:\n - " + passwordLength + " characters\n - Lowercase letters = " + lowercaseCharacChoice + 
        "\n - Uppercase letters = " + uppercaseCharacChoice + 
        "\n - Numerical characters = " + numericalCharacChoice + 
        "\n - Special characters = " + specialCharacChoice + ".")
    if (specialCharacChoice) passwordCharac += specialCharac;

    if (lowercaseCharacChoice == false && uppercaseCharacChoice == false && numericalCharacChoice == false && specialCharacChoice == false)
    {
        alert("Sorry, you MUST have at least one of the character criteria as 'true' in order to generate your secure password. Please generate password again.")
        return;
    }

    //We want to take the length and character responses and output result with values in consideration
    for (var i = 0; i < passwordLength; i++) {
        password += passwordCharac[Math.floor(Math.random() * passwordCharac.length)];
    }
    
    return password;
}

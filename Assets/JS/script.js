// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Create variables for password criteria
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
    // JS prompt returns empty string if user cancels; added to mitigate any confusion for user
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
    // If user does not input response and just selects 'OK,' get out of function
    if (passwordLength.length == 0) return;
    passwordLength = parseInt(passwordLength);

    // Create alert to confirm user length selection fit criteria
    if (passwordLength >= 8 && passwordLength <= 128) {
        alert("You chose " + passwordLength + " which fits the criteria. Excellent! " +
        "You will now be prompted to choose your desired password criteria. " + 
        "\n\nPlease note: you MUST select 'OK' (true) for at least one criteria.");
    }
    // Create alert to notify user length selection did not fit criteria and return function
    else
    {
        alert("Sorry, invalid. Please check the requirements and generate password again.");
        return;
    }

    // Create alert selection for adding lowercase characters
    var lowercaseCharacChoice = confirm("To add lowercase letters select 'OK' (true) if not, select 'CANCEL' (false).");    
    // Notifies user what they have selected so far for their password criteria
    alert("So far you want a password with:\n - " + passwordLength + 
        " characters\n - Lowercase letters = " + lowercaseCharacChoice + ".")
    // If user selected 'OK' (true) then add lowercase character string to password string
    if (lowercaseCharacChoice) passwordCharac += lowercaseCharac;

    // Create alert selection for adding uppercase characters
    var uppercaseCharacChoice = confirm("To add uppercase letters select 'OK' (true) if not, select 'CANCEL' (false).");
    // Notifies user what they have selected so far for their password criteria
    alert("So far you want a password with:\n - " + passwordLength + 
        " characters\n - Lowercase letters = " + lowercaseCharacChoice + 
        "\n - Uppercase letters = " + uppercaseCharacChoice + ".")
    // If user selected 'OK' (true) then add uppercase character string to password string
    if (uppercaseCharacChoice) passwordCharac += uppercaseCharac;

    // Create alert selection for numerical characters
    var numericalCharacChoice = confirm("To add numerical characters select 'OK' (true) if not, select 'CANCEL' (false).");
    // Notifies user what they have selected so far for their password criteria
    alert("So far you want a password with:\n - " + passwordLength + " characters\n - Lowercase letters = " + lowercaseCharacChoice + 
        "\n - Uppercase letters = " + uppercaseCharacChoice + 
        "\n - Numerical characters = " + numericalCharacChoice + ".")
    // If user selected 'OK' (true) then add numerical character string to password string
    if (numericalCharacChoice) passwordCharac += numericalCharac;

    // Create alert selection for special characters
    var specialCharacChoice = confirm("To add special characters select 'OK' (true) if not, select 'CANCEL' (false).");
    // Notifies user what they have selected so far for their password criteria
    alert("So far you want a password with:\n - " + passwordLength + " characters\n - Lowercase letters = " + lowercaseCharacChoice + 
        "\n - Uppercase letters = " + uppercaseCharacChoice + 
        "\n - Numerical characters = " + numericalCharacChoice + 
        "\n - Special characters = " + specialCharacChoice + ".")
    // If user selected 'OK' (true) then add special character string to password string
    if (specialCharacChoice) passwordCharac += specialCharac;

    // Create alert if no criteria are selected 
    if (lowercaseCharacChoice == false && uppercaseCharacChoice == false && numericalCharacChoice == false && specialCharacChoice == false)
    {
        alert("Sorry, you MUST have at least one of the character criteria as 'true' in order to generate your secure password. Please generate password again.")
        return;
    }

    // Once user successfully answers all prompts, generate password including user selected criteria.
    // As long as 'i' is less than user selected password length then run this code
    for (var i = 0; i < passwordLength; i++) {
        // Select random character from passwordCharac variable and add to password variable
        password += passwordCharac[Math.floor(Math.random() * passwordCharac.length)];
    }
    
    return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ['!@#$%^&*()_+~`|}{[]\:;?><,./-='];

var confirmLength = "";
var confirmLowerCase
var confirmUpperCase
var confirmNumeric
var confirmSpecialCharacters



function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  if(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters. Try again!");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 
      console.log(confirmLength)
  
    if(confirmLength = lowerCase|| upperCase) {
      alert("Please select a number.");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 
      console.log(confirmLength)

    var confirmLowerCase = confirm("Would you like to use Lower Case letters?");
      console.log(confirmLowerCase)
    var confirmUpperCase = confirm("Would you like to use Upper Case letters?");
      console.log(confirmUpperCase)
    var confirmNumeric = confirm("Would you like to use Numbers?");
      console.log(confirmNumeric)
    var confirmSpecialCharacters = confirm("Would you like to use Special Characters?");
      console.log(confirmSpecialCharacters)
    
    }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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






// generate a password from user input
function generatePassword() {
  // turn input string into numbers
  var confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));
  // make sure passwrod is between 8 and 129 and is NOT a letter or symbol
    while(confirmLength <= 7 || confirmLength >= 129 || (isNaN(confirmLength))) {
      alert("Password length must be a number between 8-128 characters. Try again!");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 
      

// Ask what type of characters they would like to use
  var choices=[]
    var confirmLowerCase = confirm("Would you like to use Lower Case letters?");
      if (confirmLowerCase) {
        choices = choices.concat(lowerCase) // choices += lowerCase
      }
    var confirmUpperCase = confirm("Would you like to use Upper Case letters?");
      if (confirmUpperCase) {
        choices = choices.concat(upperCase)
      }
    var confirmNumeric = confirm("Would you like to use Numbers?");
      if (confirmNumeric) {
        choices = choices.concat(numeric)
      }
    var confirmSpecialCharacters = confirm("Would you like to use Special Characters?");
      if (confirmSpecialCharacters) {
        choices = choices.concat(specialCharacters)
      }

// make sure they use at least one of the requirements

       while(confirmLowerCase === false && confirmUpperCase === false && confirmNumeric === false && confirmSpecialCharacters === false) {
        alert ("You must select at least one type of character");
        var confirmLowerCase = confirm("Would you like to use Lower Case letters?");
        if (confirmLowerCase) {
          choices = choices.concat(lowerCase)
        }
        var confirmUpperCase = confirm("Would you like to use Upper Case letters?");
        if (confirmUpperCase) {
          choices = choices.concat(upperCase)
        }
        var confirmNumeric = confirm("Would you like to use Numbers?");
        if (confirmNumeric) {
          choices = choices.concat(numeric)
        }
        var confirmSpecialCharacters = confirm("Would you like to use Special Characters?");
        if (confirmSpecialCharacters) {
          choices = choices.concat(specialCharacters)
        }
      }

  
      // creat for loop to take in input and make password
      
      var createdPassword = []
      for (var i=0; i<confirmLength;i++) {
        var index = Math.floor(Math.random() * choices.length )

        createdPassword.push(choices[index])
      }
  
// this took out too many commas
      return createdPassword.join("")
    
  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

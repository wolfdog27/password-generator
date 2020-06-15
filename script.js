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
  var confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));
  
    while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters. Try again!");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 
      console.log(confirmLength)
        

// I can't figure out how to use only numbers and no letters... nothing is working rightn now

    var confirmLowerCase = confirm("Would you like to use Lower Case letters?");
      console.log(confirmLowerCase)
    var confirmUpperCase = confirm("Would you like to use Upper Case letters?");
      console.log(confirmUpperCase)
    var confirmNumeric = confirm("Would you like to use Numbers?");
      console.log(confirmNumeric)
    var confirmSpecialCharacters = confirm("Would you like to use Special Characters?");
      console.log(confirmSpecialCharacters)

       while(confirmLowerCase === false && confirmUpperCase === false && confirmNumeric === false && confirmSpecialCharacters === false) {
        alert("You must choose at least one parameter");
        alert ("You must select at least one type of character");
        var confirmLowerCase = confirm("Would you like to use Lower Case letters?");
        console.log(confirmLowerCase)
        var confirmUpperCase = confirm("Would you like to use Upper Case letters?");
        console.log(confirmUpperCase)
        var confirmNumeric = confirm("Would you like to use Numbers?");
        console.log(confirmNumeric)
        var confirmSpecialCharacters = confirm("Would you like to use Special Characters?");
        console.log(confirmSpecialCharacters)
      }
    
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // var password = []
  // if (confirmLowerCase) {
  //   password = 
  // }

  // // / if(uppercase){
  //   for(var i=0;i<upperCase.length;i++){
  //    (console.log(upperCase[i])
  //   }
    
    


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

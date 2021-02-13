//Global variable
var generateBtn = document.querySelector("#generate");

//Initial function, cycles through all the code to push the password to the end user.
function writePassword() {
  var password = generatePassword();
  var passwordFinal = document.querySelector("#password");
  passwordFinal.value = password;
}

// Generates a password for the #password input
function generatePassword() {

  //Contents of the password
  var number = confirm("Do you want numbers in your password?");
  var uppercase = confirm("Do you want uppercase letters in your password?");
  var lowercase = confirm("Do you want lowercase letters in your password?");
  var specialChar = confirm("Do you want special characters in your password?");

  if (number == false && uppercase == false && lowercase == false && specialChar == false) {
    alert("You have selected nothing, so a password will not be made.");
      location.reload();
  } else
  
  var random = new Random();
  var passLength = random.lengthCheck();

  passText = "";

  if(number == true) {
    var numberPassword = random.generateNumber();
    passText+=numberPassword;
  }
  if(uppercase == true) {
    var uppercasePassword = random.generateUppercase();
    passText+=uppercasePassword;
  }
  if(lowercase == true) {
    var lowercasePassword = random.generateLowercase();
    passText+=lowercasePassword;
  }
  if(specialChar == true) {
    var specialCharPassword = random.generateSpecialChar();
    passText+=specialCharPassword;
  }
  
  semiFinalText = "";
  finalText = "";

  for (var i = 0; i < passText.length; i++) {
    semiFinalText += passText.charAt(Math.floor(Math.random() * passText.length));
  }

  console.log(passLength);
  console.log(semiFinalText);

  var finalText = semiFinalText.slice(passText.length - passLength);

  console.log(passText);
  console.log(finalText);

  return finalText;
}

// 4 generateX functions for randomization of the password; Contained within a void function for better organization/passLength distribution.
function Random() {
  //Length of the password, made "idiot-proof"
  var passLength = prompt("Type your password length here in whole numerals only.\n Min Character Length = 8 Max Character Length = 128.");
  
  //To see the inner workings of this function, add console logs for the various variables :)
  var work = new RegExp("[0-9]", "g");
  var hard = new RegExp("[A-z]", "g");
  var playHard = new RegExp("[\␠\!\"\$\%\&\'\(\)\*\+\,\-\.\/\[\\\]\^\_\`\:\;\<\=\>\?\@\{\|\}\~\␡]", "g")

  var quarterfinal = null;
  var semifinal = null;  
  var final = null; 

  quarterfinal = passLength.match(work);
  semifinal = passLength.match(hard);
  final = passLength.match(playHard);

      //no numbers = alert || letters & symbols = alert              // numbers & no symbols = alert               // no numbers & letters
  if (quarterfinal == null || semifinal !== null && final !== null || semifinal !== null && final == null || quarterfinal == null && semifinal !== null || passLength<8 || passLength>128){
    alert("You did not follow instructions. Try again.");
      location.reload();
  }
  
  this.generateNumber = function generateNumber() {
    var Numbers = "0123456789"
    var numberPassword = "";
    for (var i = 0; i < passLength; i++) {
      numberPassword += Numbers.charAt(Math.floor(Math.random() * Numbers.length));
    }
    return numberPassword;
  }

  this.generateUppercase = function generateUppercase() {
    var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var uppercasePassword = "";
    for (var i = 0; i < passLength; i++) {
      uppercasePassword+= Uppercase.charAt(Math.floor(Math.random() * Uppercase.length));
    }
    return uppercasePassword;
  }

  this.generateLowercase = function generateLowercase() {
    var Lowercase = "abcdefghijklmnopqrstuvwxyz";
    var lowercasePassword = "";
    for (var i = 0; i < passLength; i++){
      lowercasePassword+= Lowercase.charAt(Math.floor(Math.random() * Lowercase.length));
    }
    return lowercasePassword;
  }

  this.generateSpecialChar = function generateSpecialChar() {
    var SpecialChar = "\!\"\$\%\&\'\(\)\*\+\,\-\.\/\[\\\]\^\_\`\:\;\<\=\>\?\@\{\|\}\~";
    var specialCharPassword = ""
    for (var i = 0; i < passLength; i++) {
      specialCharPassword+= SpecialChar.charAt(Math.floor(Math.random() * SpecialChar.length));
    }
    return specialCharPassword;
  }
  this.lengthCheck = function lengthCheck() {
    return passLength;
  }  
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
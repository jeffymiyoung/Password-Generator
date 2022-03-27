// defined Special Characters | Alphabet | Numbers | Uppercase conversion
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = [];

// Uppercase conversion function
var toUpper = function (x){
  return x.toUpperCase();
};

// converts alpabet into uppercase alphabet
var alphabet2 = alphabet.map(toUpper);

// additional variables
var enter;
var confirmNumber;
var confirmSpecialChar;
var confirmLowerCase;
var confirmUpperCase;
var choices;

// function for Window Confirm Password Criteria
function confirmCharacters () {
  confirmLowerCase = confirm("Will this contain Lowercase Letters?");
  confirmUpperCase = confirm("Will this contain Uppercase Letters?");
  confirmNumber = confirm("Will this contain Numbers?");
  confirmSpecialChar = confirm("Will this contain Special Characters?");
};

// Generate Password function
function generatePassword () {
  // upon "click" ask char limit and parse into array
  enter = parseInt(prompt('How many characters would you like your password to be? Min. 8 - Max. 128'));

  // User Validation if statement - makes sure user inputs integar between 8-128
  if (!enter) {
    alert("This needs a value");

  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));

  // after user inputs valid integar move onto next confirmation prompt for all other password criteria
  } else {
    confirmCharacters ();
  };

  // No Choices validation - circles back to Window Confirmation for Criteria
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSpecialChar) {
    choices = alert("You must choose a criteria!");
  }

  // all 4 criteria chosen
  else if (confirmLowerCase && confirmUpperCase && confirmNumber && confirmSpecialChar) {
    choices = alphabet.concat(alphabet2, number, specialChar);
  }

  // 3 out of 4 criteria chosen
  else if (confirmLowerCase && confirmUpperCase && confirmNumber) {
    choices = alphabet.concat(alphabet2, number);
  }
  else if (confirmLowerCase && confirmUpperCase && confirmSpecialChar) {
    choices = alphabet.concat(alpbahet2, specialChar);
  }
  else if (confirmLowerCase && confirmNumber && confirmSpecialChar) {
    choices = alphabet.concat(number, specialChar);
  }
  else if (confirmUpperCase && confirmNumber && confirmSpecialChar) {
    choices = alphabet2.concat(number, specialChar);
  }

  // 2 out of 4 criteria choices
  else if (confirmLowerCase && confirmUpperCase) {
    choices = alphabet.concat(alphabet2);
  } 
  else if (confirmLowerCase && confirmNumber) {
    choices = alphabet.concat(number);
  } 
  else if (confirmLowerCase && confirmSpecialChar) {
    choices = alphabet.concat(specialChar);
  } 
  else if (confirmUpperCase && confirmNumber) {
    choices = alphabet2.concat(number);
  } 
  else if (confirmUpperCase && confirmSpecialChar) {
    choices = alphabet2.concat(specialChar);
  } 
  else if (confirmNumber && confirmSpecialChar) {
    choices = number.concat(specialChar);
  }

  // 1 out of 4 criteria choices  
  else if (confirmLowerCase) {
    choices = alphabet;
  }
  else if (confirmUpperCase) {
    choices = alphabet2;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmSpecialChar) {
    choices = specialChar;
  };

  // created array for generated password with .push elements from random choice function
  var generated = [];
  for (i = 0; i < enter; i++) {
    var pickedChoices = choices[Math.floor(Math.random() * choices.length)];
    generated.push(pickedChoices);
  };

  // joined the Generated PW String and returns value to web application to be copied
  var pw = generated.join("");
  return pw;
};


// Add Generate Password function and eventListener to start writePassword function
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

// Add Copy Button function and eventListener 
var copy = document.querySelector("#copy");

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}

copy.addEventListener("click", copyPassword);
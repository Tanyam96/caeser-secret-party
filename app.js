const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//Implementing the Encryption
function encrypt(message, shiftValue) {
  //Create a function that takes message and a shift value as parameters.
  let encryptedMessage = ''; //Create an empty string to store the encrypted message.

  for (
    let i = 0;
    i < message.length;
    i++ //Use a loop to iterate each letter in message.
  ) {
    let letter = message[i]; //Get the current letter in message.

    if (letter.match(/[a-zA-z]/)) {
      //Check if the letter is in alphabet.
      if (letter === letter.toLowerCase()) {
        //Check if the letter is in lowercase.
        currentIndex = alphabet.indexOf(letter); //Get the current index of the letter in alphabet.
        newIndex = alphabet[(currentIndex + shiftValue) % alphabet.length]; //Encrypt the lowercase letter.
      } else {
        currentIndex = alphabet.indexOf(letter.toLowerCase()); //Change the uppercase letter to lowercase letter and get the current index.
        newIndex = alphabet[(currentIndex + shiftValue) % alphabet.length]; //Encrypt the lowercase letter.
        newIndex = newIndex.toUpperCase(); //Change the lowercase letter to uppercase letter.
      }

      encryptedMessage += newIndex; //Store the encrypted letter to the encryptedMessage.

      //After every two letters, insert a random letter from alphabet.
      if ((i + 1) % 2 === 0) {
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        encryptedMessage += randomLetter;
      }
    } else {
      encryptedMessage += letter; //Add a character that isn't in the alphabet to the encryptedMessage.
    }
  }
  return encryptedMessage; //return the encrypted message.
}

//Implementing the Decryption
function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = ''; //Create an empty string to store the decrypted message.
  let counter = 0; //Counter to keep track of every two letters.

  for (
    let i = 0;
    i < encryptedMessage.length;
    i++ //Use a loop to iterate each letter in encryptedMessage.
  ) {
    let letter = encryptedMessage[i]; //Get the current letter in encryptedMessage.

    if (letter.match(/[a-zA-z]/)) {
      //Check if the letter is in alphabet.
      if (letter === letter.toLowerCase()) {
        //Check if the letter is in lowercase.
        currentIndex = alphabet.indexOf(letter); //Get the current index of the letter in alphabet.
        newIndex =
          alphabet[
            (shiftValue - currentIndex + alphabet.length) % alphabet.length
          ]; //Decrypt the lowercase letter.
      } else {
        currentIndex = alphabet.indexOf(letter.toLowerCase()); //Change the uppercase letter to lowercase letter and get the current index.
        newIndex =
          alphabet[
            (shiftValue - currentIndex + alphabet.length) % alphabet.length
          ]; //Encrypt the lowercase letter.
        newIndex = newIndex.toUpperCase(); //Change the lowercase letter to uppercase letter.
      }

      decryptedMessage += newIndex; //Store the decrypted letter to the decryptedMessage.
      counter++; //Increment the counter.

      //Skip the random letters after every two letters.
      if (counter === 2) {
        i++;
        counter = 0;
      }
    } else {
      decryptedMessage += letter; //Add a character that isn't in the alphabet to the decryptedMessage.
      counter++; //Increment the counter.

      //Skip the random letters after every two letters.
      if (counter === 2) {
        i++;
        counter = 0;
      }
    }
  }
}

// RENISH: NEW CODE BLOCK STARTS HERE
function encryptMessage(message, shiftValue) {
  let result = '';

  //RENISH: Using a simple FOR-OF loop instead of normal FOR loop
  for (let char of message) {
    let letter = char; //RENISH: Saving the char to temporary variable (I think this is optional, I just wanted to preserve the char from modifying)
    let isUpperCase = false; //RENISH: Like I said in our yesterday's meeting, lets create a boolean variable to track if char is Uppercase

    // RENISH: If the char is an Alphabet or not (like how you did already)
    if (letter.match(/[a-zA-Z]/)) {
      if (letter === letter.toUpperCase()) isUpperCase = true; // If Uppercase we change isUpperCase to TRUE
      letter = encryptChar(letter, shiftValue); // RENISH: Instead of placing encryption code here, I've separated into a function "encryptChar", down below

      //RENISH: Once we get the encrypted char back, we just need to check if its UpperCase, then covert it accordingly.
      if (isUpperCase) letter = letter.toUpperCase();
    }
    result += letter;
  }

  // Finally return the result;
  return result;
}

function decryptMessage(message, shiftValue) {
  let result = '';

  for (let char of message) {
    let letter = char;
    let isUpperCase = false;

    if (letter.match(/[a-zA-Z]/)) {
      if (letter === letter.toUpperCase()) isUpperCase = true;
      letter = decryptChar(letter, shiftValue); // RENISH: Only change here is call the decryptChar method
      if (isUpperCase) letter = letter.toUpperCase();
    }
    result += letter;
  }
  return result;
}

function encryptChar(char, shift) {
  const index = alphabet.indexOf(char.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

function decryptChar(char, shift) {
  const index = alphabet.indexOf(char.toLowerCase());
  let newIndex = (index - shift + alphabet.length) % alphabet.length;
  // RENISH: THIS IS ACTUAL SOLUTION
  // IF THE index is negative, we just need to add it again with the alphabet, so that modulo gives us positive number.
  if (newIndex < 0) {
    newIndex += alphabet.length;
  }
  return alphabet[newIndex];
}
// RENISH: NEW CODE BLOCK ENDS HERE

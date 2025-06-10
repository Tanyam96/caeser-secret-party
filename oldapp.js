const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
{
  // Your encryption code here
  let encryptedMessage = '';
  for(c of message) {
    const oldIndex = alphabet.indexOf(c);
    if (oldIndex >= 0) {
      const newIndex = oldIndex + shiftValue;
      encryptedMessage += alphabet[newIndex];
    } 
    else {
      encryptedMessage += c;
    }
  }
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  return decryptedMessage;
}


function transformString(inputString){
  let length = inputString.length;
  //To check is string is divisible by 15
  if (length % 15 === 0) {
    // If the length is divisible by 15
    let reversedString = inputString.split('').reverse().join('');
    let asciiString = '';
    for (let i = 0; i < reversedString.length; i++) {
      asciiString += reversedString.charCodeAt(i) + ' ';
    }
    return asciiString.trim();
  }
  //To check is string is divisible by 3
  else if (length % 3 === 0) {
    // If the length is divisible by 3
    return inputString.split('').reverse().join('');
  }
  else if (length % 5 === 0) {
    // If the length is divisible by 5
    let asciiString = '';
    for (let i = 0; i < inputString.length; i++) {
      asciiString += inputString.charCodeAt(i) + ' ';
    }
    return asciiString.trim();
  }
  
}

console.log(transformString("Pizza"));
console.log(transformString("Hamburger"));
console.log(transformString("Chocolate Chip Cookie"));
console.log(transformString("Munyaneza"));
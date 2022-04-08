var translated = "";
//Get input fields by id
const sentence = document.getElementById('sentence');
const translation = document.getElementById('translation');
//Use event listener to populate translation box as user is typing
sentence.addEventListener('keyup', (e) => {
    var translated = "";
    const input = e.target.value;
  //Split user input and get number of words
    var words = input.split(' ');
    var wordLen = words.length;
  //Loop through array for number of words
    for (let i = 0; i < wordLen; i++) {
      let selectedWord = words[i];
    //Create list of vowels and check if there are any in each word
      let vowels = ['a','e','i','o','u','A','E','I','O','U'];
      //If the word includes a vowel at the beginning, add "ay" to the end
      if (vowels.includes(selectedWord.charAt(0))) {
        translated += selectedWord + "ay ";
        console.log(translated);
      //Else if the word begins with a consonant, move the consonant and add ay to the end
      } else {
        translated += selectedWord.substring(1) + selectedWord.substring(0,1).toLowerCase() + "ay ";
      }
    }
//Set final output equal to value of translation box
translation.value = translated;
});


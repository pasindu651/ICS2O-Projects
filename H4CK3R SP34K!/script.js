var translated = "";

function translate(userSentence) {
  var words = userSentence.split(' ');
  var numWords = (userSentence.split(' ')).length;
  for (var i = 0; i < numWords; i++) {
    var selectWord = words[i];
    translated += selectWord.replace(/a|A/g, '4').replace(/e|E/g, '3').replace(/i|I/g, '1').replace(/o|O/g, '0') + " ";
}
  return translated;
}   

translate("Hacker Speak!");
console.log(translated);

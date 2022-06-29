//Import word list from wordList.js and hangman graphics from manDrawing.js.
import {wordList} from "./wordlist.js";
import manDrawing from "./manDrawing.js";
//Make list of game states that will change depnding on where the user is in game.
const GAMESTATE = ['MENU', 'START', 'OVER']

//Set remaining guesses to 7, create array for letters that user has chosen, create new manDrawing object, and declare randomWord, remainingGuesses, lettersPicked, and gameState (variables that will be updated) outside of class to ensure that they will be accessible to all methods in class.
var remainingGuesses = 7;
var lettersPicked = [];
var hangMan = new manDrawing(remainingGuesses);
var randomWord;
var remainingGuesses;
var lettersPicked;
var gameState;
var score;

//Create game class.
class Game {
  constructor() {
    this.gameState = gameState;
  }
  //Create newWord method that will be responsible for generating randomWord each time game starts.
  newWord() { 
    //Call "show()" method to make hangman drawing, letters picked, hidden words, and button controls visible.
    this.show('drawingContainer', 'lettersPicked', 'wordsHidden', 'buttonControls');
    //Set "lettersPicked" innerHTML to nothing at start of game
    document.getElementById('lettersPicked').innerHTML = "Letters Picked: ";
    randomWord = randomWord;
    //Generate randomNumber between length of wordlist and 1.
    this.randomNum = Math.floor(wordList.length * Math.random() + 1);
    //Set randomWord equal to a word in word list located at index of random number.
    randomWord = wordList[this.randomNum].toUpperCase();
    console.log(randomWord);
    remainingGuesses = remainingGuesses;
    lettersPicked = lettersPicked;
    //If remainingGuesses equal 7, as it is at start, draw first hangman image.
    if(remainingGuesses == 7) {
      hangMan.img1();
      hangMan.appendImage();
    } 
  }
  //Create "createButtons()" method that will be responsible for creating button controls.
  createButtons() { 
    //Set BtnClicked equal to true at start of every "createButtons()" call.
    this.BtnClicked = true;
    //Loop through 1-26 and create button each time with corresponding character code.
    for (let x=1; x<=26; x++) {
      var btn = document.createElement("BUTTON");
      btn.BtnClicked = this.BtnClicked;
      var br = document.createElement("br");
      var letter = String.fromCharCode(x+64);
      var t = document.createTextNode(letter);
      btn.appendChild(t);
      btn.id = letter;
      btn.letterArr = this.letterArr;
      buttonControls.appendChild(btn)
      //If number is divisible by 13, create line break.
      if(x % 13 == 0) {
        buttonControls.appendChild(br);
      } 
      document.body.appendChild(buttonControls);
      //Add two event listeners to button. First will call "checkLetter()" function each time button is clicked. Second will set BtnClicked to true.
      btn.addEventListener('click', this.checkLetter);
      btn.addEventListener('click', () => {
        this.BtnClicked = true;
      })
    }
    //Add event listener to keyboard. Each time key is clicked, set that key equal to keyboardKey, set BtnClicked to false, and call "checkLetter()".
    //Restrict input from enter key and spacebar.
    document.addEventListener('keydown', (e) => {
      if(e.keyCode == 13 || e.keyCode == 32) {
        e.preventDefault();
      }
      this.keyboardKey = e.key.toUpperCase();
      this.BtnClicked = false;
      this.checkLetter();
    });
  }
  //Create method which will be responible for displaying homeScreen/menu.
  homeScreen() {
    //Hide remainingGuesses text.
    document.getElementById('remainingGuesses').classList.add('hide');
    //Hide modal (end screen that will display "Game Over" or "You Won!").
    this.hide('modal_container');
    //Set gameState equal to menu.
    gameState = GAMESTATE[0];
    //Hide button controls.
    this.hide('buttonControls');
  }
  //Create method responsible for listening to home screen buttons and performing suitable actions.
  homeScreenListeners() {
    //Create variables for buttons in home screen and text in modal.
    this.startButton = document.getElementById('startBtn'); 
    this.howToButton = document.getElementById('howTo');
    this.aboutButton = document.getElementById('about');
    this.modalParagraph = document.getElementById('modal_paragraph');
    this.closeButton = document.getElementById('play');
    this.modalHeader = document.getElementById('modal_header');

    //Create event listener for startButton. 
    this.startButton.addEventListener('click', () => {
      //Everytime button is clicked, set gameState to start.
      gameState = GAMESTATE[1];
      //Create new word.
      game.newWord();
      //Create dashes for word.
      game.wordUnderline();
      //Hide "startBtn", "howTo", and "about" buttons.
      game.hide('startBtn', 'howTo', 'about');
    });  

    //Add event listener to howToButton.
    this.howToButton.addEventListener('click', () => {
      //Display end screen (modal).
      this.endScreen();
      //Set innerText of modalParagraph to instructions.
      this.modalParagraph.innerText = "The game will generate a random word that will be hidden. Try to guess what it is, one letter at a time, either using the on screen buttons or your keyboard. You may only guess one of the same letter. Each time your guess is incorrect, a part of the hangman’s gallows will be drawn on the screen. If your suggested letter occurs in the hidden word, the blanks will be filled with that letter. Your score will be awarded for correct guesses depending on how many tries you take.";
      //Make modal button say "Close".
      this.closeButton.innerHTML = "Close";
      //Make modalHeader say "INSTRUCTIONS".
      this.modalHeader.innerHTML = "INSTRUCTIONS";
    })
    //Add event listener to aboutButton.
    this.aboutButton.addEventListener('click', () => {
      //Each time button is clicked, open modal.
      this.endScreen();
      //Set modalParagraph equal to information about history of hangman.
      this.modalParagraph.innerText = "Hangman is a guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses. Originally a Paper-and-pencil game, there are now electronic versions.";
      //Make modal button say "Close".
      this.closeButton.innerHTML = "Close";
      //Make modalHeader say "ABOUT".
      this.modalHeader.innerHTML = "ABOUT";
    })
  }
  //Create method called "hide" and "show" which will loop through number of arguments given, and hide/show them by adding/removing "hide" class with opacity: 0. 
  hide(id1, id2, id3, id4, id5, id6, id7) {
    for(let i = 0; i < arguments.length; i++) {
      document.getElementById(String(arguments[i])).classList.add('hide');
    }
  }
  show(id1, id2, id3, id4, id5, id6, id7) {
    for(let i = 0; i < arguments.length; i++) {
      document.getElementById(String(arguments[i])).classList.remove('hide');
    }
  }

  //Create method called "resetGame()".
  resetGame(hangMan) {
    //Reet remainingGuesses to 7, empty lettersPicked array, show first hangMan image, and set lettersPicked to blank.
    remainingGuesses = 7;
    lettersPicked = [];
    hangMan.img1();
    document.getElementById('lettersPicked').innerHTML = "";
  }
  //Create method called "endScreen()" which will display modal.
  endScreen() {
    //Set gameState to over.
    gameState = GAMESTATE[2];
    //Hide hangman drawing.
    this.hide('drawingContainer');
    this.modalPlay = document.getElementById('play');
    //Make modal paragraph innerHTML display randomWord at end of game.
    document.getElementById('modal_paragraph').innerHTML = "The word was " + "<u>" + randomWord + "</u>";
    //Show modal.
    this.show('modal_container');
    //Add event listener to modal button.
    this.modalPlay.addEventListener('click', () => { 
      //Each time modal button is clicked ("Play Again"), gameState is set to menu.
      gameState = GAMESTATE[0];
      //Show "startBtn", "howTo", and "about" buttons.
      this.show('startBtn', 'howTo', 'about');
      //Hide modal.
      this.hide('modal_container');
      //Call "reset()" method.
      game.resetGame(hangMan);
      //Call "homeScreen()" method.
      game.homeScreen();
      //Hide drawingContainer, lettersPicked, wordsHidden, and buttonControls.
      game.hide('drawingContainer', 'lettersPicked', 'wordsHidden', 'buttonControls');
    })
  }

  //Create method called "wordUnderline()", responsible for creating dashes for hidden word.
  wordUnderline() {
    let remainingGuessesText = document.getElementById('remainingGuesses');
    //Each time method is called, set "remainingGuessesText" innerHTML equal to remainingGuesses variable for displaying number of remaining guesses.
    remainingGuessesText.innerHTML = "Remaining Guesses: " + remainingGuesses;
    document.getElementById('gameArea').appendChild(remainingGuessesText);
    //Show remainingGuessesText.
    remainingGuessesText.classList.remove('hide');
    //Set letterArr equal to array.
    this.letterArr = [];
    //Loop through letters in randomWord, and each time, add dash to letterArr.
    for(let i = 0; i < randomWord.length; i++) {
      this.letterArr.push('_');
    }
    //Display letterArr without commas (just dashes) by making it equal to "wordsHidden" innerText.
    wordsHidden.innerText = String(this.letterArr.join(''));
  }
  //Create method called "scoreCalc()" that is responsible for calculating score. 
  scoreCalc(letterArr) {
    score = score;
    //Loop through 1-7. In each iteration, check corresponding number of remainingGuesses and whether user is correct or incorrect. Calculate appropriate percentage out of 100. 
    for(let i = 0; i <= 7; i++) {
      if(remainingGuesses == i && letterArr.join('') == randomWord) {
        score = Math.ceil((i/7) * 100);
        document.getElementById('modal_paragraph').innerHTML += "<br>" + "Your score: " + score;
      } else if(remainingGuesses == i) {
        score = 0;
        document.getElementById('modal_paragraph').innerHTML += "<br>" + "Your score: " + score;

      }
    }
  }
  //Create method called "checkLetter()", responsible for evaluating letter each time user clicks a button or types on keyboard.
  checkLetter() {
    //Create function called "letterGrade()".
    function letterGrade(input, letterArr) {
      //Loop through letters of randomWord. If it is equal to user input, replace corresponding dash in letterArr with input letter.
      for(let i = 0; i < randomWord.length; i++) {
        if(randomWord[i] == input) {
          letterArr[i] = input; 
          //Display updated array without commas.
          document.getElementById('wordsHidden').innerText = String(letterArr.join(''));
        } 
      }
    }
    //Create function called "updateGuesses()" which will update number of remaining guesses.
    function updateGuesses(input) {
      //If randomWord includes user input, decrement number of remainingGuesses by 1.
      if(!(String(randomWord).includes(String(input)))) {
        remainingGuesses -=1;
        document.getElementById('remainingGuesses').innerHTML = "Remaining Guesses: " + remainingGuesses;
      }
      //Return remainingGuesses value back to variable each time function is called.
      return remainingGuesses
    }
    //Create function called "updateDrawing()" which will update hangman drawing according to number of remainingGuesses left.
    function updateDrawing(hangMan, letterArr) {
      //If there are 7 remainingGuesses, show first image.
      if(remainingGuesses == 7) {
        hangMan.img1();
      //If there are 6 remainingGuesses, show second image.
      } else if(remainingGuesses == 6) {
        hangMan.img2();
      //If there are 5 remainingGuesses, show third image.
      } else if(remainingGuesses == 5) {
        hangMan.img3();
      //If there are 4 remainingGuesses, show fourth image.
      } else if(remainingGuesses == 4) {
        hangMan.img4();
      //If there are 3 remainingGuesses, show fifth image.
      } else if(remainingGuesses == 3) {
        hangMan.img5();
      //If there are 2 remainingGuesses, show sixth image.
      } else if(remainingGuesses == 2) {
        hangMan.img6();
        //If there is 1 remainingGuess, show seventh image.
      } else if(remainingGuesses == 1) {
        hangMan.img7();
        //If there are 0 remainingGuesses, display "Game Over!" as modal_header and call "endScreen()" method.
      } else if(remainingGuesses == 0) {
        document.getElementById('modal_header').innerText = "Game Over!";
        game.endScreen();
        game.scoreCalc(letterArr);
        //Display hangman image on document.
      } else 
      hangMan.appendImage();
    //Create function called "guessHandler()" which will be responsible for compiling guesses, randomWord dashes, and checking if user entered a previously guessed letter.
    }    
    function guessHandler(input, letterArr) {
      //If lettersPicked does not include input (either keyboard or button input depending on argument passed to function), add input to lettersPicked array. Note: Letter has not been guessed yet.
      if(!(lettersPicked.includes(input))) {
        lettersPicked.push(input);
        //Call "updateGuesses()" function.
        updateGuesses(input); 
        //Each time "guessHander()" function is called, add input to lettersPicked array and display as innerHTML.
        document.getElementById('lettersPicked').innerHTML += input;
        //Call "letterGrade()" function.
        letterGrade(input, letterArr);
      } else {
          //Else, if lettersPicked array already includes input, it has already been guessed.
          let alreadyGuessed = document.getElementById('alreadyGuessed');
          //Show the alreadyGuessed notification, and add a delay before it is hidden.
          alreadyGuessed.classList.add('show');
          setTimeout(() => {
            alreadyGuessed.classList.remove
      ('show');
          }, 3000);
      }
      //If letterArr, excluding commas (full word that user has guessed), is equal to randomWord, display "You Won!" as modal header, and call "endScreen()" method.
      if(letterArr.join('') == randomWord) {
        document.getElementById('modal_header').innerHTML = "You Won!";
        game.endScreen();
        game.scoreCalc(letterArr);
      }
      //Call "updateDrawing()" function.
      updateDrawing(hangMan, letterArr);
    }
    //If BtnClicked is true, and gameState is start, call "guessHandler()" function.  
    if(this.BtnClicked && gameState == GAMESTATE[1]) {
      guessHandler(this.id, game.letterArr);
    //Else if, gameState is start, but button was not clicked, call "guessHandler()" function. Pass keyboardKey as input instead of button id.
    } else if(gameState == GAMESTATE[1]) {
      guessHandler(this.keyboardKey, game.letterArr); 
    }
  }
}
//Create new game object.
var game = new Game(wordList, hangMan);

//Call "homeScreen()", "homeScreenListeners()", and "createButtons()" methods, which must be called only once, outside class.
game.homeScreen();
game.homeScreenListeners();
game.createButtons();

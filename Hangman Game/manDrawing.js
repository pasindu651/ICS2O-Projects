//Create a class called "manDrawing" which will be responsible for storing and handling the hangman graphics.
//Export the class so that it can be accessible in the "script.js" file.
export default class manDrawing {
    //When the class is called, it will take remainingGuesses as an argument.
    constructor(remainingGuesses) {
        this.remainingGuesses = remainingGuesses;
        this.drawingContainer = document.getElementById('drawingContainer');
        this.img = document.createElement("img");
    }
    //Create a method called "appendImage()" which will add the image to the "drawingContainer".
    appendImage() {
        this.drawingContainer.appendChild(this.img);
    }
    //Create a method called "img1()" which will add the drawing container to the page.
    img1() {
        document.body.appendChild(this.drawingContainer);
        this.img.src = "./img/Hangman-01.png";
    }
    //Create a method called "img2()" that will display the second hangman image.
    img2() {
        this.img.src = "./img/Hangman-02.png";
    }
    //Create a method called "img3()" that will display the third hangman image.
    img3() {
        this.img.src = "./img/Hangman-03.png";
    }
    //Create a method called "img4()" that will display the fourth hangman image.
    img4() {
        this.img.src = "./img/Hangman-04.png";
    }
    //Create a method called "img5()" that will display the fifth hangman image.
    img5() {
        this.img.src = "./img/Hangman-05.png";
    }
    //Create a method called "img6()" that will display the sixth hangman image.
    img6() {
        this.img.src = "./img/Hangman-06.png";
    }
    //Create a method called "img7()" that will display the seventh image.
    img7() {
        this.img.src = "./img/Hangman-07.png";
    }
}

var num1, num2, signChoice;
num1 =0;
num2 =0;
signChoice = "";

/*Function to add numbers to input (screen)*/
function addNum(num){
document.getElementById("screen").value = document.getElementById("screen").value + num;
}

/*Function to set num1 and to assign chosen operator to variable*/
function setSign(sign){
signChoice = sign;
num1 = document.getElementById("screen").value;
console.log(num1);
document.getElementById("screen").value ="";
}

/*Function that when equal is clicked, evaluates based on chosen operator*/
function equalPressed() {
num2= document.getElementById("screen").value;
if (signChoice =="+") {
document.getElementById("screen").value = Number(num1)+ Number(num2);
} else if (signChoice == "-") {
  document.getElementById("screen").value = Number(num1)- Number(num2);
} else if (signChoice == "x") {
  document.getElementById("screen").value = Number(num1)* Number(num2);
} else if (signChoice == "÷") {
  document.getElementById("screen").value = Number(num1)/ Number(num2);
} else if (signChoice == "xʸ") {
  document.getElementById("screen").value = Number(num1) ** Number(num2);
}
}

/*Function to switch number to negative*/
function switchCase() {
  document.getElementById("screen").value
  = -Math.abs(document.getElementById("screen").value);
}

/*Function to convert number to decimal out of 100*/
function percent() {
  document.getElementById("screen").value
  = (document.getElementById("screen").value) /100;
}

/*Function to square number*/
function square() {
  document.getElementById("screen").value
  = (document.getElementById("screen").value) **2;
}

/*Function to square root number*/
function sqrt() {
  document.getElementById("screen").value
  = Math.sqrt(document.getElementById("screen").value);
}

/*Function to cut number in half*/
function half() {
  document.getElementById("screen").value
  = (document.getElementById("screen").value) /2;
}

/*Function to add decimal to number*/
function decimal() {
  document.getElementById("screen").value
  = ((Number(document.getElementById("screen").value)).toFixed(1)).slice(0,-1);
}

/*Function to determine natural logarithm of number*/
function log() {
  document.getElementById("screen").value
  = Math.log(document.getElementById("screen").value);
}

/*Function to reset input (screen)*/
function reset() {
  document.getElementById("screen").value = "";
}

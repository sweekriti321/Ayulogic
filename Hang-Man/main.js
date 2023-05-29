var word_arr = ["Snake" ,"Elephant" , "Cat"];
var word = word_arr[Math.floor(Math.random()*word_arr.length)];
let letters = [];

let mainContainer = Container();
document.body.appendChild(mainContainer);
mainContainer.appendChild(Title());

let container = Container1();
mainContainer.appendChild(container);
container.appendChild(ptag());
container.appendChild(startButton());


function ptag() {
    let tag = document.createElement("p");
    tag.id = "message";
    return tag;
}

function Container (){
    let mainContainer = document.createElement('div');

    mainContainer.style.display = 'grid';
    mainContainer.style.justifyContent = 'center';

    return mainContainer;
}

function Container1 (){
    let container = document.createElement('div');

    return container;
}
function Title(){
    let tiTle = document.createElement('h1');
    const txtnode = document.createTextNode('Hang Man');
  tiTle.style.textAlign = 'center';
  tiTle.appendChild(txtnode);
  return tiTle; 
}

function startButton(){
    let strtbtn = document.createElement('button');
     strtbtn.style.backgroundColor = "black";
     strtbtn.style.color = "white";
     strtbtn.style.padding = "20px";
     strtbtn.innerHTML = "Click To Start";
     strtbtn.style.justifyContent = "center";
      strtbtn.onclick = function(){
        Game();
      }
     return strtbtn;
}

function Game(){


var answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}
   


var remainingLetters = word.length;

while(remainingLetters > 0){
  alert(answerArray.join(" "));
  
    var guess = prompt("Guess a letter or click cancel to exit");
    
    if(guess==null){
        break;
    }
    else if(guess.length!==1){
        alert("please enter a single letter");
    }
    // else if(guess == enteredLetter){
    //     alert("Correct Letter");
    // }
    // else if(guess !== enteredLetter){
    //     alert("Incorrect Letter")
    // }
    else{
        for(var j; j<word.length;j++){
            answerArray[j] = guess;
            remainingLetters;
        }
    }
}
alert(answerArray.join(" "));
alert("the answer was " + word);
}



canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


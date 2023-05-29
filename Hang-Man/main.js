var word_arr = ["Snake" ,"Elephant" , "Cat"];
var word = word_arr[Math.floor(Math.random()*word_arr.length)];


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
    let arrayLetter = word_arr[i].split('');
    

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



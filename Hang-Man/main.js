
const word_Arr = ["SNAKE", "CAT", "ELEPHANT"];

var letterDisplayArr = [];
var correctWord = [];
var pressedWord = [];
var incorrectWord = [];
let chances = 9;
let matchCount = 0;

let mainContainer = Container();
mainContainer.style.display = "grid";
mainContainer.style.justifyContent = "center";
document.body.appendChild(mainContainer);

mainContainer.appendChild(Title());

let container = Container();
mainContainer.appendChild(container);
container.appendChild(ptag());
container.appendChild(startButton());

document.addEventListener("keydown", (event) => {
  var pressedKeyValue = event.key.toUpperCase();
  var pressedKey = event.key.charCodeAt();

  if (
    pressedKey < 64 ||
    pressedKey > 123 ||
    (pressedKey > 91 && pressedKey < 96)
  ) {
    noticeDisplayer("Only alphabets are accepted");
    return ; 
  }

  if (pressedWord.includes(pressedKeyValue) || incorrectWord.includes(pressedKeyValue)) {
    noticeDisplayer("This Alphabet has already been guessed");
    return ;
  }

  if (correctWord.includes(pressedKeyValue)) {
    var positions = getAllIndexes(correctWord, pressedKeyValue);

    positions.forEach((position) => {
      pressedWord[position] = pressedKeyValue;
      correctWord[position] = "";
    });

    var wordDisplayExisting = document.querySelector("#word-container");
    container.removeChild(wordDisplayExisting);
    container.appendChild(wordDisplay());

    matchCount = matchCount + positions.length;
    console.log(matchCount);
    if (matchCount == correctWord.length) {
      gameWinDisplay();
    }
  } else {
    incorrectWord.push(pressedKeyValue);
    noticeDisplayer("Oops!, Wrong Guesses made");
    chances = chances - 1;
  }

  if (chances <= 0) {
    gameOverDisplay();

  }
  
});

function ptag() {
  let tag = document.createElement("p");
  tag.id = "message";
  return tag;
}

function Container() {
  let mainContainer = document.createElement("div");
  return mainContainer;
}

function Title() {
  let tiTle = document.createElement("h1");
  const txtnode = document.createTextNode("Hang Man");
  tiTle.style.textAlign = "center";
  tiTle.appendChild(txtnode);
  return tiTle;
}

function startButton() {
  let strtbtn = document.createElement("button");
  strtbtn.style.backgroundColor = "black";
  strtbtn.style.color = "white";
  strtbtn.style.padding = "20px";
  strtbtn.innerHTML = "Click To Start";
  strtbtn.style.justifyContent = "center";
  strtbtn.onclick = function () {
    canvas();
    var startmessage = startGameBtnClick();
    container.removeChild(strtbtn);
    container.appendChild(startmessage);
    wordSelector();
    container.appendChild(wordDisplay());
    

  };
 
  return strtbtn;
  
}

function startGameBtnClick() {
  let startMessage = ptag();
  startMessage.textContent = "Welcome! Hope you enjoy the game..";
  startMessage.style.fontWeight = "900";
  startMessage.style.textAlign = "center";
  return startMessage;
}

function wordSelector() {
  const word = word_Arr[Math.floor(Math.random() * 3)];
  correctWord = word.split("");
  correctWord.forEach((corrLeter) => pressedWord.push("__"));
}

function letterDisplayEle() {
  let letterContainer = ptag();
  letterContainer.style.border = "1px solid black";
  letterContainer.style.fontWeight = "bold";
  letterContainer.style.fontSize = "24px";
  letterContainer.style.padding = "10px";

  return letterContainer;
}

function wordDisplay() {
  let wordContainer = document.createElement("div");
  wordContainer.id = "word-container";
  wordContainer.style.display = "flex";
  wordContainer.style.justifyContent = "space-evenly";

  wordContainer.style.border = "2px solid black";
  wordContainer.style.borderRadius = "10px";

  pressedWord.forEach((letter) => {
    var letterdisp = letterDisplayEle();
    letterdisp.textContent = letter;

    letterDisplayArr.push(letterdisp);
  });
  letterDisplayArr.forEach((letterdisplay) => {
    wordContainer.appendChild(letterdisplay);
  });

  letterDisplayArr = [];

  return wordContainer;
}

function gameOverDisplay() {
  let tiTle = document.createElement("h1");
  const txtnode = document.createTextNode("!!! GAME OVER !!!");
  tiTle.style.textAlign = "center";
  tiTle.appendChild(txtnode);

  let message = document.createElement("h3");
  message.textContent = "Refresh to Restart the New Game";
  message.style.display = "flex";
  message.style.alignItems = "center";
  message.style.justifyContent = "center";

  document.body.removeChild(mainContainer);
  document.body.appendChild(tiTle);
  document.body.appendChild(message);
  for (let i = 0; i < drawArray.length; i++) {
    drawArray[i]();
  }
}

function gameWinDisplay() {
  let tiTle = document.createElement("h1");
  const txtnode = document.createTextNode("!!! YOU WIN !!!");
  tiTle.style.textAlign = "center";
  tiTle.appendChild(txtnode);

  let message = document.createElement("h3");
  message.textContent = "Refresh to Restart the New Game";
  message.style.display = "flex";
  message.style.alignItems = "center";
  message.style.justifyContent = "center";

  document.body.removeChild(mainContainer);
  document.body.appendChild(tiTle);
  document.body.appendChild(message);
  document.body.appendChild(wordDisplay());
}

function getAllIndexes(array, element) {
  const indexes = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      indexes.push(i);
    }
  }

  return indexes;
}

function noticeDisplayer(message) {
  var notice = ptag();
  notice.textContent = message;
  mainContainer.appendChild(notice);
  setTimeout(function () {
    mainContainer.removeChild(notice);
  }, 1500);
  if (chances <= 0) {
    gameOverDisplay();
  } else {
    var remainingChances = chances - 1;
    drawArray[drawArray.length - remainingChances]();
  }
}


function canvas(){

  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;
};
function head(){
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI*2, true);
  context.stroke();
}

function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {

context.moveTo($pathFromx, $pathFromy);
context.lineTo($pathTox, $pathToy);
context.stroke(); 
}

function frame1() {
 draw (0, 150, 150, 150);
};

function frame2 () {
 draw (10, 0, 10, 600);
};

function frame3() {
 draw (0, 5, 70, 5);
};

function frame4 () {
 draw (60, 5, 60, 15);
};

function torso () {
 draw (60, 36, 60, 70);
};

function rightArm() {
 draw (60, 46, 100, 50);
};

function leftArm () {
 draw (60, 46, 20, 50);
};

function rightLeg () {
 draw (60, 70, 100, 100);
};

function leftLeg() {
 draw (60, 70, 20, 100);
};

const drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 



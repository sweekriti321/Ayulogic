
let textContainer = buildTextContainer();
let buttonElement = buttonContainerElement();
document.body.appendChild(textContainer);
textContainer.appendChild(title());
textContainer.appendChild(buildTextArea());
textContainer.appendChild(buttonElement);


buttonElement.appendChild(toUpperCaseButton());
buttonElement.appendChild(toLowerCaseButton());
buttonElement.appendChild(removeExtraSpaceButton());
buttonElement.appendChild(numberOfCharactersButton());
buttonElement.appendChild(numberOfWordsButton());
buttonElement.appendChild(clearAllButton());




function buildTextContainer() {
  let textContainer = document.createElement("div");
  textContainer.id = "text-container";
  textContainer.style.display = "grid";
  textContainer.style.justifyContent = "center";
  textContainer.style.paddingTop = '100px';

  return textContainer;
}

function buttonContainerElement() {
  let buttonContainer = document.createElement("div");
  buttonContainer.id = "new";
  buttonContainer.style.display = "flex";
  buttonContainer.style.marginLeft = "50px"
  buttonContainer.style.marginRight = "50px"

  buttonContainer.style.justifyContent = "space-around"

  return buttonContainer;
}
function title(){
  let tiTle = document.createElement('h1');
  const txtnode = document.createTextNode('Text - Utils');
  tiTle.style.textAlign = 'center';
  tiTle.appendChild(txtnode);
  return tiTle;
}

function buildTextArea() {
  let textarea = document.createElement("textarea");

  textarea.classList.add("area");
  textarea.style.width = "75rem";
  textarea.style.height = "15rem";
  textarea.style.backgroundColor = "mediumseagreen";
  textarea.style.border = "2px solid black";
  textarea.style.borderRadius = "8px";
  textarea.style.margin = "20px";

  textarea.addEventListener("input", function () {
    characterCountContainer();
    wordCountContainer();
  });

  return textarea;
}

function characterCountContainer() {
  let charCountEle = document.createElement("p");
  charCountEle.id = "character-count-element";

  document.body.appendChild(charCountEle);

  var characterCount = characterCounter();
  document.querySelector("#character-count-element").innerHTML = characterCount;
}

function characterCounter() {
  let charactersInTextArea = document.querySelector("textarea").value;

  return charactersInTextArea.length;
}

function wordCountContainer() {
  let wordCountEle = document.createElement("p");
  wordCountEle.id = "word-count-element";

  document.body.appendChild(wordCountEle);

  var wordCount = wordCounter();
  document.querySelector("#word-count-element").innerHTML = wordCount;
}

function wordCounter() {
  let textAreaContent = document.querySelector("textarea").value;

  return textAreaContent.trim().split(/\s+/).length;
}

function toUpperCaseButton() {
  let upperCaseButton = document.createElement("button");

  upperCaseButton.classList.add("upper-case-converter");
  upperCaseButton.style.padding = "10px";
  upperCaseButton.style.cursor = "pointer";
  upperCaseButton.style.margin = "10px";
  upperCaseButton.style.backgroundColor = "#ff5733"
  upperCaseButton.style.border = "2px solid black"
  upperCaseButton.style.borderRadius = "8px";
  upperCaseButton.style.width = "150px"

  upperCaseButton.innerHTML = "UPPERCASE";

  upperCaseButton.onclick = function () {
    upperCaseTextDisplay();
  };

  return upperCaseButton;
}

function upperCaseTextDisplay() {
  let textAreaContent = document.querySelector("textarea").value;

  document.querySelector("textarea").value = textAreaContent.toUpperCase();
}

function toLowerCaseButton() {
  let lowerCaseButton = document.createElement("button");

  lowerCaseButton.classList.add("lower");
  lowerCaseButton.style.padding = "10px";
  lowerCaseButton.style.cursor = "pointer";
  lowerCaseButton.style.margin = "10px";
  lowerCaseButton.style.backgroundColor = "#ff5733"
  lowerCaseButton.style.border = "2px solid black"
  lowerCaseButton.style.borderRadius = "8px";
  lowerCaseButton.style.width = "150px";

  lowerCaseButton.innerHTML = "lowercase";

  lowerCaseButton.onclick = function () {
    lowerCaseTextDisplay();
  };

  return lowerCaseButton;
}

function lowerCaseTextDisplay() {
  let textAreaContent = document.querySelector("textarea").value;

  document.querySelector("textarea").value = textAreaContent.toLowerCase();
}

function removeExtraSpaceButton() {
  let spaceRemoveButton = document.createElement("button");

  spaceRemoveButton.classList.add("extra-space-remover");
  spaceRemoveButton.style.padding = "10px";
  spaceRemoveButton.style.cursor = "pointer";
  spaceRemoveButton.style.margin = "10px";
  spaceRemoveButton.style.backgroundColor = "#ff5733"
  spaceRemoveButton.style.border = "2px solid black"
  spaceRemoveButton.style.borderRadius = "8px";
  spaceRemoveButton.style.width = "160px";

  spaceRemoveButton.innerHTML = "Remove Extra Spaces";

  spaceRemoveButton.onclick = function () {
    extraSpaceRemover();
  };

  return spaceRemoveButton;
}

function extraSpaceRemover() {
  let textAreaContent = document.querySelector("textarea").value;

  document.querySelector("textarea").value = textAreaContent
    .replace(/\s+/g, " ")
    .trim();
}

function numberOfCharactersButton() {
  let totalCharactersButton = document.createElement("button");

  totalCharactersButton.classList.add("number-of-characters");
  totalCharactersButton.style.padding = "10px";
  totalCharactersButton.style.cursor = "pointer";
  totalCharactersButton.innerHTML = "Number of Characters";
  totalCharactersButton.style.margin = "10px";
  totalCharactersButton.style.backgroundColor = "#ff5733"
  totalCharactersButton.style.border = "2px solid black"
  totalCharactersButton.style.borderRadius = "8px";
  totalCharactersButton.style.width = "160px";

  document.createElement("p").innerHTML = "Number of Characters";

  totalCharactersButton.onclick = function () {
    characterCounter();
  };

  return totalCharactersButton;
}

function numberOfWordsButton() {
  let totalWordsButton = document.createElement("button");

  totalWordsButton.classList.add("number-of-words");
  totalWordsButton.style.padding = "10px";
  totalWordsButton.style.cursor = "pointer";
  totalWordsButton.style.margin = "10px";
  totalWordsButton.style.backgroundColor = "#ff5733"
  totalWordsButton.style.border = "2px solid black"
  totalWordsButton.style.borderRadius = "8px";
  totalWordsButton.style.width = "160px";

  totalWordsButton.innerHTML = "Number of Words";

  totalWordsButton.onclick = function () {
    wordCounter();
  };

  document.createElement("p").innerHTML = "Number of Words";
  return totalWordsButton;
}

function clearAllButton() {
  let clearAllButtonElement = document.createElement("button");

  clearAllButtonElement.classList.add("clear-all");
  clearAllButtonElement.style.padding = "10px";
  clearAllButtonElement.style.cursor = "pointer";
  clearAllButtonElement.style.margin = "10px";
  clearAllButtonElement.style.backgroundColor = "#ff5733"
  clearAllButtonElement.style.border = "2px solid black"
  clearAllButtonElement.style.borderRadius = "8px";
  clearAllButtonElement.style.width = "160px";

  clearAllButtonElement.innerHTML = "Clear Screen";

  clearAllButtonElement.onclick = function () {
    clearAll();
  };

  return clearAllButtonElement;
}

function clearAll() {
  document.querySelector("textarea").value = "";
  document.querySelector("#word-count-element").innerHTML = 0;
  document.querySelector("#character-count-element").innerHTML = 0;
}

function ptag() {
  let tag = document.createElement("p");
  tag.id = "tagp";
  tag.innerHTML = "Length";
  let ptagp = buildTextContainer();
  ptagp.appendChild(tag);
}

function ptag1() {
  let tag1 = document.createElement("p");
  tag1.id = "tagp1";
  tag1.innerHTML = "Words";
  let ptagp1 = buildTextContainer();
  ptagp1.appendChild(tag1);
}

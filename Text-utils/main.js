
var container = btnContainer();
document.body.appendChild(container);
var btnc = buttonContainer();
container.appendChild(textArea());
container.appendChild(btnc);
btnc.appendChild(upBtn());
btnc.appendChild(lowBtn());
btnc.appendChild(noSpaceBtn());
btnc.appendChild(nocharBtn());
btnc.appendChild(noWordsBtn());
btnc.appendChild(clearBtn());


ptag();
ptag1();

function btnContainer() {
  let container = document.createElement("div");
  container.id = "current";
 
  return container;
}
function buttonContainer() {
  let cont = document.createElement("div");
  cont.id = "new";

  return cont;
}
function textArea() {
  let txtarea = document.createElement("textarea");
  txtarea.classList.add("area");
  txtarea.style.width = "75rem";
  txtarea.style.height = "15rem";
  txtarea.style.borderColor = "black";
  txtarea.style.backgroundColor = "mediumseagreen";
  txtarea.style.border = "none";
  txtarea.style.alignItems = "center";
  txtarea.style.marginLeft = "20px";
  txtarea.addEventListener("input", function () {
    ptaglen(); ptagwor();
  });
  return txtarea;
  
}
function upBtn() {
  let upbtn = document.createElement("button");
  upbtn.classList.add("upper");
  upbtn.style.padding = "10px";
  upbtn.style.cursor = "pointer";
  upbtn.innerHTML = "UpperCase";
  upbtn.onclick = function () {
    uptxtdisplay();
  };
  return upbtn;
}
function uptxtdisplay() {
  let uptxt = document.querySelector("textarea").value;
  uptxt = uptxt.toUpperCase();
  document.querySelector("textarea").value = uptxt;
}

function lowBtn() {
  let lowbtn = document.createElement("button");
  lowbtn.classList.add("lower");
  lowbtn.style.padding = "10px";
  lowbtn.style.cursor = "pointer";
  lowbtn.innerHTML = "Lowercase";
  lowbtn.onclick = function () {
    lowtxtdisplay();
  };
  return lowbtn;
}
function lowtxtdisplay() {
  let lowtxt = document.querySelector("textarea").value;
  lowtxt = lowtxt.toLowerCase();
  document.querySelector("textarea").value = lowtxt;
}
function nocharBtn() {
  let nochar = document.createElement("button");
  nochar.classList.add("charac");
  nochar.style.padding = "10px";
  nochar.style.cursor = "pointer";
  nochar.innerHTML = "Number of Characters";
  document.createElement("p").innerHTML = "Number of Characters";
  nochar.onclick = function () {
    chara();
  };
  return nochar;
}
function chara() {
  let character = document.querySelector("textarea").value;
  character = character.length;
  document.querySelector("#tagplen").innerHTML = character;
}
function ptag() {
  let tag = document.createElement("p");
  tag.id = "tagp";
  tag.innerHTML = "Length";
  let ptagp = btnContainer();
  ptagp.appendChild(tag);
}
function ptaglen() {
  let taglen = document.createElement("p");
  taglen.id = "tagplen";
  document.body.appendChild(taglen);
  chara();
}
function ptag1() {
  let tag1 = document.createElement("p");
  tag1.id = "tagp1";
  tag1.innerHTML = "Words";
  let ptagp1 = btnContainer();
  ptagp1.appendChild(tag1);
}
function ptagwor() {
  let tagwor = document.createElement("p");
  tagwor.id = "tagpwor";
  document.body.appendChild(tagwor);
  word();
}

function noWordsBtn() {
  let noword = document.createElement("button");
  noword.classList.add("words");
  noword.style.padding = "10px";
  noword.style.cursor = "pointer";
  noword.innerHTML = "Number of Words";
  noword.onclick = function () {
    word();
  };
  document.createElement("p").innerHTML = "Number of Words";
  return noword;
}
function word() {
  let wor = document.querySelector("textarea").value;
  wor = wor.trim().split(/\s+/).length;
  document.querySelector("#tagpwor").innerHTML = wor;
}

function noSpaceBtn() {
  let nospace = document.createElement("button");
  nospace.classList.add("space");
  nospace.style.padding = "10px";
  nospace.style.cursor = "pointer";
  nospace.innerHTML = "Remove Spaces";
  nospace.onclick = function () {
    spaces();
  };
  return nospace;
}
function spaces() {
  let spc = document.querySelector("textarea").value;
  spc = spc.replace(/\s+/g, " ");
  document.querySelector("textarea").value = spc;
}
function clearBtn() {
  let clear = document.createElement("button");
  clear.classList.add("space");
  clear.style.padding = "10px";
  clear.style.cursor = "pointer";
  clear.innerHTML = "Clear Screen";
  clear.onclick = function () {
    clearAll();
  };
  return clear;
}
function clearAll() {
  let cl = document.querySelector("textarea").value;
  cl = " ";
  document.querySelector("textarea").value = cl;
}

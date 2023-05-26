textArea();
upBtn();
lowBtn();
nocharBtn();
noWordsBtn();
noSpaceBtn();
clearBtn();

function textArea(){
    let txtarea = document.createElement("textarea");
    txtarea.classList.add("area");
    txtarea.style.width = '50rem';
    txtarea.style.height = '10rem';
            txtarea.style.borderColor='black'
            txtarea.style.backgroundColor = 'mediumseagreen';
            txtarea.style.border = 'none';
            
            document.body.appendChild(txtarea);
}
function upBtn(){
    let upbtn = document.createElement('button');
    upbtn.classList.add("upper");
    upbtn.style.padding = '10px'
    upbtn.style.cursor = 'pointer';
    upbtn.innerHTML = 'UpperCase';
    upbtn.onclick = function(){uptxtdisplay();};
    document.body.appendChild(upbtn);
}
function uptxtdisplay(){
    let uptxt = document.querySelector('textarea').value;
    uptxt = uptxt.toUpperCase();
    document.querySelector('textarea').value = uptxt;

}

function lowBtn(){
    let lowbtn = document.createElement('button');
    lowbtn.classList.add("lower");
    lowbtn.style.padding = '10px'
    lowbtn.style.cursor = 'pointer';
    lowbtn.innerHTML = 'Lowercase';
    lowbtn.onclick = function(){lowtxtdisplay();};
    document.body.appendChild(lowbtn);
}
function lowtxtdisplay(){
    let lowtxt = document.querySelector('textarea').value;
    lowtxt = lowtxt.toLowerCase();
    document.querySelector('textarea').value = lowtxt;
}
function nocharBtn(){
    let nochar = document.createElement('button');
    nochar.classList.add("charac");
    nochar.style.padding = '10px'
    nochar.style.cursor = 'pointer';
    nochar.innerHTML = 'Number of Characters';
    nochar.onclick = function(){chara();};
    document.body.appendChild(nochar);
}
function chara(){
    let character = document.querySelector('textarea').value;
    character = character.length;
    document.querySelector('textarea').value = character;
}
function noWordsBtn(){
    let noword = document.createElement('button');
    noword.classList.add("words");
    noword.style.padding = '10px'
    noword.style.cursor = 'pointer';
    noword.innerHTML = 'Number of Words';
    noword.onclick = function(){word();};
    document.body.appendChild(noword);
}
function word(){
   let wor = document.querySelector('textarea').value;
   wor = wor.trim().split(/\s+/).length;
   document.querySelector('textarea').value = wor;

}

function noSpaceBtn(){
    let nospace = document.createElement('button');
    nospace.classList.add("space");
    nospace.style.padding = '10px'
    nospace.style.cursor = 'pointer';
    nospace.innerHTML = 'Remove Spaces';
    nospace.onclick = function(){spaces();};
    document.body.appendChild(nospace);
}
function spaces(){
    let spc = document.querySelector('textarea').value;
     spc = spc.replace(/\s+/g, ' ');
    document.querySelector('textarea').value = spc;
}
function clearBtn(){
    let clear = document.createElement('button');
    clear.classList.add("space");
    clear.style.padding = '10px'
    clear.style.cursor = 'pointer';
    clear.innerHTML = 'Clear Screen';
    clear.onclick = function(){clearAll();};
    document.body.appendChild(clear);
}
function clearAll(){
    let cl = document.querySelector('textarea').value;
    cl= ' ';  
    document.querySelector('textarea').value = cl;
}





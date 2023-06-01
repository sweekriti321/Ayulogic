let mainContainer = document.createElement("div");


mainContainer.style.justifyContent = "center";
document.body.appendChild(mainContainer);
mainContainer.appendChild(Title());
mainContainer.appendChild(prevBtn());
mainContainer.appendChild(nextBtn());


let carouselContainer = document.createElement("div");
carouselContainer.id = "carousel-container";
mainContainer.appendChild(carouselContainer);
carouselContainer.style.justifyContent = "center";
carouselContainer.style.position = "relative";
carouselContainer.style.overflow = "hidden";
carouselContainer.style.width = "100%";
carouselContainer.style.height = "550px";
carouselContainer.style.border = "2px solid #33415c";

let slideindex = 1;

function fetchImg() {
 

  fetch(
    "./img.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((imgdata) => {
      imgdata.slice(0, 7).forEach((item) => {
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("mySlides");

        let imageDisp = document.createElement("img");
        imageDisp.src = item.urls.regular;

        let imgCaption = document.createElement("p");
        const txtnode = document.createTextNode((item.alt_description + " ").toUpperCase());
        
        
        imgCaption.style.zIndex = "1";
        imgCaption.style.position = "absolute";
        imgCaption.style.justifyContent = "center";
        imgCaption.style.fontSize = "15px";
        imgCaption.style.color = '#e9f5db';
        imgCaption.style.paddingTop = '30rem';
        imgCaption.style.paddingLeft = '30rem'
        imgCaption.appendChild(txtnode);

        imageDisp.style.width = "100%";
        imageDisp.style.height = "400px";
        imageDisp.style.display = "block";
        imageDisp.style.position = "absolute";
        imageDisp.style.top = 0;
        imageDisp.style.left = 0;
        imageDisp.style.width = "100%";
        imageDisp.style.height = "100%";
        imageContainer.appendChild(imgCaption);
        imageContainer.appendChild(imageDisp);

        carouselContainer.appendChild(imageContainer);
      });
    })
    .then(() => {
      showSlides(slideindex);
      // automaticSlides(slideindex);
    });
}

fetchImg();

function imagesCaption() {
  let capt = document.createElement("h6");
}

function Title() {
  let tiTle = document.createElement("h1");
  const txtnode = document.createTextNode("IMAGE CAROUSEL");
  tiTle.style.textAlign = "center";
  tiTle.style.color = "#c2dfe3";
  tiTle.style.textShadow = "2px 2px 5px skyblue";
  tiTle.appendChild(txtnode);
  return tiTle;
}
function prevBtn() {
  let prevbtn = document.createElement("button");
  prevbtn.innerHTML = "<";
  prevbtn.style.padding = "5px";
  prevbtn.style.backgroundColor = "rgba(0,0,0,0.8)";
  prevbtn.style.position = "absolute";
  prevbtn.style.top = "50%";
  prevbtn.style.width = "auto";
  prevbtn.style.marginTop = "-22px";
  prevbtn.style.padding = "16px";
  prevbtn.style.color = "white";
  prevbtn.style.fontWeight = " bold";
  prevbtn.style.fontSize = "18px";
  prevbtn.style.transition = " 0.6s ease";
  prevbtn.style.borderRadius = " 0 3px 3px 0";
  prevbtn.style.userSelect = " none";
  prevbtn.style.zIndex = "2";

  prevbtn.onclick = function () {
    plusSlides(-1);
  };
  return prevbtn;
}

function nextBtn() {
  let nxtbtn = document.createElement("button");
  nxtbtn.innerHTML = ">";
  nxtbtn.style.padding = "5px";
  nxtbtn.style.backgroundColor = "rgba(0,0,0,0.8)";
  nxtbtn.style.position = "absolute";
  nxtbtn.style.top = "50%";
  nxtbtn.style.width = "auto";
  nxtbtn.style.marginTop = "-22px";
  nxtbtn.style.padding = "16px";
  nxtbtn.style.color = "white";
  nxtbtn.style.fontWeight = " bold";
  nxtbtn.style.fontSize = "18px";
  nxtbtn.style.transition = " 0.6s ease";
  nxtbtn.style.borderRadius = " 0 3px 3px 0";
  nxtbtn.style.userSelect = " none";
  nxtbtn.style.right = "0";
  nxtbtn.style.borderRadius = "3px 0 0 3px";
  nxtbtn.style.zIndex = "+1";

  nxtbtn.onclick = function () {
    plusSlides(1);
  };
  return nxtbtn;
}

let maindotDiv = document.createElement("div");
mainContainer.appendChild(maindotDiv);
maindotDiv.style.display = "flex";
maindotDiv.style.paddingTop = "10px";

maindotDiv.style.justifyContent = "center";



 
  let bullet1 = document.createElement("div");
  bullet1.classList.add("dot");
  
  bullet1.style.cursor = " pointer";
  bullet1.style.height = "15px";
  bullet1.style.width = "15px";
  bullet1.style.margin = "0 2px";
  bullet1.style.backgroundColor = "  #bbb";
  bullet1.style.borderRadius = "50%";
  bullet1.style.display = "inlineblock";

  bullet1.style.transition = "backgroundcolor 0.6s ease";

  bullet1.onclick = function () {
    nextSlides(1);
  };
  maindotDiv.appendChild(bullet1);

  let bullet2 = document.createElement("div");
  bullet2.classList.add("dot");
  
  bullet2.style.cursor = " pointer";
  bullet2.style.height = "15px";
  bullet2.style.width = "15px";
  bullet2.style.margin = "0 2px";
  bullet2.style.backgroundColor = "  #bbb";
  bullet2.style.borderRadius = "50%";
  bullet2.style.display = "inlineblock";

  bullet2.style.transition = "backgroundcolor 0.6s ease";

  bullet2.onclick = function () {
    nextSlides(2);
  };
  maindotDiv.appendChild(bullet2);

  let bullet3 = document.createElement("div");
  bullet3.classList.add("dot");
  
  bullet3.style.cursor = " pointer";
  bullet3.style.height = "15px";
  bullet3.style.width = "15px";
  bullet3.style.margin = "0 2px";
  bullet3.style.backgroundColor = "  #bbb";
  bullet3.style.borderRadius = "50%";
  bullet3.style.display = "inlineblock";

  bullet3.style.transition = "backgroundcolor 0.6s ease";

  bullet3.onclick = function () {
    nextSlides(3);
  };
  maindotDiv.appendChild(bullet3);


  let bullet4 = document.createElement("div");
  bullet4.classList.add("dot");
  
  bullet4.style.cursor = " pointer";
  bullet4.style.height = "15px";
  bullet4.style.width = "15px";
  bullet4.style.margin = "0 2px";
  bullet4.style.backgroundColor = "  #bbb";
  bullet4.style.borderRadius = "50%";
  bullet4.style.display = "inlineblock";

  bullet4.style.transition = "backgroundcolor 0.6s ease";

  bullet4.onclick = function () {
    nextSlides(4);
  };
  maindotDiv.appendChild(bullet4);



  let bullet5 = document.createElement("div");
  bullet5.classList.add("dot");
  
  bullet5.style.cursor = " pointer";
  bullet5.style.height = "15px";
  bullet5.style.width = "15px";
  bullet5.style.margin = "0 2px";
  bullet5.style.backgroundColor = "  #bbb";
  bullet5.style.borderRadius = "50%";
  bullet5.style.display = "inlineblock";

  bullet5.style.transition = "backgroundcolor 0.6s ease";

  bullet5.onclick = function () {
    nextSlides(5);
  };
  maindotDiv.appendChild(bullet5);


function plusSlides(n) {
  showSlides((slideindex += n));
}

function nextSlides(n) {
  showSlides((slideindex = n));
}

function showSlides(n) {
  let i;

  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideindex - 1].style.display = "block";
  dots[slideindex - 1].className += " active";
}


//automatic slide

setInterval(function(){
  plusSlides(1);
},4000)

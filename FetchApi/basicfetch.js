let mainContainer = document.createElement("div");
// mainContainer.style.display = "grid";

mainContainer.style.justifyContent = "center";
document.body.appendChild(mainContainer);
mainContainer.appendChild(Title());
mainContainer.appendChild(prevBtn());
mainContainer.appendChild(nextBtn());
// let bullet = Dot();
// mainContainer.appendChild(Dot());

let carouselContainer = document.createElement("div");
carouselContainer.id = "carousel-container";
mainContainer.appendChild(carouselContainer);
carouselContainer.style.justifyContent = "center";
carouselContainer.style.position = "relative";
carouselContainer.style.overflow = "hidden";
carouselContainer.style.width = "100%";
carouselContainer.style.height = "400px";
carouselContainer.style.border = "2px solid black";

let slideindex = 1;

function fetchImg() {
  //"

  fetch(
    "https://api.unsplash.com/photos/random/?count=5&client_id=sUU-5uxLYbvBBqloArxZF1FlBvVe_ud-sHsyVsaVPPU "
  )
    .then((response) => {
      return response.json();
    })
    .then((imgdata) => {
      imgdata.slice(0, 5).forEach((item) => {
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("mySlides");

        let imageDisp = document.createElement("img");
        imageDisp.src = item.urls.regular;

        let imgCaption = document.createElement("p");
        const txtnode = document.createTextNode(item.alt_description);
        imgCaption.appendChild(txtnode);
        imgCaption.style.zIndex = "1";
        imgCaption.style.position = "absolute";
        imgCaption.style.textAlign = "center";
        imgCaption.style.fontSize = "15px";
        imgCaption.style.padding = "8px 12px";

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
      automaticSlides(slideindex);
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
  tiTle.appendChild(txtnode);
  return tiTle;
}
function prevBtn() {
  let prevbtn = document.createElement("button");
  prevbtn.innerHTML = "<";
  prevbtn.style.padding = "5px";
  prevbtn.style.backgroundColor = "rgba(0,0,0,0.8)";
  prevbtn.style.position = "absolute";
  prevbtn.style.top = "40%";
  prevbtn.style.width = "auto";
  prevbtn.style.marginTop = "-22px";
  prevbtn.style.padding = "16px";
  prevbtn.style.color = "white";
  prevbtn.style.fontWeight = " bold";
  prevbtn.style.fontSize = "18px";
  prevbtn.style.transition = " 0.6s ease";
  prevbtn.style.borderRadius = " 0 3px 3px 0";
  prevbtn.style.userSelect = " none";
  prevbtn.style.zIndex = "+1";

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
  nxtbtn.style.top = "40%";
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

for (i = 0; i < 5; i++) {
  let bullet = document.createElement("div");
  bullet.classList.add("dot");

  bullet.style.cursor = " pointer";
  bullet.style.height = "15px";
  bullet.style.width = "15px";
  bullet.style.margin = "0 2px";
  bullet.style.backgroundColor = "  #bbb";
  bullet.style.borderRadius = "50%";
  bullet.style.display = "inlineblock";

  bullet.style.transition = "backgroundcolor 0.6s ease";

  bullet.onclick = function () {
    nextSlides(i);
  };
  maindotDiv.appendChild(bullet);
}

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

function automaticSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > slides.length) {
    slideindex = 1;
  }
  slides[slideindex - 1].style.display = "block";
  setTimeout(automaticSlides, 3000); // Change image every 3 seconds
}

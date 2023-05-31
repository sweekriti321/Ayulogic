let mainContainer = document.createElement("div");
mainContainer.style.display = "grid";
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
carouselContainer.style.width = "500px";
carouselContainer.style.height = "500px";
carouselContainer.style.border = "2px solid black";



let slideindex = 1;

function fetchImg() {
  //"

  fetch(
    // "https://api.unsplash.com/photos/random/?count=5&client_id=sUU-5uxLYbvBBqloArxZF1FlBvVe_ud-sHsyVsaVPPU "

    "https://api.unsplash.com/photos/random/?count=5&client_id=Xy5FVewzbaH374GWrbZQnsBRLFEyU2l7q9iBt6981g8"
  )
    .then((response) => {
      return response.json();
    })
    .then((imgdata) => {
      imgdata.slice(0, 5).forEach((item) => {
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("mySlides");

        let imageDisp = document.createElement("img");
        imageDisp.src = item.urls.small;

        imageDisp.style.width = "40rem";
        imageDisp.style.height = "25rem";
        imageDisp.style.display = "block";
        imageDisp.style.position = "absolute";
        imageDisp.style.top = 0;
        imageDisp.style.left = 0;
        imageDisp.style.width = "100%";
        imageDisp.style.height = "100%";

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
  prevbtn.style.backgroundColor = "brown";
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

  prevbtn.onclick = function () {
    plusSlides(-1);
  };
  return prevbtn;
}

function nextBtn() {
  let nxtbtn = document.createElement("button");
  nxtbtn.innerHTML = ">";
  nxtbtn.style.padding = "5px";
  nxtbtn.style.backgroundColor = "brown";
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

  nxtbtn.onclick = function () {
    plusSlides(1);
  };
  return nxtbtn;
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
  // let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  //  }
  slides[slideindex - 1].style.display = "block";
  // dots[slideindex-1].className += " active";
}


function automaticSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > slides.length) {slideindex = 1}
  slides[slideindex-1].style.display = "block";
  setTimeout(automaticSlides, 5000); // Change image every 5 seconds
}

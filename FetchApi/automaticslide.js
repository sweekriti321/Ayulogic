let mainContainer = document.createElement("div");
mainContainer.style.display = "grid";
mainContainer.style.justifyContent = "center";
document.body.appendChild(mainContainer);
mainContainer.appendChild(Title());


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




function automaticSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slides.length) {slideindex = 1}
    slides[slideindex-1].style.display = "block";
    setTimeout(automaticSlides, 2000); // Change image every 2 seconds
  }
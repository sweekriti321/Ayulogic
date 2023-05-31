let mainContainer = document.createElement("div");
mainContainer.style.display = "grid";
mainContainer.style.justifyContent = "center";
document.body.appendChild(mainContainer);
mainContainer.appendChild(Title());

let carouselContainer = document.createElement("div");
mainContainer.appendChild(carouselContainer);
carouselContainer.style.justifyContent = "center";

for(i = 0 ; i<5 ; i++){
  let imageContainer = document.createElement('div');
  imageContainer.style.width = '10px';
  imageContainer.className = 'mySlides';
  imageContainer.style.display = 'block';
  carouselContainer.appendChild(imageContainer);
}

let btnContainer = document.createElement('div');
mainContainer.appendChild(btnContainer);
btnContainer.style.justifyContent = 'space-evenly'
btnContainer.appendChild(prevBtn());
btnContainer.appendChild(nextBtn());

function fetchImg() {
  //"

  fetch(
    "https://api.unsplash.com/photos/random/?count=5&client_id=sUU-5uxLYbvBBqloArxZF1FlBvVe_ud-sHsyVsaVPPU "
  )
    .then((response) => {
      return response.json();
    })
    .then((imgdata) => {
      
      for (i = 0; i < 5; i++) {
        let imageDisp = document.createElement("img");
        imageDisp.src = imgdata[i].urls.small;
        carouselContainer.appendChild(imageDisp);
      }
      
    });
}
//fetchImg();

function Title() {
  let tiTle = document.createElement("h1");
  const txtnode = document.createTextNode("IMAGE CAROUSEL");
  tiTle.style.textAlign = "center";
  tiTle.appendChild(txtnode);
  return tiTle;
}
function prevBtn(){
    let prevbtn = document.createElement('button');
    prevbtn.innerHTML = "<";
    prevbtn.style.padding = "10px";
    prevbtn.onclick = function(){
        plusSlides(-1);
    }
    return prevbtn ;

}


function nextBtn(){
    let nxtbtn = document.createElement('button');
    nxtbtn.innerHTML = ">";
    nxtbtn.style.padding = "10px";
    nxtbtn.onclick = function(){
        plusSlides(1);
    }
    return nxtbtn ;
}

let slideindex = 1;

showSlides(slideindex);

function plusSlides(n){
    showSlides(slideindex += n);
}

function nextSlides(n){
   showSlides(slideindex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideindex = 1}    
    if (n < 1) {slideindex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideindex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
  }
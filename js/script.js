var map;

const iit = {lat:41.835, lng:-87.627};
const pier = {lat: 41.892654, lng: -87.610168}

function initmap(){
	map = new google.maps.Map(document.getElementByID("map"), {
		zoom: 15, center: iit,
	});
	const marker = new google.maps.Marker({
		position: iit, map:map,
	});
}

function worldView() {
	map.setZoom(1);
}

function viewIIT() {
	map.setCenter(iit);
	map.setZoom(15);
}

function viewPier(){
	map.setCenter(pier);
	map.setZoom(15);
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}
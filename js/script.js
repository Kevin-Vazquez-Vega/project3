var map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), { 
	center: {lat:41.835, lmg:-87.627},
		zoom: 15, center: iit,
	});
	
const iit = {lat:41.835, lng:-87.627}
const pier = {lat:41.8919, lng:-87.6051};

function worldView() {
	map.setZoom(1);
}
function viewIIT(){
	map.setCenter(iit)
	map.setZoom(15);
}
function viewPier(){
	map.setCenter(pier)
	map.setZoom(13)
}

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
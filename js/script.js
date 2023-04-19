var map;

function initMap() {
    var mapProp = {
		map = new google.maps.Map(document.getElementById("map"), { 
		center: {lat:41.835, lmg:-87.627},
		zoom: 15,
	};

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
	showSlides(slideIndex = n)
}
function showSlides(n) {
	let i;
	let slides = document.getElementByClassName("mySlides");
	let bullets = document.getElementByClassname("bullet");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < dots.length; i++) {
		bullets[i].className = bullets[i].className.replace(" active", "");
	}

	slides[slidesIndex-1],style,display = "block";
	bullets[slideIndex-1].className += " active";
}
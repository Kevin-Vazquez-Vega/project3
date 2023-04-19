function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(41.87552, -87.630717),
    zoom: 10,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  myPointer(map);

  google.maps.event.addListener(map, "click", function(event){
    movePtr(map, event.latLng);
  });
}

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
	let slides = document.getElementByClassName("slide");
	let bullets = document.getElementByClassname("bullet");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < dots.length; i++) {
		bullets[i].className = bullets[i].className.replace(" active", "");
	}

	slides[slidesIndex-1],style,display = "block";
	bullets[slideIndex-1].className += " active";
}
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41, lng: -90},
        zoom: 8
    });

    const contentString =
    '<div id="content">' +
    '<h1 id="firstHeading" class="firstHeading">Chicago</h1>' +
    '<div id="bodyContent">' +
    "<p>The city of Chicago</p>" + 
    "</div>" +
    "</div>";
	
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Chicago",
    });
    let marker = new google.maps.Marker({
        position: { lat: 41.8781, lng: -87.6298 },
        map,
        title: "Chicago"
    });
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
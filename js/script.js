var map;
const iit = {lat:41.835, lng:-87.627};
const pier = {lat: 41.8919, lng: -87.6051}

function initMap() {
	map = new google.maps.Map(document.getElementByID("map"), {
		zoom: 15, center: iit, });
	
	const marker = mew google.maps.Marker.({
		position: iit, map:map.
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
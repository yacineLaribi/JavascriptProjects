// google api 
function initMap() {
    // Define the coordinates for the map center
    var mapCenter = { lat: 37.4221, lng: -122.0844 };

    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 12  // Set the initial zoom level
    });

    // You can add markers, polygons, or other features to the map here
}

// Ensure the Google Maps API is loaded before calling initMap
google.maps.event.addDomListener(window, 'load', initMap);
/*
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
var map = new mapboxgl.Map({
    container: 'map', // The ID of the HTML element to render the map
    style: 'mapbox://styles/mapbox/streets-v11', // The map style
    center: [-122.4194, 37.7749], // Map center coordinates (longitude, latitude)
    zoom: 12 // Initial zoom level
});*/

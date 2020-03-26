'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiamFtbmFkZWwiLCJhIjoiY2s4NmdpMW93MGhicjNscnEyNTVzNDQzbCJ9.duijjHslyNDxEtAfMBvh-w'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jamnadel/ck888ud7z18en1iodt7bgaqq1',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})
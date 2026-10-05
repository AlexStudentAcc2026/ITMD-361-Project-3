let map;
async function init() {
    // Import the needed libraries
    const { Map } = await google.maps.importLibrary('maps');

    // Create a new map from the div with id="map".
    map = new Map(document.getElementById('map'), {
        center: { lat: -37.8720905, lng: 175.6829096 },
        zoom: 12,
        renderingType: 'VECTOR',
    });

    console.log(map);
}

void init();
let map;
async function init() {
    // Import the needed libraries
    const { Map } = await google.maps.importLibrary('maps');
    const {ColorScheme} = await google.maps.importLibrary("core");

    // Create a new map from the div with id="map".
    map = new Map(document.getElementById('map'), {
        center: { lat: 48.874, lng: 2.295 },
        zoom: 17,
        renderingType: 'VECTOR',
        colorScheme: ColorScheme.DARK,
    });

    console.log(map);
}

void init();
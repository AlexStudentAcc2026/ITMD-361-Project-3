// As per Google's docs: The gmp-map element is the preferred way to add a Google map to a web page.
async function init() {
    // Import the needed libraries.
    await google.maps.importLibrary('maps');

    // Access the map.
    const mapElement = document.querySelector('gmp-map');
    // Access the underlying map object.
    const innerMap = mapElement.innerMap;

    console.log({ mapElement, innerMap });
}

void init();
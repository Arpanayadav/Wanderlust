mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: "red", rotation: 45 })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: popupOffsets }).setHTML(
      `<h4>${listing.title}</h4><p>Exact location will beprovided after booking</p>`,
    ),
  )
  .addTo(map);

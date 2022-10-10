const map = L.map("map", {
  center: [52.3376, 4.902],
  zoom: 11,
  zoomControl: false,
});

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=749cd015-b004-4ad6-aac4-933d15879f92",
  {
    maxZoom: 20,
    minZoom: 8,
    attribution: "© Stadia Maps",
  }
).addTo(map);

const LeafIcon = L.Icon.extend({
  options: {
    iconUrl: "./assets/marker.png",
    shadowUrl: "",
    iconSize: [32.31, 39.65],
    shadowSize: [],
    iconAnchor: [16, 39],
    shadowAnchor: [],
    popupAnchor: [-3, -76],
  },
});

document.querySelectorAll("li").forEach((element) => {
  let lat = element.dataset.lat;
  let long = element.dataset.long;

  L.marker([lat, long], {
    icon: new LeafIcon(),
  }).addTo(map);

  element.addEventListener("click", function () {
    map.flyTo([lat, long], 17, {
      duration: 2,
    });
  });
});

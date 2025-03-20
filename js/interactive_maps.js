var map = L.map("map").setView([0, 0], 2);
var layers = {};

let descriptions = {
  population:
    "This map shows global population density, with darker reds indicating higher concentrations of people in regions like South Asia, Europe, and West Africa. It highlights urban centers and densely populated areas, while lighter regions show lower population densities, useful for urban planning and resource management.",
  anthropogenic:
    "This image visualizes human-modified ecosystems, including agricultural and urbanized areas. Green represents agricultural zones, while yellow and red indicate urban regions. It highlights how human activities have transformed natural landscapes, especially in Europe, North America, and Asia, helping understand human impact on ecosystems and biodiversity.",
  pm25: "This map shows global PM2.5 concentrations, with higher pollution levels in North Africa, the Middle East, and South Asia (in orange/red). These areas face significant air pollution from dust, industry, and emissions. Blue zones indicate cleaner air, useful for monitoring air quality and addressing public health concerns.",
};

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

layers.population = L.tileLayer.wms(
  "https://sedac.ciesin.columbia.edu/geoserver/wms",
  {
    layers: "gpw-v4:gpw-v4-population-density_2015",
    format: "image/png",
    transparent: true,
    opacity: 0.6,
    attribution: "SEDAC",
  }
);

layers.anthropogenic = L.tileLayer.wms(
  "https://sedac.ciesin.columbia.edu/geoserver/wms",
  {
    layers: "anthromes:anthromes-anthropogenic-biomes-world-v2-2000",
    format: "image/png",
    transparent: true,
    opacity: 0.6,
    attribution: "SEDAC",
  }
);

layers.pm25 = L.tileLayer.wms(
  "https://sedac.ciesin.columbia.edu/geoserver/wms",
  {
    layers:
      "sdei:sdei-global-annual-avg-pm2-5-modis-misr-seawifs-aod-1998-2012_2010-2012",
    format: "image/png",
    transparent: true,
    opacity: 0.6,
    attribution: "SEDAC",
  }
);

function showLayer(layerName) {
  for (var layer in layers) {
    if (layer === layerName) {
      map.addLayer(layers[layer]);
      highlightButton(layerName);
    } else {
      map.removeLayer(layers[layer]);
    }
  }
  updateDescription(layerName);
}

function highlightButton(layerName) {
  var buttons = document.querySelectorAll("#controls button");
  buttons.forEach(function (btn) {
    btn.classList.remove("active");
  });
  document.getElementById(layerName + "Btn").classList.add("active");
}

function updateDescription(layerName) {
  // Update the text in the <p> element
  document.getElementById("description").innerText = descriptions[layerName];
}

// Show population layer and its description by default
showLayer("population");

let currentIndex = 0; // Index to track the current content

// Array of HTML files to load in the content container
const htmlFiles = [
  "../HTML/sliderMap.html",
  "../HTML/siderMap2.html",
  "../HTML/interactives maps.html",
];

// Function to load content into the container
function loadContent(index) {
  const container = document.getElementById("contentContainer");
  fetch(htmlFiles[index])
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
    })
    .catch((error) => {
      container.innerHTML = "<p>Error loading content</p>";
      console.error("Error:", error);
    });
}

// Initial content load
loadContent(currentIndex);

// Left slider click event
document.getElementById("leftSlider").addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : htmlFiles.length - 1;
  loadContent(currentIndex);
});

// Right slider click event
document.getElementById("rightSlider").addEventListener("click", () => {
  currentIndex = currentIndex < htmlFiles.length - 1 ? currentIndex + 1 : 0;
  loadContent(currentIndex);
});

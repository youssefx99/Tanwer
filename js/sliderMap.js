const slider = document.getElementById("slider");
const currentImage = document.getElementById("currentImage");
const dateDisplay = document.getElementById("dateDisplay");

const startDate = new Date(2000, 2); // March 2000

function updateImage() {
  const monthsElapsed = parseInt(slider.value);
  const currentDate = new Date(startDate.getTime());
  currentDate.setMonth(startDate.getMonth() + monthsElapsed);

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");

  const imageName = `MOD10C1MSNOW${year}${month}.jpeg`;
  currentImage.src = `../Data/images/${imageName}`;
  currentImage.alt = `Snow cover image for ${currentDate.toLocaleString(
    "default",
    { month: "long", year: "numeric" }
  )}`;

  dateDisplay.textContent = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // Add fade-in animation for smooth transition
  currentImage.style.opacity = 0;
  setTimeout(() => {
    currentImage.style.opacity = 1;
  }, 100);
}

slider.addEventListener("input", updateImage);
updateImage(); // Initialize with the first image

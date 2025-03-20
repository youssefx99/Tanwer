const imagePreview = document.getElementById("imagePreview");
const commandInput = document.getElementById("commandInput");
const rightSection = document.getElementById("rightSection");
const imageUpload = document.getElementById("imageUpload");

// Trigger image upload dialog when the placeholder is clicked
imagePreview.addEventListener("click", () => {
  imageUpload.click();
});

// Handle image upload and display placeholder image
imageUpload.addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;
      imagePreview.innerHTML = ""; // Clear previous content
      imagePreview.appendChild(image); // Display uploaded image
    };
    reader.readAsDataURL(file);
  }
});

// Handle command input and display the fixed output image after 3 seconds
commandInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // Show loading icon in the right section
    rightSection.innerHTML = '<div class="loader"></div>';

    // Add a delay of 3 seconds before showing the fixed output image
    setTimeout(() => {
      const outputImage = new Image();
      outputImage.src = "../newimages/output image.png"; // Fixed output image path
      rightSection.innerHTML = ""; // Clear the loader
      rightSection.appendChild(outputImage); // Show the output image
    }, 1500); // 3-second delay
  }
});

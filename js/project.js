// Handling form submission
document.getElementById("submit-button").addEventListener("click", function () {
  const fileInput = document.getElementById("pdf-upload");
  const comments = document.getElementById("comments").value;

  if (!fileInput.files.length) {
    alert("Please upload a PDF file.");
    return;
  }

  // Check if the file is a PDF
  const file = fileInput.files[0];
  if (file.type !== "application/pdf") {
    alert("Only PDF files are allowed.");
    return;
  }

  // Show success message
  document.getElementById("success-message").style.display = "block";

  // Reset the form
  fileInput.value = "";
  document.getElementById("comments").value = "";
});

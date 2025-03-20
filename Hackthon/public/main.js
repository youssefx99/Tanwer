// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the elements we'll need
  const sendButton = document.querySelector(".send-btn");
  const promptInput = document.querySelector(".prompt-input");
  const videoPreview = document.querySelector(".video-preview");
  const placeholderBox = document.querySelector(".placeholder-box");

  // Add click event listener to the send button
  sendButton.addEventListener("click", handleSendClick);

  // Also trigger on Enter key in the input field
  promptInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleSendClick();
    }
  });

  function handleSendClick() {
    // Get the prompt text
    const promptText = promptInput.value.trim();

    // Don't proceed if the input is empty
    if (!promptText) {
      return;
    }

    // Clear the input
    promptInput.value = "";

    // Replace placeholder with loader
    replacePlaceholderWithLoader();

    // Start the generation process simulation
    simulateGenerationProcess();
  }

  function replacePlaceholderWithLoader() {
    // Create loader HTML
    const loaderHTML = `
      <div class="generation-loader">
        <div class="spinner"></div>
        <div class="loader-message">جاري التحميل...</div>
      </div>
    `;

    // Replace the placeholder content
    placeholderBox.innerHTML = loaderHTML;

    // Add a CSS class to the placeholder box for styling if needed
    placeholderBox.classList.add("loading");
  }

  function updateLoaderMessage(message) {
    const loaderMessage = document.querySelector(".loader-message");
    if (loaderMessage) {
      loaderMessage.textContent = message;
    }
  }

  function simulateGenerationProcess() {
    // Step 1: Generate images
    setTimeout(() => {
      updateLoaderMessage("جاري إنشاء الصور...");

      // Step 2: Generate audio
      setTimeout(() => {
        updateLoaderMessage("جاري إنشاء المقطع الصوتي...");

        // Step 3: Sync images with audio
        setTimeout(() => {
          updateLoaderMessage("جاري مزامنة الصور مع الصوت...");

          // Step 4: Load and play the video
          setTimeout(() => {
            loadAndPlayVideo();
          }, 2500);
        }, 2500);
      }, 2500);
    }, 2000);
  }

  function loadAndPlayVideo() {
    // Create video element
    const videoElement = document.createElement("video");
    videoElement.classList.add("generated-video");
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.src = "./videos/video1.mp4";

    // Remove the placeholder box and replace with video
    placeholderBox.parentNode.replaceChild(videoElement, placeholderBox);

    // Add event listener for video loaded
    videoElement.addEventListener("loadeddata", function () {
      // Video is loaded and can be played
      console.log("Video loaded successfully");
    });

    // Add error handling
    videoElement.addEventListener("error", function () {
      console.error("Error loading video");
      updateLoaderMessage(
        "حدث خطأ أثناء تحميل الفيديو. يرجى المحاولة مرة أخرى."
      );
    });
  }

  const shareButton = document.querySelector(".action-btn.primary");
  const sharePopup = document.getElementById("sharePopup");
  const closePopupButton = document.getElementById("closePopup");
  const platformOptions = document.querySelectorAll(".platform-option");
  const platformForms = {
    facebook: document.getElementById("facebookForm"),
    youtube: document.getElementById("youtubeForm"),
    tiktok: document.getElementById("tiktokForm"),
  };

  // Open popup when share button is clicked
  shareButton.addEventListener("click", function () {
    sharePopup.style.display = "flex";
  });

  // Close popup when close button is clicked
  closePopupButton.addEventListener("click", function () {
    sharePopup.style.display = "none";
    resetPopup();
  });

  // Close popup when clicking outside the content
  sharePopup.addEventListener("click", function (event) {
    if (event.target === sharePopup) {
      sharePopup.style.display = "none";
      resetPopup();
    }
  });

  // Handle platform selection
  platformOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const platform = this.getAttribute("data-platform");

      // Remove 'selected' class from all options
      platformOptions.forEach((opt) => opt.classList.remove("selected"));

      // Add 'selected' class to clicked option
      this.classList.add("selected");

      // Hide all forms
      Object.values(platformForms).forEach((form) => {
        form.style.display = "none";
      });

      // Show selected platform form
      platformForms[platform].style.display = "block";
    });
  });

  // Handle form submission (for demonstration)
  const confirmButtons = document.querySelectorAll(".share-confirm-btn");
  confirmButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Here you would normally send the data to your server
      // For this example, we'll just show a success message

      const platformForm = this.closest(".platform-form");
      const platformName = platformForm.id.replace("Form", "");

      // Replace form with success message
      platformForm.innerHTML = `
        <div class="success-message">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h4>تم النشر بنجاح!</h4>
          <p>تم نشر الفيديو على ${platformName}.</p>
        </div>
      `;

      // Close popup after 2 seconds
      setTimeout(() => {
        sharePopup.style.display = "none";
        resetPopup();
      }, 2000);
    });
  });

  // Function to reset popup state
  function resetPopup() {
    // Remove selected class from all platform options
    platformOptions.forEach((opt) => opt.classList.remove("selected"));

    // Hide all platform forms
    Object.values(platformForms).forEach((form) => {
      form.style.display = "none";

      // Reset form if it contains a success message
      if (form.querySelector(".success-message")) {
        // Reset the form to its original state - you'd need to implement this based on your form structure
        // This is a simplified example
        location.reload();
      }
    });
  }
});

const videos = [
  {
    title: "Lesson 1: What Are the SDGs?",
    url: "https://www.youtube.com/embed/xubK4T9Nc8A",
  },
  {
    title: "Lesson 2: The Global Challenges Addressed by the SDGs",
    url: "https://www.youtube.com/embed/T9fMy52MaHY",
  },
  {
    title: "Lesson 3: Egypt Vision 2030",
    url: "https://www.youtube.com/embed/h3Zq-3-WJK8",
  },
];

// Select DOM elements
const videoFrame = document.getElementById("video-frame");
const videoTitle = document.getElementById("video-title");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

let currentIndex = 0;
let isTransitioning = false; // Flag to prevent multiple clicks during transition

// Function to update video and title with fade effect
function updateVideoWithFade(index) {
  if (isTransitioning) return; // Prevent running the transition again during an ongoing transition
  isTransitioning = true;

  // Apply fade-out effect
  videoFrame.classList.add("fade");
  videoTitle.classList.add("fade");

  // After the fade-out transition completes (500ms), change the video and title
  setTimeout(() => {
    // Update video and title content
    videoFrame.src = videos[index].url;
    videoTitle.textContent = videos[index].title;

    // Remove the fade-out class and add fade-in class to create fade-in effect
    videoFrame.classList.remove("fade");
    videoTitle.classList.remove("fade");

    videoFrame.classList.add("fade-in");
    videoTitle.classList.add("fade-in");

    // Remove fade-in class after the animation is done
    setTimeout(() => {
      videoFrame.classList.remove("fade-in");
      videoTitle.classList.remove("fade-in");
      isTransitioning = false; // Allow clicks again after the transition
    }, 500);
  }, 500); // 500ms is the duration of the fade-out effect
}

// Left arrow click event
leftArrow.addEventListener("click", function () {
  if (!isTransitioning) {
    currentIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    updateVideoWithFade(currentIndex);
  }
});

// Right arrow click event
rightArrow.addEventListener("click", function () {
  if (!isTransitioning) {
    currentIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    updateVideoWithFade(currentIndex);
  }
});

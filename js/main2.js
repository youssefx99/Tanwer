// Load course data from the JSON file
const loadCourseData = async () => {
  const response = await fetch("../Data/coursesData.json");
  const coursesData = await response.json();
  return coursesData;
};

// Function to handle navigation based on type (video, article, quiz)
const navigateToContent = (type, unit, contentId) => {
  let targetUrl = "";
  if (type === "video") {
    targetUrl = `../HTML/course_video_temp.html?unit=${unit}&video=${contentId}`;
  } else if (type === "article") {
    targetUrl = `../HTML/course_article_temp.html?unit=${unit}`;
  } else if (type === "quiz") {
    targetUrl = `../quiz_system/index.html?unit=${unit}&quiz=${contentId}`;
  }
  window.location.href = targetUrl;
};

// Attach event listeners to course items
const attachEventListeners = async () => {
  const coursesData = await loadCourseData();

  const videoIcons = document.querySelectorAll(".Cicon.CVideo");
  const articleIcons = document.querySelectorAll(".Cicon.CArticle");
  const quizIcons = document.querySelectorAll(".Cicon.CQuiz");

  // Add event listeners for videos
  videoIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      // For simplicity, assume each icon's order is mapped to a unit and video id
      const unit = `unit${Math.ceil((index + 1) / 3)}`; // Assuming 3 items per unit
      const videoId = (index % 3) + 1; // Video IDs are 1, 2, 3
      navigateToContent("video", unit, videoId);
    });
  });

  // Add event listeners for articles
  articleIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      const unit = `unit${Math.ceil((index + 1) / 2)}`; // Assuming 2 articles per unit
      navigateToContent("article", unit);
    });
  });

  // Add event listeners for quizzes
  quizIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      const unit = `unit${Math.ceil((index + 1) / 2)}`; // Assuming 2 quizzes per unit
      const quizId = (index % 2) + 1;
      navigateToContent("quiz", unit, quizId);
    });
  });
};

// Initialize the course page
attachEventListeners();

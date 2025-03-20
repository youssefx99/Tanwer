if (!localStorage.getItem("user")) {
  window.location.href = "./login.html";
}
const currentStoredItems = JSON.parse(localStorage.getItem("course_items"));
fetch("../Data/courses_data.json")
  .then((response) => response.json())
  .then((data) => {
    const courses_container = document.querySelector(".course-box");
    data.forEach((ele, index) => {
      // get videos links
      const videos = ele.videos,
        id = ele.id;
      let videosContent = "";

      // Loop through videos
      videos.forEach((video) => {
        videosContent += `<a href="./course_video_temp.html?id=${id}&video_id=${video.id}"> 
                    <div class="CVideo Cicon"> 
                        <i class="fa-solid fa-circle-play"></i> 
                        <div class="Cname">Lesson ${video.number}</div> 
                    </div> 
                </a>`;
      });

      // Loop through articles and conditionally check for "Project"
      ele.article.forEach((article) => {
        let iconClass = article.name === "Project" ? "fa-book" : "fa-newspaper"; // Change icon if article.name is "Project"
        let articleClass = article.name === "Project" ? "CProject" : "CArticle"; // Add class CProject for "Project" articles

        // Set the URL for the article. If the article is "Project", navigate to ./HTML/project.html
        let articleLink =
          article.name === "Project"
            ? "./project.html"
            : `./course_article_temp.html?id=${id}&article_id=${article.id}`;

        // Generate article content
        videosContent += `<a href="${articleLink}"> 
                <div class="${articleClass} Cicon"> 
                    <i class="fa-solid ${iconClass}"></i> 
                    <div class="Cname">${article.name}</div> 
                </div> 
            </a>`;
      });

      // Determine the quiz link based on the index
      const quizLink =
        index === 0
          ? "../HTML/interactives maps.html"
          : `../quiz_system/index.html?id=${id}`;

      // Determine the quiz icon based on the index
      const quizIcon =
        index === 0 ? "fa-earth-americas" : "fa-clipboard-question";

      // Determine the quiz class based on the index
      const quizClass = index === 0 ? "CQuiz CActivity" : "CQuiz";

      const box = ` 
            <div class="col d-flex ${
              currentStoredItems.includes(ele.id) ? "active" : ""
            } item"> 
            ${videosContent} 
            <a href="${quizLink}"> 
            <div class="${quizClass} Cicon"> 
                <i class="fa-solid ${quizIcon}"></i> 
                <div class="Cname">Quiz</div> 
            </div> 
            </a> 
            </div> 
        `;
      courses_container.innerHTML = courses_container.innerHTML + box;
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

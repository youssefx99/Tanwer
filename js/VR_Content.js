// JSON data for VR videos
const vrVideos = {
  1: "<iframe width='560' height='315' src='https://www.youtube.com/embed/ZGWNcvnQQtU?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  2: "<iframe width='560' height='315' src='https://www.youtube.com/embed/TPRIP6P90lE?si=m2MV4F46w2zEuohg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  3: "<iframe width='560' height='315' src='https://www.youtube.com/embed/tzxctiQVXEU?si=vRyineTAoqd2qweJ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  4: "<iframe width='560' height='315' src='https://www.youtube.com/embed/3bqjfXvvOhU?si=n0qduznL6aQtpmUl' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  5: "<iframe width='560' height='315' src='https://www.youtube.com/embed/5FAaknEKoo4?si=nMa3f-WWj3daqMgP' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  6: "<iframe width='560' height='315' src='https://www.youtube.com/embed/DqMSZ_i2oCU?si=XLU5nJCaP7LkruYH' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  7: "<iframe width='560' height='315' src='https://www.youtube.com/embed/L_jWHffIx5E?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
};

// Function to handle video selection and autoplay
function loadVideo(videoId) {
  const videoContainer = document.getElementById("videoContainer");
  videoContainer.innerHTML = vrVideos[videoId]; // Embed the video with autoplay
}

// Event listener for video title clicks
document.querySelectorAll(".video-title").forEach((title) => {
  title.addEventListener("click", function () {
    const videoId = this.getAttribute("data-id");
    loadVideo(videoId); // Load and autoplay the selected video
  });
});

// Load the first video by default with autoplay
loadVideo("1");
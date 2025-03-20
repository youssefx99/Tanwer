// Template for course data - create a separate file for each subject
// Example filename: courseDataحساب التفاضل والتكامل.js, courseDataAlgebra.js, courseDataGeometry.js

const courseData = {
    title: "Subject Title", // Will be replaced by the specific subject
    videos: [
      {
        id: 1,
        title: "Lesson 1: Introduction",
        embedHtml: "<iframe width='560' height='315' src='https://www.youtube.com/embed/TikbPZiHWcM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
        transcript: `
          <h3>Lesson 1 Transcript</h3>
          <p>Welcome to the introduction of this course. In this video, we'll cover the fundamental concepts that form the foundation of our subject.</p>
          <p>We'll begin by discussing the historical context and why this topic is important in mathematics.</p>
          <p>Next, we'll introduce the key terminology and basic principles that you'll need to understand before moving on to more advanced topics.</p>
          <p>Finally, we'll give you a roadmap of what to expect in the following lessons and how all the pieces fit together.</p>
        `
      },
      {
        id: 2,
        title: "Lesson 2: Fundamentals",
        embedHtml: "<iframe width='560' height='315' src='https://www.youtube.com/embed/TPRIP6P90lE?si=m2MV4F46w2zEuohg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
        transcript: `
          <h3>Lesson 2 Transcript</h3>
          <p>In this lesson, we dive deeper into the core concepts of the subject.</p>
          <p>We'll begin by exploring the key formulas and their applications in solving problems. The relationship between different elements is crucial to understanding how to approach various scenarios.</p>
          <p>Through several examples, we'll demonstrate how to apply these principles in practice, starting with simpler cases and gradually moving to more complex situations.</p>
          <p>By the end of this lesson, you should be comfortable with the basic techniques and ready to tackle more challenging problems.</p>
        `
      },
      {
        id: 3,
        title: "Lesson 3: Advanced Concepts",
        embedHtml: "<iframe width='560' height='315' src='https://www.youtube.com/embed/tzxctiQVXEU?si=vRyineTAoqd2qweJ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
        transcript: `
          <h3>Lesson 3 Transcript</h3>
          <p>Now that we've mastered the basics, let's explore more advanced concepts in this field.</p>
          <p>This lesson focuses on extending our understanding to more complex scenarios that require combining multiple techniques and principles.</p>
          <p>We'll examine special cases and exceptions to the general rules, which often lead to interesting insights and applications.</p>
          <p>The methods we discuss here form the foundation for higher-level mathematics and practical applications in various scientific fields.</p>
        `
      },
      {
        id: 4,
        title: "Lesson 4: Practice Problems",
        embedHtml: "<iframe width='560' height='315' src='https://www.youtube.com/embed/3bqjfXvvOhU?si=n0qduznL6aQtpmUl' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
        transcript: `
          <h3>Lesson 4 Transcript</h3>
          <p>In this final lesson, we'll work through various practice problems to reinforce your understanding.</p>
          <p>Problem 1: [Description of the problem]</p>
          <p>Solution: We begin by identifying the key elements in the problem. Next, we apply the formula we learned in Lesson 2. After simplifying the expressions, we arrive at our answer.</p>
          <p>Problem 2: [Description of the problem]</p>
          <p>Solution: This problem requires us to combine concepts from both Lessons 2 and 3. First, we... Then, we... Finally, we get the result.</p>
          <p>These practice problems should help solidify your understanding of the material. Remember to pause the video and try solving them on your own before watching the solutions.</p>
        `
      }
    ]
  };
  
  // Function to load the course content
  function loadCourseContent() {
    // Set course title
    document.getElementById('course-title').textContent = courseData.title;
    
    // Create video buttons
    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = '';
    
    courseData.videos.forEach(video => {
      const button = document.createElement('button');
      button.className = 'video-button';
      button.textContent = video.title;
      button.onclick = function() { showVideo(video.id); };
      videoContainer.appendChild(button);
    });
    
    // Create video content sections
    const courseBox = document.querySelector('.course-box');
    
    // Remove any existing video content sections
    document.querySelectorAll('.video-content').forEach(el => el.remove());
    
    courseData.videos.forEach(video => {
      const videoContent = document.createElement('div');
      videoContent.id = 'video' + video.id;
      videoContent.className = 'video-content';
      
      videoContent.innerHTML = `
        <div class="video-frame">
          ${video.embedHtml}
          <div id="video-error-${video.id}" class="video-error-container" style="display: none;">
            <div class="video-error-message">
              <p>The video couldn't be loaded. This may be due to:</p>
              <ul>
                <li>Internet connection issues</li>
                <li>The video being unavailable or private</li>
                <li>An incorrect video link</li>
              </ul>
              <button onclick="retryVideo(${video.id})">Retry</button>
            </div>
          </div>
        </div>
        <div class="transcript">
          ${video.transcript}
        </div>
      `;
      
      courseBox.appendChild(videoContent);
    });
    
    // Add CSS for responsive video and error messages
    if (!document.getElementById('video-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'video-styles';
      styleEl.textContent = `
        .video-frame {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          overflow: hidden;
        }
        .video-frame iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .video-error-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          box-sizing: border-box;
        }
        .video-error-message {
          max-width: 80%;
        }
        .video-error-message button {
          display: inline-block;
          margin: 10px;
          padding: 8px 16px;
          background-color: #4285f4;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
      `;
      document.head.appendChild(styleEl);
    }
  }
  
  // Function to show a specific video
  function showVideo(videoNumber) {
    // Hide all videos
    const videos = document.querySelectorAll('.video-content');
    videos.forEach(video => {
      video.classList.remove('active');
      
      // Pause any playing videos by replacing the iframe
      const videoId = video.id.replace('video', '');
      const videoData = courseData.videos.find(v => v.id == videoId);
      if (videoData) {
        const iframe = video.querySelector('iframe');
        if (iframe) {
          // Stop autoplay by reloading without autoplay parameter
          const newHtml = videoData.embedHtml.replace('autoplay=1', 'autoplay=0');
          iframe.parentNode.innerHTML = newHtml;
        }
      }
    });
    
    // Show selected video
    const selectedVideo = document.getElementById('video' + videoNumber);
    if (selectedVideo) {
      selectedVideo.classList.add('active');
      
      // Set autoplay for the selected video
      const videoData = courseData.videos.find(v => v.id == videoNumber);
      if (videoData) {
        const iframe = selectedVideo.querySelector('iframe');
        if (iframe) {
          // Ensure autoplay is enabled
          let newHtml = videoData.embedHtml;
          if (!newHtml.includes('autoplay=1')) {
            newHtml = newHtml.replace('src=', 'src=\'https://www.youtube.com/embed/' + extractVideoId(iframe.src) + '?autoplay=1&' + getSrcParams(iframe.src) + '\'');
            iframe.parentNode.innerHTML = newHtml;
          }
        }
      }
    }
  }
  
  // Helper function to extract video ID from YouTube URL
  function extractVideoId(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : "";
  }
  
  // Helper function to get URL parameters
  function getSrcParams(url) {
    const params = url.split('?')[1];
    if (params) {
      return params.split('&').filter(p => !p.startsWith('autoplay=')).join('&');
    }
    return '';
  }
  
  // Function to retry loading a video
  function retryVideo(videoId) {
    const video = document.getElementById('video' + videoId);
    const errorContainer = document.getElementById(`video-error-${videoId}`);
    
    if (video && errorContainer) {
      // Hide error message
      errorContainer.style.display = 'none';
      
      // Reload the video content
      const videoData = courseData.videos.find(v => v.id == videoId);
      if (videoData) {
        const videoFrame = video.querySelector('.video-frame');
        if (videoFrame) {
          videoFrame.innerHTML = videoData.embedHtml + `
            <div id="video-error-${videoId}" class="video-error-container" style="display: none;">
              <div class="video-error-message">
                <p>The video couldn't be loaded. This may be due to:</p>
                <ul>
                  <li>Internet connection issues</li>
                  <li>The video being unavailable or private</li>
                  <li>An incorrect video link</li>
                </ul>
                <button onclick="retryVideo(${videoId})">Retry</button>
              </div>
            </div>
          `;
        }
      }
    }
  }
  
  // Initialize the page when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    loadCourseContent();
    
    // Load the first video by default
    if (courseData.videos.length > 0) {
      showVideo(courseData.videos[0].id);
    }
  });
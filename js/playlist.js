// playlist.js - Functions for the video playlist functionality

// Function to render playlist items
function renderPlaylist() {
    const playlistContainer = document.getElementById('playlist-items');
    playlistContainer.innerHTML = '';
    
    playlistData.forEach((video, index) => {
      const playlistItem = document.createElement('div');
      playlistItem.className = 'playlist-item';
      playlistItem.dataset.videoId = video.id;
      
      playlistItem.innerHTML = `
        <div class="playlist-thumbnail">
          <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='../images/default-thumbnail.jpg'">
          <span class="playlist-duration">${video.duration}</span>
        </div>
        <div class="playlist-info">
          <h4>${video.title}</h4>
          <p>Lesson ${index + 1}</p>
        </div>
      `;
      
      playlistItem.addEventListener('click', () => {
        playVideo(video);
      });
      
      playlistContainer.appendChild(playlistItem);
    });
  }
  
  // Function to play a video
  function playVideo(video) {
    const mainVideo = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');
    
    // Update video player
    mainVideo.src = video.videoUrl;
    
    // Update video info
    videoTitle.textContent = video.title;
    videoDescription.textContent = video.description;
    
    // Mark as active in playlist
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach(item => {
      if (item.dataset.videoId === video.id) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  // Function to load playlist from URL parameter (if available)
  function loadPlaylistFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const playlistId = urlParams.get('playlist');
    
    // Here you would fetch the playlist data from your database or API
    // For now, we're using the static playlistData defined in playlistData.js
    
    // If we had multiple playlists, we could load a specific one based on the ID
    // For this example, we're just using the single playlist we have
  }
  
  // Initialize the playlist
  document.addEventListener('DOMContentLoaded', () => {
    // Load playlist data if it's specified in URL
    loadPlaylistFromUrl();
    
    // Render the playlist
    renderPlaylist();
    
    // Play the first video initially if there are videos
    if (playlistData.length > 0) {
      playVideo(playlistData[0]);
    }
  });
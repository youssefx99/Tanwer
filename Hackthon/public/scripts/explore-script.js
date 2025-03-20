document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const ideaSuggestions = document.querySelectorAll(".idea-suggestion");
  const videoCards = document.querySelectorAll(".video-card, .featured-video");
  const loadMoreBtn = document.querySelector(".load-more-btn");
  const filterBtn = document.querySelector(".filter-btn");
  const filterOptions = document.querySelectorAll(".sidebar .option-select");

  // Initialize placeholder thumbnails with gradients
  initializeThumbnails();

  // Create the floating "back to top" button
  createBackToTopButton();

  // Handle video idea suggestions
  ideaSuggestions.forEach((suggestion) => {
    suggestion.addEventListener("click", function () {
      // Navigate to main page with this suggestion as input
      window.location.href = `index.html?prompt=${encodeURIComponent(
        this.textContent
      )}`;
    });
  });

  // Handle video card clicks
  videoCards.forEach((card) => {
    card.addEventListener("click", function () {
      // For demo purposes, just show an alert
      const videoTitle = this.querySelector(".video-title").textContent;

      // In a real application, this would open a video player modal or navigate to a video page
      handleVideoClick(videoTitle);
    });
  });

  // Handle load more button
  loadMoreBtn.addEventListener("click", function () {
    // Show loading state
    this.textContent = "جاري التحميل...";
    this.disabled = true;

    // Simulate loading delay
    setTimeout(() => {
      // Add 6 more video cards
      loadMoreVideos();

      // Reset button
      this.textContent = "عرض المزيد";
      this.disabled = false;
    }, 1500);
  });

  // Apply filters
  filterBtn.addEventListener("click", function () {
    const filters = {};

    // Collect filter values
    filterOptions.forEach((option) => {
      const label = option.previousElementSibling.textContent.trim();
      const value = option.value;
      filters[label] = value;
    });

    // In a real app, this would fetch filtered content from a server
    console.log("Applied filters:", filters);

    // For demo, just simulate a refresh
    applyFilters(filters);

    // Close the sidebar
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  });

  // Generate random gradient colors for video thumbnails
  function initializeThumbnails() {
    const thumbnails = document.querySelectorAll(".video-thumbnail");

    thumbnails.forEach((thumbnail) => {
      // Generate random gradient colors for demo
      const hue1 = Math.floor(Math.random() * 360);
      const hue2 = (hue1 + 40) % 360;
      const gradient = `linear-gradient(135deg, 
                                hsl(${hue1}, 70%, 80%) 0%, 
                                hsl(${hue2}, 70%, 60%) 100%)`;

      thumbnail.style.backgroundImage = gradient;
    });
  }

  // Handle video click
  function handleVideoClick(videoTitle) {
    // Create a modal for video playback
    const modal = document.createElement("div");
    modal.className = "video-modal";
    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${videoTitle}</h3>
                    <button class="close-modal">×</button>
                </div>
                <div class="modal-body">
                    <div class="video-player">
                        <div class="player-placeholder">
                            <div class="play-icon large">▶</div>
                            <p>يتم تحميل الفيديو...</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.appendChild(modal);

    // Add modal styles
    const style = document.createElement("style");
    style.textContent = `
            .video-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .video-modal.active {
                opacity: 1;
            }
            .modal-content {
                background-color: white;
                border-radius: 12px;
                width: 90%;
                max-width: 800px;
                max-height: 90vh;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
            .modal-header {
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #eee;
            }
            .close-modal {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #666;
            }
            .modal-body {
                padding: 0;
                overflow: hidden;
            }
            .video-player {
                width: 100%;
                aspect-ratio: 16/9;
                background-color: #000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .player-placeholder {
                text-align: center;
                color: #fff;
            }
            .play-icon.large {
                width: 80px;
                height: 80px;
                font-size: 30px;
                margin: 0 auto 20px;
            }
        `;
    document.head.appendChild(style);

    // Add close functionality
    setTimeout(() => {
      modal.classList.add("active");

      const closeBtn = modal.querySelector(".close-modal");
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        setTimeout(() => {
          modal.remove();
        }, 300);
      });

      // Close when clicking outside
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeBtn.click();
        }
      });
    }, 10);
  }

  // Load more videos
  function loadMoreVideos() {
    const videosGrid = document.querySelector(".videos-grid");

    // Sample video data
    const newVideos = [
      {
        title: "تحت المجهر - رحلة داخل جسم الإنسان",
        duration: "1:15",
        views: "2.1K",
        category: "تعليمي",
      },
      {
        title: "موسيقى تصويرية لمناظر طبيعية خلابة",
        duration: "2:10",
        views: "3.4K",
        category: "موسيقى",
      },
      {
        title: "تاريخ الرياضيات - قصة الأرقام",
        duration: "0:48",
        views: "1.7K",
        category: "تعليمي",
      },
      {
        title: "جولة في المدن القديمة",
        duration: "1:05",
        views: "2.5K",
        category: "سياحة",
      },
      {
        title: "كيف تعمل محركات السيارات؟",
        duration: "0:58",
        views: "4.2K",
        category: "تقنية",
      },
      {
        title: "أسرار الفضاء - المجرات البعيدة",
        duration: "1:22",
        views: "3.8K",
        category: "علمي",
      },
    ];

    // Create new video cards
    newVideos.forEach((video) => {
      const videoCard = document.createElement("div");
      videoCard.className = "video-card";
      videoCard.innerHTML = `
                <div class="video-thumbnail">
                    <div class="thumbnail-overlay">
                        <div class="play-icon">▶</div>
                    </div>
                    <div class="video-duration">${video.duration}</div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <div class="video-meta">
                        <span class="meta-item views">${video.views} مشاهدة</span>
                        <span class="meta-item category">${video.category}</span>
                    </div>
                </div>
            `;

      videosGrid.appendChild(videoCard);

      // Initialize the thumbnail
      const thumbnail = videoCard.querySelector(".video-thumbnail");
      const hue1 = Math.floor(Math.random() * 360);
      const hue2 = (hue1 + 40) % 360;
      const gradient = `linear-gradient(135deg, 
                                hsl(${hue1}, 70%, 80%) 0%, 
                                hsl(${hue2}, 70%, 60%) 100%)`;
      thumbnail.style.backgroundImage = gradient;

      // Add click event
      videoCard.addEventListener("click", function () {
        handleVideoClick(video.title);
      });
    });
  }

  // Apply filters
  function applyFilters(filters) {
    // Show loading animation
    const content = document.querySelector(".content");
    const loadingEl = document.createElement("div");
    loadingEl.className = "loading-overlay";
    loadingEl.innerHTML = '<div class="loading-spinner"></div>';
    content.appendChild(loadingEl);

    // Simulate API call delay
    setTimeout(() => {
      // Remove loading animation
      loadingEl.remove();

      // Show filter result notification
      const notification = document.createElement("div");
      notification.className = "filter-notification";
      notification.textContent = "تم تطبيق الفلترة بنجاح";
      document.body.appendChild(notification);

      // Auto remove after 3 seconds
      setTimeout(() => {
        notification.classList.add("hide");
        setTimeout(() => {
          notification.remove();
        }, 300);
      }, 3000);

      // Add filter notification styles
      const style = document.createElement("style");
      style.textContent = `
                .filter-notification {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: #2ecc71;
                    color: white;
                    padding: 12px 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                    z-index: 1000;
                    transform: translateY(0);
                    opacity: 1;
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }
                
                .filter-notification.hide {
                    transform: translateY(30px);
                    opacity: 0;
                }
                
                .loading-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(255,255,255,0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                }
            `;
      document.head.appendChild(style);

      // In a real app, this would actually filter the content
      // For demo, we'll just shuffle the existing videos
      shuffleVideos();
    }, 1500);
  }

  // Shuffle videos for demo purposes
  function shuffleVideos() {
    const videosGrid = document.querySelector(".videos-grid");
    const videoCards = Array.from(videosGrid.querySelectorAll(".video-card"));

    // Fisher-Yates shuffle algorithm
    for (let i = videoCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [videoCards[i].innerHTML, videoCards[j].innerHTML] = [
        videoCards[j].innerHTML,
        videoCards[i].innerHTML,
      ];
    }

    // Reinitialize thumbnails
    initializeThumbnails();
  }

  // Create back to top button
  function createBackToTopButton() {
    const backToTopBtn = document.createElement("button");
    backToTopBtn.className = "back-to-top";
    backToTopBtn.innerHTML = "↑";
    document.body.appendChild(backToTopBtn);

    // Add styles
    const style = document.createElement("style");
    style.textContent = `
            .back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 40px;
                height: 40px;
                background-color: rgba(52, 152, 219, 0.8);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.3s ease, transform 0.3s ease;
                z-index: 90;
            }
            
            .back-to-top.visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
    document.head.appendChild(style);

    // Show/hide based on scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Check URL parameters for direct idea prompts
  function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get("filter");

    if (filterParam) {
      // Apply filter based on URL parameter
      const filterOptions = document.querySelectorAll(".option-select");
      filterOptions.forEach((option) => {
        if (
          option.previousElementSibling.textContent.trim().includes(filterParam)
        ) {
          option.value = filterParam;
        }
      });

      // Trigger filter button click
      document.querySelector(".filter-btn").click();
    }
  }

  // Run URL parameter check
  checkURLParams();
});

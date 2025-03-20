import navbar from "./navbar.js";
// Append Navbar For The Current Page
const nav_container = document.querySelector(".navbar");
// nav_container.style.backgroundColor = red;

// document
//   .querySelector(".searchUsersBtn")
//   .addEventListener("click", function () {
//     console.log("sadsad");
//     window.location.href = "../HTML/searchUsers.html";
//   });

if (nav_container) {
  nav_container.innerHTML = navbar;
}






// POP up Daily 
document.addEventListener("DOMContentLoaded", () => {
  const dailyIcon = document.getElementById("daily-icon");
  const dailyOverlay = document.getElementById("daily-overlay");
  const dailyPopup = document.getElementById("daily-popup");
  const closeDaily = document.getElementById("close-daily");
  const notificationIcon = document.getElementById("notification-icon");

  function openDailyPopup() {
    dailyOverlay.classList.remove("hidden");
    dailyPopup.classList.remove("hidden");
    setTimeout(() => {
      dailyOverlay.style.opacity = "1";
      dailyPopup.style.opacity = "1";
      dailyPopup.style.transform = "scale(1)";
    }, 10);
    
    // Hide notification icon when popup is opened
    notificationIcon.classList.add("hidden");
  }

  function closeDailyPopup() {
    dailyOverlay.style.opacity = "0";
    dailyPopup.style.opacity = "0";
    dailyPopup.style.transform = "scale(0.9)";
    setTimeout(() => {
      dailyOverlay.classList.add("hidden");
      dailyPopup.classList.add("hidden");
    }, 300);
  }

  dailyIcon.addEventListener("click", openDailyPopup);
  closeDaily.addEventListener("click", closeDailyPopup);

  // Close popup when clicking on the overlay
  dailyOverlay.addEventListener("click", (event) => {
    if (event.target === dailyOverlay) {
      closeDailyPopup();
    }
  });
});

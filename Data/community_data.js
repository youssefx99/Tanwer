// This script handles loading posts based on selected category
document.addEventListener('DOMContentLoaded', function() {
    // Get the category from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'all';
    
    // Update the category title display
    updateCategoryTitle(category);
    
    // Load posts from JSON file
    loadPostsByCategory(category);
    
    // Setup event listeners
    setupEventListeners(category);
  });
  
  // Update the category title in the header
  function updateCategoryTitle(category) {
    const categoryTitleElement = document.getElementById('categoryTitle');
    let categoryArabicName = '';
    
    switch(category) {
      case 'math':
        categoryArabicName = 'الرياضيات';
        break;
      case 'programming':
        categoryArabicName = 'البرمجة';
        break;
      case 'language':
        categoryArabicName = 'اللغات';
        break;
      case 'science':
        categoryArabicName = 'العلوم';
        break;
      default:
        categoryArabicName = 'جميع المجالات';
    }
    
    categoryTitleElement.textContent = categoryArabicName;
  }
  
  // Load posts based on selected category
  function loadPostsByCategory(category) {
    fetch('../Data/community_data.js')
      .then(response => response.json())
      .then(data => {
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.innerHTML = ''; // Clear existing posts
        
        let filteredPosts = data.posts;
        
        // Filter by category if not 'all'
        if (category !== 'all') {
          filteredPosts = data.posts.filter(post => post.category === category);
        }
        
        // If no posts found for this category
        if (filteredPosts.length === 0) {
          postsContainer.innerHTML = `<div class="no-posts">لا توجد منشورات في هذه الفئة حتى الآن. كن أول من ينشئ منشورًا!</div>`;
          return;
        }
        
        // Generate HTML for each post
        filteredPosts.forEach((post, index) => {
          const postElement = document.createElement('div');
          postElement.className = 'post1';
          postElement.id = `post${index + 1}`;
          
          let commentsHTML = '';
          post.comments.forEach(comment => {
            commentsHTML += `
              <div class="theComment">
                <h6 class="commentMaker">${comment.author}</h6>
                <p class="commmentContent">${comment.content}</p>
              </div>
            `;
          });
          
          postElement.innerHTML = `
            <div class="thePost">
              <h4 class="postMaker">${post.author}</h4>
              <h3 class="postTitle">${post.title}</h3>
              <h5 class="postContent">${post.content}</h5>
            </div>
            <div class="postComments">
              <div class="newPost">
                <input class="commentInputField" type="text" placeholder="أضف تعليقك هنا..." />
                <button class="newCommentBtn" data-post-id="${index}">تعليق</button>
              </div>
              ${commentsHTML}
            </div>
          `;
          
          postsContainer.appendChild(postElement);
        });
        
        // Setup comment buttons after posts are loaded
        setupCommentButtons();
      })
      .catch(error => {
        console.error('Error loading posts:', error);
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.innerHTML = `<div class="error">خطأ في تحميل المنشورات. يرجى المحاولة مرة أخرى.</div>`;
      });
  }
  
  // Setup comment buttons
  function setupCommentButtons() {
    const commentButtons = document.querySelectorAll('.newCommentBtn');
    commentButtons.forEach(button => {
      button.addEventListener('click', function() {
        const postId = this.getAttribute('data-post-id');
        const commentInput = this.parentElement.querySelector('.commentInputField');
        const commentText = commentInput.value.trim();
        
        if (commentText) {
          // Create new comment element
          const commentsContainer = this.parentElement.parentElement;
          const newComment = document.createElement('div');
          newComment.className = 'theComment';
          
          // Get user name (this would typically come from a login system)
          const userName = 'المستخدم الحالي'; // Placeholder
          
          newComment.innerHTML = `
            <h6 class="commentMaker">${userName}</h6>
            <p class="commmentContent">${commentText}</p>
          `;
          
          commentsContainer.appendChild(newComment);
          commentInput.value = ''; // Clear input
          
          // In a real app, you would save this to the database
        }
      });
    });
  }
  
  // Setup other event listeners
  function setupEventListeners(category) {
    // Create post button
    const createPostBtn = document.querySelector('.createPostBtn');
    const createPostPlace = document.querySelector('.createNewPostPlace');
    
    createPostBtn.addEventListener('click', function() {
      createPostPlace.style.display = 'block';
    });
    
    // Submit new post
    const submitPostBtn = document.querySelector('.CreateInPostBtn');
    submitPostBtn.addEventListener('click', function() {
      const titleInput = document.querySelector('.titlePostValue');
      const questionInput = document.querySelector('.questionPostValue');
      
      const title = titleInput.value.trim();
      const question = questionInput.value.trim();
      
      if (title && question) {
        // Create new post element
        const postsContainer = document.getElementById('postsContainer');
        const newPost = document.createElement('div');
        newPost.className = 'post1';
        
        // Get user name (this would typically come from a login system)
        const userName = 'المستخدم الحالي'; // Placeholder
        
        newPost.innerHTML = `
          <div class="thePost">
            <h4 class="postMaker">${userName}</h4>
            <h3 class="postTitle">${title}</h3>
            <h5 class="postContent">${question}</h5>
          </div>
          <div class="postComments">
            <div class="newPost">
              <input class="commentInputField" type="text" placeholder="أضف تعليقك هنا..." />
              <button class="newCommentBtn">تعليق</button>
            </div>
          </div>
        `;
        
        postsContainer.insertBefore(newPost, postsContainer.firstChild);
        
        // Clear inputs and hide form
        titleInput.value = '';
        questionInput.value = '';
        createPostPlace.style.display = 'none';
        
        // In a real app, you would save this to the database
      }
    });
  }
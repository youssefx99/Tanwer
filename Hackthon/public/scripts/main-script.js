document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const promptInput = document.querySelector('.prompt-input');
    const sendBtn = document.querySelector('.send-btn');
    const samplePrompts = document.querySelectorAll('.sample-prompt');
    const caseCards = document.querySelectorAll('.case-card');
    const optionSelects = document.querySelectorAll('.option-select');
    
    // Toggle sidebar
    openSidebarBtn.addEventListener('click', function() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close sidebar function
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    closeSidebarBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    
    // Sample prompts click
    samplePrompts.forEach(prompt => {
        prompt.addEventListener('click', function() {
            promptInput.value = this.textContent;
            promptInput.focus();
        });
    });
    
    // Case cards click - set related prompt
    const casePrompts = {
        '🎓': 'فيديو تعليمي عن تاريخ العالم العربي',
        '🏞️': 'مشهد طبيعي لجبال مغطاة بالثلوج وبحيرة',
        '📱': 'فيديو قصير لمنشور على انستجرام عن السفر',
        '🎬': 'مشهد سينمائي لغروب الشمس على شاطئ البحر',
        '🎨': 'رسوم متحركة لقصة قصيرة للأطفال',
        '🎵': 'فيديو موسيقي إبداعي مع مؤثرات بصرية'
    };
    
    caseCards.forEach(card => {
        card.addEventListener('click', function() {
            const icon = this.querySelector('.case-icon').textContent;
            if (casePrompts[icon]) {
                promptInput.value = casePrompts[icon];
                promptInput.focus();
            }
        });
    });
    
    // Video options button
    const videoOptionsBtn = document.querySelector('.video-actions .action-btn:first-child');
    videoOptionsBtn.addEventListener('click', function() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Handle sending prompt
    sendBtn.addEventListener('click', handleSendPrompt);
    promptInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSendPrompt();
        }
    });
    
    function handleSendPrompt() {
        const prompt = promptInput.value.trim();
        if (prompt) {
            // Show loading state
            const videoPreview = document.querySelector('.video-preview');
            videoPreview.innerHTML = `
                <div class="placeholder-box">
                    <div class="placeholder-text">جاري إنشاء الفيديو...</div>
                    <div style="margin-top: 20px;">
                        <div class="loading-spinner"></div>
                    </div>
                </div>
            `;
            
            // In a real app, you would send the prompt to your backend
            // For demo purposes, simulate loading and then show a placeholder
            setTimeout(() => {
                // This would be replaced with actual video generation result
                videoPreview.innerHTML = `
                    <div class="placeholder-box">
                        <div class="placeholder-icon">✅</div>
                        <div class="placeholder-text">تم إنشاء الفيديو بنجاح</div>
                        <div style="margin-top: 15px;">
                            <button class="action-btn primary">عرض الفيديو</button>
                        </div>
                    </div>
                `;
            }, 3000);
            
            // Clear input
            promptInput.value = '';
        }
    }
    
    // Handle option changes
    optionSelects.forEach(select => {
        select.addEventListener('change', function() {
            // In a real app, you would store these preferences
            console.log(`Changed ${this.previousElementSibling.textContent}: ${this.value}`);
        });
    });
    
    // Add loading spinner style dynamically
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-top-color: #3498db;
            margin: 0 auto;
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});
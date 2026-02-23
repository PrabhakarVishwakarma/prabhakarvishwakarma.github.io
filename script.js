document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Dark Mode Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const body = document.body;

    // Check saved preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // Toggle on click
    if(themeToggleBtn){
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- 2. Skills Filtering Logic ---
    const filterBtns = document.querySelectorAll('.skill-btn');
    const skillPills = document.querySelectorAll('.pill');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // Hide/Show pills
            skillPills.forEach(pill => {
                const pillCategory = pill.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === pillCategory) {
                    pill.style.display = 'flex';
                } else {
                    pill.style.display = 'none';
                }
            });
        });
    });

    // --- 3. Navigation Active State ---
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // --- 4. Show More/Less Logic ---
    const toggleAboutBtn = document.getElementById('toggle-about');
    const moreText = document.getElementById('more-text');
    let isExpanded = false;

    if(toggleAboutBtn && moreText) {
        toggleAboutBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            if (isExpanded) {
                moreText.classList.add('show');
                toggleAboutBtn.innerHTML = '<i class="fa-solid fa-align-left"></i> Show Less';
            } else {
                moreText.classList.remove('show');
                toggleAboutBtn.innerHTML = '<i class="fa-solid fa-align-left"></i> Show More';
            }
        });
    }
});
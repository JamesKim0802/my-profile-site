// ==================== Dark Mode Toggle ====================
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

// Toggle theme
themeToggleBtn.addEventListener('click', function() {
    // Toggle icons
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // Toggle dark mode
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// ==================== Navbar Scroll Effect ====================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// ==================== Active Navigation Link ====================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ==================== Smooth Scroll for Navigation Links ====================
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Offset for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// ==================== Mobile Menu Toggle ====================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// ==================== Scroll Animation (Intersection Observer) ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Optionally, stop observing after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with scroll-animate class
const animateElements = document.querySelectorAll('.scroll-animate');
animateElements.forEach(el => observer.observe(el));

// ==================== Email Copy Functionality ====================
const copyEmailBtn = document.getElementById('copy-email');
const copyToast = document.getElementById('copy-toast');
const email = 'rkdfuf89@gmail.com';

copyEmailBtn.addEventListener('click', async function() {
    try {
        // Try using the modern Clipboard API
        await navigator.clipboard.writeText(email);
        showCopyToast();
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            showCopyToast();
        } catch (e) {
            console.error('Failed to copy email:', e);
            alert('Failed to copy email. Please copy manually: ' + email);
        }

        document.body.removeChild(textarea);
    }
});

// Show copy success toast
function showCopyToast() {
    copyToast.classList.add('show');

    setTimeout(() => {
        copyToast.classList.remove('show');
    }, 3000);
}

// ==================== Scroll to Top on Page Load ====================
window.addEventListener('load', function() {
    window.scrollTo(0, 0);

    // Trigger initial active link update
    setTimeout(updateActiveNavLink, 100);
});

// ==================== Prevent Flash of Unstyled Content ====================
document.documentElement.style.visibility = 'visible';

// ==================== Performance: Debounce Scroll Handler ====================
let scrollTimeout;
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    // Clear existing timeout
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    // Use requestAnimationFrame for better performance
    scrollTimeout = window.requestAnimationFrame(function() {
        const currentScrollY = window.scrollY;

        // Only update if scroll position actually changed
        if (currentScrollY !== lastScrollY) {
            lastScrollY = currentScrollY;

            // Hide mobile menu on scroll
            if (!mobileMenu.classList.contains('hidden') && Math.abs(currentScrollY - lastScrollY) > 10) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
}, { passive: true });

// ==================== Accessibility: Keyboard Navigation ====================
// Allow Enter key to trigger click on interactive elements
document.querySelectorAll('.skill-card, .achievement-card, .stat-card').forEach(card => {
    card.setAttribute('tabindex', '0');

    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// ==================== Preload Critical Images ====================
// Preload profile image for better performance
const profileImg = new Image();
profileImg.src = 'assets/images/profile.png';

// ==================== Handle System Theme Preference ====================
// Listen for system theme changes (optional enhancement)
if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', function(e) {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.classList.add('dark');
                themeToggleDarkIcon.classList.add('hidden');
                themeToggleLightIcon.classList.remove('hidden');
            } else {
                document.documentElement.classList.remove('dark');
                themeToggleDarkIcon.classList.remove('hidden');
                themeToggleLightIcon.classList.add('hidden');
            }
        }
    });
}

// ==================== Easter Egg: Konami Code ====================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activated!
        document.body.style.animation = 'pulse 0.5s ease-in-out 3';

        // Show a fun message
        const toast = document.getElementById('copy-toast');
        const originalContent = toast.innerHTML;
        toast.innerHTML = '<span>🎉 GS그룹 화이팅! AI로 미래를 만들어갑니다!</span>';
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.innerHTML = originalContent;
            }, 300);
        }, 3000);

        konamiCode = [];
    }
});

// ==================== Log Development Info ====================
console.log('%c김강열 (James Kim) 프로필 사이트', 'font-size: 20px; font-weight: bold; color: #d4af37;');
console.log('%c송도 열병합발전소 운영팀 매니저 | AI TF 리더', 'font-size: 14px; color: #666;');
console.log('%cEmail: rkdfuf89@gmail.com', 'font-size: 12px; color: #999;');
console.log('%c⚡ Built with HTML, CSS, JavaScript, and ❤️', 'font-size: 12px; color: #1a1a1a;');

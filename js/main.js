// ===================================
// Mehar Film - Main JavaScript
// ===================================

// Header scroll effect
function initHeader() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .stagger-item');
  animatedElements.forEach(el => observer.observe(el));
}

// Gallery scroll functionality
function initGallery() {
  const galleries = document.querySelectorAll('.gallery-container');
  
  galleries.forEach(gallery => {
    const leftBtn = gallery.parentElement.querySelector('.gallery-arrow-left');
    const rightBtn = gallery.parentElement.querySelector('.gallery-arrow-right');
    
    if (leftBtn) {
      leftBtn.addEventListener('click', () => {
        gallery.scrollBy({
          left: -400,
          behavior: 'smooth'
        });
      });
    }
    
    if (rightBtn) {
      rightBtn.addEventListener('click', () => {
        gallery.scrollBy({
          left: 400,
          behavior: 'smooth'
        });
      });
    }
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);
    
    // Toggle menu
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      menuBtn.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initScrollAnimations();
  initGallery();
  initSmoothScroll();
  initMobileMenu();
  
  // Add page enter animation
  document.body.classList.add('page-enter');
});

// Utility function to format currency
function formatCurrency(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

// Utility function to create SVG icons
const icons = {
  location: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
  
  users: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`,
  
  currency: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
  
  check: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>`,
  
  phone: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>`,
  
  email: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
  
  arrowLeft: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7"></path></svg>`,
  
  arrowRight: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>`,
  
  arrowDown: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>`,
  
  menu: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>`
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { icons, formatCurrency };
}


// ============================================
// SUNULINK GLOBAL - JAVASCRIPT
// Interactions et carrousels
// ============================================

// Header scroll effect
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }

  // Set active nav link based on current page
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    try {
      // Handle both relative and absolute URLs
      let linkPath = link.getAttribute('href');
      if (linkPath.startsWith('http://') || linkPath.startsWith('https://')) {
        linkPath = new URL(link.href).pathname;
      }
      const linkPage = linkPath.split('/').pop() || 'index.html';
      
      if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    } catch (e) {
      // Fallback: simple string comparison
      const linkPage = link.getAttribute('href');
      if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    }
  });

  // Scroll to top button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  if (scrollToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });

    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Initialize all carousels
  initCarousels();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

  // Form validation and submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
      let isValid = true;
      
      inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#FF6B35';
        } else {
          input.style.borderColor = '';
        }
      });

      if (isValid) {
        // Show success message (in a real app, you'd send this to a server)
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
        contactForm.reset();
      } else {
        alert('Veuillez remplir tous les champs obligatoires.');
      }
    });
  }
});

// Carousel functionality
function initCarousels() {
  const carousels = document.querySelectorAll('.carousel-container');
  
  carousels.forEach(carousel => {
    const wrapper = carousel.querySelector('.carousel-wrapper');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-nav.prev');
    const nextBtn = carousel.querySelector('.carousel-nav.next');
    const dots = carousel.querySelectorAll('.carousel-dot');
    
    if (!wrapper || slides.length === 0) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Update carousel position
    function updateCarousel() {
      wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
    
    // Next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }
    
    // Previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }
    
    // Event listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', prevSlide);
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });
    
    // Auto-play (optional - uncomment to enable)
    // let autoPlayInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    // carousel.addEventListener('mouseenter', () => {
    //   clearInterval(autoPlayInterval);
    // });
    
    // carousel.addEventListener('mouseleave', () => {
    //   autoPlayInterval = setInterval(nextSlide, 5000);
    // });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
    
    carousel.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      
      const diffX = startX - currentX;
      const threshold = 50;
      
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    });
    
    // Initialize
    updateCarousel();
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements with animation classes
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.card:not(.value-card), .service-card, .gallery-item');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Initialize values section animations
  initValuesAnimations();
});

// Values Section - Enhanced Scroll Animations
function initValuesAnimations() {
  const valuesSection = document.querySelector('.values-section');
  if (!valuesSection) return;

  const valueCards = valuesSection.querySelectorAll('.value-card');
  if (valueCards.length === 0) return;

  // Options for the Intersection Observer
  const valuesObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  // Create observer for values section
  const valuesObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate each card with a stagger effect
        valueCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate');
          }, index * 150); // Stagger delay: 150ms between each card
        });
        
        // Unobserve after animation to prevent re-triggering
        valuesObserver.unobserve(entry.target);
      }
    });
  }, valuesObserverOptions);

  // Observe the values section
  valuesObserver.observe(valuesSection);
}




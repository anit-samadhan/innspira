/**
 * INNSPIRA HOSPITALITY LLP — Corporate Consultancy Prototype
 * Phase 1 Client Prototype Script
 * Pure Vanilla JavaScript (No Framework / No Tailwind dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // 2. Sticky Header Scroll Effect
  const header = document.getElementById('main-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Mobile Navigation Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.style.display === 'block';
      if (isOpen) {
        mobileMenu.style.display = 'none';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.style.display = 'block';
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      }

      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (!isOpen) {
          icon.setAttribute('data-lucide', 'x');
        } else {
          icon.setAttribute('data-lucide', 'menu');
        }
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
          lucide.createIcons();
        }
      }
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
          }
        }
      });
    });
  }

  // 4. Highlight Active Navigation Item
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 5. Hero Banner Slider (Home Page)
  const heroSlider = document.getElementById('hero-slider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const indicatorBars = document.querySelectorAll('.hero-indicator-bar');
    const slideNumberDisplay = document.getElementById('slider-current-num');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval = null;
    const slideDuration = 6000;

    const showSlide = (index) => {
      if (totalSlides === 0) return;
      currentSlide = (index + totalSlides) % totalSlides;

      slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      indicatorBars.forEach((bar, idx) => {
        if (idx === currentSlide) {
          bar.classList.add('active');
        } else {
          bar.classList.remove('active');
        }
      });

      if (slideNumberDisplay) {
        slideNumberDisplay.textContent = `0${currentSlide + 1}`;
      }
    };

    const startAutoSlide = () => {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, slideDuration);
    };

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        startAutoSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        startAutoSlide();
      });
    }

    indicatorBars.forEach((bar, idx) => {
      bar.addEventListener('click', () => {
        showSlide(idx);
        startAutoSlide();
      });
    });

    // Pause on hover
    heroSlider.addEventListener('mouseenter', stopAutoSlide);
    heroSlider.addEventListener('mouseleave', startAutoSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        showSlide(currentSlide - 1);
        startAutoSlide();
      } else if (e.key === 'ArrowRight') {
        showSlide(currentSlide + 1);
        startAutoSlide();
      }
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    heroSlider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSlider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        showSlide(currentSlide + 1);
        startAutoSlide();
      } else if (touchEndX - touchStartX > 50) {
        showSlide(currentSlide - 1);
        startAutoSlide();
      }
    }, { passive: true });

    // Initialize slider
    showSlide(0);
    startAutoSlide();
  }

  // 6. Client Profiles Accordion Interaction (Restin "Our Special Offer" Pattern)
  const serviceItems = document.querySelectorAll('.service-main-item');
  if (serviceItems.length > 0) {
    serviceItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        serviceItems.forEach((el) => el.classList.remove('active'));
        item.classList.add('active');
      });
      item.addEventListener('click', () => {
        serviceItems.forEach((el) => el.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }

  // 7. Contact Form Local Validation & Prototype Confirmation
  const contactForm = document.getElementById('enquiry-form');
  const formSuccessContainer = document.getElementById('form-success-container');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const clearErrors = () => {
        const errorElements = contactForm.querySelectorAll('.error-msg');
        errorElements.forEach(el => el.remove());
        const inputElements = contactForm.querySelectorAll('.has-error');
        inputElements.forEach(el => el.classList.remove('has-error'));
      };

      const showError = (fieldId, message) => {
        isValid = false;
        const field = document.getElementById(fieldId);
        if (field) {
          field.classList.add('has-error');
          const err = document.createElement('p');
          err.className = 'error-msg';
          err.style.color = '#DC2626';
          err.style.fontSize = '12px';
          err.style.marginTop = '4px';
          err.innerText = message;
          field.parentNode.appendChild(err);
        }
      };

      clearErrors();

      // Full Name Validation
      const fullName = document.getElementById('fullName');
      if (!fullName || !fullName.value.trim()) {
        showError('fullName', 'Full Name is required.');
      }

      // Email Address Validation
      const email = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !email.value.trim()) {
        showError('email', 'Email Address is required.');
      } else if (!emailRegex.test(email.value.trim())) {
        showError('email', 'Please provide a valid email address.');
      }

      // Phone Number Validation
      const phone = document.getElementById('phone');
      if (!phone || !phone.value.trim()) {
        showError('phone', 'Phone Number is required.');
      } else if (phone.value.trim().length < 7) {
        showError('phone', 'Please enter a valid telephone number.');
      }

      // Service Required Validation
      const serviceRequired = document.getElementById('serviceRequired');
      if (!serviceRequired || !serviceRequired.value.trim()) {
        showError('serviceRequired', 'Please select a required consulting service.');
      }

      // Message / Description Validation
      const message = document.getElementById('message');
      if (!message || !message.value.trim()) {
        showError('message', 'Message / Project Requirements is required.');
      } else if (message.value.trim().length < 15) {
        showError('message', 'Please provide at least 15 characters describing your requirements.');
      }

      if (isValid) {
        if (formSuccessContainer) {
          contactForm.style.display = 'none';
          formSuccessContainer.style.display = 'block';
        } else {
          alert('Thank you for your enquiry. Innspira Hospitality LLP will get back to you shortly.');
          contactForm.reset();
        }
      }
    });

    const resetFormBtn = document.getElementById('reset-form-btn');
    if (resetFormBtn && formSuccessContainer) {
      resetFormBtn.addEventListener('click', () => {
        contactForm.reset();
        formSuccessContainer.style.display = 'none';
        contactForm.style.display = 'block';
      });
    }
  }

  // 8. Back-to-Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

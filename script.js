// When the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Add scrolled class to navbar when scrolling
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      // Highlight active nav link based on scroll position
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Close mobile menu when a link is clicked
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const formElements = contactForm.elements;
        let isValid = true;
        
        for (let i = 0; i < formElements.length; i++) {
          if (formElements[i].hasAttribute('required') && !formElements[i].value) {
            isValid = false;
            formElements[i].classList.add('is-invalid');
          } else {
            formElements[i].classList.remove('is-invalid');
          }
        }
        
        if (isValid) {
          // In a real application, you would send the form data to a server
          // For this example, we'll just show a success message
          const formData = new FormData(contactForm);
          let formValues = {};
          
          for (let [key, value] of formData.entries()) {
            formValues[key] = value;
          }
          
          // Display success message
          contactForm.innerHTML = `
            <div class="alert alert-success" role="alert">
              <h4 class="alert-heading">Message Sent!</h4>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          `;
          
          // In a real application, you would reset the form after successful submission
          // contactForm.reset();

        }
      });
    }
    
    // Add animation on scroll
    function revealOnScroll() {
      const reveals = document.querySelectorAll('.card, .skill-item, .timeline-item, .contact-info');
      
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Set initial state for animations
    const animatedElements = document.querySelectorAll('.card, .skill-item, .timeline-item, .contact-info');
    animatedElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run the reveal function on load and scroll
    window.addEventListener('load', revealOnScroll);
    window.addEventListener('scroll', revealOnScroll);

    
  });
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


  // Optional: Add any additional JavaScript for project interactions
document.addEventListener('DOMContentLoaded', function() {
  // If you want to add any specific interactions for projects
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.classList.add('hover');
      });
      
      card.addEventListener('mouseleave', () => {
          card.classList.remove('hover');
      });
  });
});

    
    // Typewriter effect
    const typewriterElement = document.getElementById('typewriter-text');
    const phrases = [
      'Junior Full Stack Dev',
      'Microservices & Cloud Learner',
      'Java Spring Boot & React Enthusiast',
      'DevOps & CI/CD Explorer',
    ];
    
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = '';
    let isDeleting = false;
    let typewriterSpeed = 100;
    
    function typeEffect() {
        const currentText = phrases[phraseIndex];
        
        if (isDeleting) {
            currentPhrase = currentText.substring(0, letterIndex - 1);
            letterIndex--;
            typewriterSpeed = 50;
        } else {
            currentPhrase = currentText.substring(0, letterIndex + 1);
            letterIndex++;
            typewriterSpeed = 100;
        }
        
        typewriterElement.textContent = currentPhrase;
        
        if (!isDeleting && letterIndex === currentText.length) {
            isDeleting = true;
            typewriterSpeed = 1000; // Pause at the end
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typewriterSpeed = 500; // Pause before typing next phrase
        }
        
        setTimeout(typeEffect, typewriterSpeed);
    }
    
    typeEffect();


        // Project Filtering
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize project filters
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-item');
        
        // Filter projects when clicking on filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Show/hide projects based on filter
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.classList.remove('hide-project');
                        setTimeout(() => {
                            item.style.display = 'block';
                        }, 300);
                    } else {
                        item.classList.add('hide-project');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    
        // Enable image hover effects
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('.project-hover').style.opacity = '1';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.project-hover').style.opacity = '0';
            });
        });
    });

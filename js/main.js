document.addEventListener('DOMContentLoaded', function() {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        gsap.to(cursorFollower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.6,
            ease: 'power3.out'
        });
    });
    
    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .nav-link, .social-link, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax effect for background layers
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    parallaxLayers.forEach(layer => {
        const depth = parseFloat(layer.getAttribute('data-depth'));
        
        gsap.to(layer, {
            y: (i, target) => -ScrollTrigger.maxScroll(window) * depth,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-container",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });
    });
    
    // Hero section animation
    gsap.from('.hero-title span', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-buttons a', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-image .image-container', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        delay: 0.4,
        ease: 'elastic.out(1, 0.5)'
    });
    
    gsap.from('.hero-image .shape', {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });
    
    // Section animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.from(section.querySelectorAll('h2, .section-divider'), {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
        
        gsap.from(section.querySelectorAll('h3, p, .btn'), {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-bar .progress-fill');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        gsap.to(bar, {
            width: width + '%',
            duration: 1.5,
            scrollTrigger: {
                trigger: bar.parentElement.parentElement,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, i) => {
        gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Form input animation
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                boxShadow: '0 0 0 3px rgba(108, 99, 255, 0.3)',
                duration: 0.3
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                boxShadow: 'none',
                duration: 0.3
            });
        });
    });
    
    // Animate scroll indicator
    gsap.to('.scroll-indicator .arrow', {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    // Scroll to top button
    const scrollToTop = document.createElement('div');
    scrollToTop.className = 'scroll-to-top';
    scrollToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTop);
    
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTop.classList.add('show');
        } else {
            scrollToTop.classList.remove('show');
        }
    });
    
    // Add styles for scroll to top button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 3rem;
            right: 3rem;
            width: 5rem;
            height: 5rem;
            background-color: ${getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || '#6c63ff'};
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }
        
        .scroll-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top i {
            font-size: 2rem;
        }
    `;
    document.head.appendChild(style);
});
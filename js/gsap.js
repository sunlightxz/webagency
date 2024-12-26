document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

  // Make sure GSAP is loaded
  if (typeof gsap === "undefined") {
    console.error("GSAP is not loaded!");
    return;
  }

  // Set initial positions for the floating elements
  const spans = document.querySelectorAll(".groupx span");
  const paperBall = document.querySelector(".groupx img");
  const imagesection2 = document.querySelector("#image-section2");

  const contentElements = {
    topText: document.querySelector(".font-manrope.text-primary"),
    logo: document.querySelector('img[src*="heroLogo"]'),
    heading: document.querySelector("h1"),
    subText: document.querySelector(".subtext-hero"),
    buttons: document.querySelectorAll(".flex.flex-col.sm\\:flex-row a"),
  };

  // Initialize floating elements positions
  spans.forEach((span, index) => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    gsap.set(span, {
      x: randomX,
      y: randomY,
      opacity: 0,
      scale: 0,
    });
  });

  // Set initial states
  gsap.set(paperBall, { opacity: 0, scale: 0, rotation: -180 });
  gsap.set(
    [
      contentElements.topText,
      contentElements.logo,
      contentElements.heading,
      contentElements.subText,
      contentElements.buttons,
    ],
    { opacity: 0, y: 30 }
  );

  // Create main timeline
  const mainTl = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  // Animate floating elements
  spans.forEach((span, index) => {
    mainTl.to(
      span,
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: index * 0.2,
      },
      index * 0.1
    );

    // Add continuous floating animation
    gsap.to(span, {
      y: `random(-100, 100)`,
      x: `random(-100, 100)`,
      rotation: `random(-180, 180)`,
      duration: `random(10, 20)`,
      repeat: -1,
      yoyo: true,
      ease: "none",
      delay: index * 0.5,
    });
  });

  // Animate paper ball
  mainTl.to(
    paperBall,
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
    },
    0.5
  );

  // Add continuous floating animation to paper ball
  gsap.to(paperBall, {
    y: "random(-30, 30)",
    x: "random(-30, 30)",
    rotation: "random(-15, 15)",
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Animate content elements
  mainTl
    .to(contentElements.topText, { opacity: 1, y: 0, duration: 0.8 }, 1)
    .to(contentElements.logo, { opacity: 1, y: 0, duration: 0.8 }, 1.2)
    .to(contentElements.heading, { opacity: 1, y: 0, duration: 0.8 }, 1.4)
    .to(contentElements.subText, { opacity: 1, y: 0, duration: 0.8 }, 1.6)
    .to(
      contentElements.buttons,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      },
      1.8
    );

  // Add hover animations to buttons
  contentElements.buttons.forEach((button) => {
    const arrow = button.querySelector("svg");

    button.addEventListener("mouseenter", () => {
      gsap.to(arrow, {
        x: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    });
  });

});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Create a timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#image-section >.containerx",
        start: "top center",
        end: "bottom bottom",
        scrub: 2,
        toggleActions: "play reverse play reverse",
      },
    });
  
    // Add the upward movement animation
    tl.to("#image-section2", {
      y: -50, // Adjust the value as needed for the upward movement
      duration: 1, // Duration of the upward movement
      ease: "power1.out",
    });
  
    // Add the main animation
    tl.to("#image-section2", {
      clipPath: "circle(100% at 50% 50%)",
      duration: 2, // Duration of the main animation
      ease: "power1.out",
    });
  });
  

  

  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".kkk",
      { opacity: 0, x: -100 }, // Start values
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        backgroundPosition: "-200px -200px", // End values
        scrollTrigger: {
          trigger: ".kkk",
          start: "top 80%",
          end: "bottom 20%", // Define the animation duration based on the scroll range
          scrub: true, // Allows the animation to follow the scroll
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      ".kkks",
      { opacity: 0, x: -300, }, // Start values
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        backgroundPosition: "200px 200px", // End values
        scrollTrigger: {
          trigger: ".kkks",
          start: "top 80%",
          end: "bottom 20%", // Define the animation duration based on the scroll range
          scrub: true, // Allows the animation to follow the scroll
          toggleActions: "play none none none"
        }
      }
    );

  // Main content animation - triggers once when in viewport
  gsap.from(".seo-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".seo-content",
          start: "top 80%", 
          toggleActions: "play none none none", 
          once: true 
      }
  });

  // Button hover animation
  const button = document.querySelector('a[href="#consultation"]');
  button.addEventListener('mouseenter', () => {
      gsap.to(button, {
          scale: 1.05,
          duration: 0.3
      });
  });
  
  button.addEventListener('mouseleave', () => {
      gsap.to(button, {
          scale: 1,
          duration: 0.3
      });
  });
});



//about section
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const contimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-content",
      start: "top bottom",
      end: "bottom bottom-=100",
      scrub: 2,
      // Removed pin: true to prevent the pinning effect
    },
  });

  // Content animations remain the same
  contimeline
    .from("#about-subhead", {
      opacity: 0,
      x: -100,
      duration: 0.5,
    })
    .from("#about-title", {
      opacity: 0,
      x: -100,
      duration: 0.5,
    })
    .from("#about-p", {
      opacity: 0,
      x: -100,
      duration: 1,
    }, "-=0.3")
    .from("#about-check", {
      opacity: 0,
      x: -100,
      duration: 1,
    }, "-=0.3")
    .from("#about-btn", {
      opacity: 0,
      x: -100,
      duration: 1,
    }, "-=1.3");

  const visualTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-visual",
      start: "top bottom",
      end: "bottom bottom-=100",
      scrub: 2,
      // Removed pin: true to prevent the pinning effect
    },
  });

  visualTimeline
    .from("#lg-about", {
      scale: 0.3,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
    .from(
      "#img-about",
      {
        scale: 0.3,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
        x: -200,
      }
    )
    .from(
      "#smimg-about",
      {
        scale: 0.3,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
        x: -100,
      },
      "-=1"
    );
});

//service section
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

    // Header animations
    const servicesHeaderTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      }
    });

    servicesHeaderTl
      .from('.services-section .subhead', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      })
      .from('.services-section .services-header h2', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")
      .from('.services-section .services-header p', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3");

    // Cards animation on scroll
    const cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-swiper",
        start: "top 90%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate all cards initially
    cardsTimeline
    
 
    .from(".slides .service-icon", {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    },)
    .from(".slides h3", {
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out"
    }, "-=0.2")
    .from(".slides p", {
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out"
    }, "-=0.2")
    .from(".slides .card-arrow", {
     
      opacity: 0,
      duration: 0.4,
      ease: "power3.out"
    }, "-=0.2")
    .from(".nvbtn", {
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out"
    }, "-=0.2")


    // Nav buttons animation
    

    
});
  


//course section

document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);
  const courseCards = document.querySelectorAll('.course-card');
  
  // Create a stagger effect for the cards
  gsap.from(courseCards, {
    scrollTrigger: {
      trigger: ".courses-grid",
      start: "top 80%", // Start animation when the top of the grid hits 80% of viewport
      toggleActions: "play none none reverse"
    },
    duration: 1,
    opacity: 0,
    stagger: {
      amount: 0.8, // Total time to stagger all animations
      from: "start"
    },
    ease: "power2.out"
  });

  // Animate the header section
  gsap.from('.courses-section .subhead', {
    scrollTrigger: {
      trigger: ".courses-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: -30,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from('.courses-section h1', {
    scrollTrigger: {
      trigger: ".courses-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    delay: 0.2,
    ease: "power2.out"
  });

  // Animate the Get Started button
  gsap.from('.courses-section a[href="#services"]', {
    scrollTrigger: {
      trigger: ".courses-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 0.8,
    x: 30,
    delay: 0.3,
    ease: "power2.out"
  });
});



//vision section
document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  // GSAP Animations only for larger screens (larger than 768px)
  if (window.innerWidth >= 768) {  // md breakpoint (768px)
    // Animation for card 2
     // Timeline for card 2
  gsap.to('.award-card.two', {
    scrollTrigger: {
      trigger: '.award-section',
      start: 'top-=5% top', // Starts at the top of the section
      end: '60% bottom', // Ends halfway through the section
      scrub: 1,
    },
    x: '-105.2%', // Moves the card to the left
    ease: 'none',
  });

  // Timeline for card 3
  gsap.to('.award-card.three', {
    scrollTrigger: {
      trigger: '.award-section',
      start: 'top top', // Starts when card 2 animation is halfway done
      end: 'bottom bottom', // Ends at the bottom of the section
      scrub: 1,
    },
    x: '-205.5%', // Moves the card further to the left
    ease: 'none',
  });
  }
});


//vision 2
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

    // Header animations
    const visionHeaderTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vision-section",
        start: "top 80%",
        end: "top 20%",
      }
    });

    visionHeaderTl
      .from('.vision-section .subhead', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      })
      .from('.vision-section .visionx-header h2', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")
      .from('.vision-section .visionx-header p', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3");

   
});



//nam nam
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animation for the left section (image + notification)
  gsap.from("#left-section", {
    scrollTrigger: {
      trigger: "#how-it-works",
      start: "top 80%", // Animation triggers when the section enters 80% of the viewport
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
    x: -100, // Start position
    opacity: 0, // Start with invisible
    duration: 1.3,
    ease: "power2.out",
  });
  
  // Animation for the heading
  gsap.from("#main-heading", {
    scrollTrigger: {
      trigger: "#main-heading",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });
  
  // Animation for each step card
  gsap.from(".step-card", {
    scrollTrigger: {
      trigger: "#steps-container",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2, // Delay between each card
    ease: "power2.out",
  });
  gsap.from("#notification-box", {
    scrollTrigger: {
      trigger: "#how-it-works",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    x: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2, // Delay between each card
    ease: "power2.out",
    scale: 0.4 ,
  });
});


//faq

document.addEventListener("DOMContentLoaded",()=> {
  // Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// FAQ Section Animation
gsap.from("#faq-heading", {
  scrollTrigger: {
    trigger: "#faq-section",
    start: "top 80%", // Animation triggers when the section enters 80% of the viewport
    toggleActions: "play none none reverse",
  },
  y: -50, // Slides down
  opacity: 0, // Starts invisible
  duration: 1,
  ease: "power2.out",
});

gsap.from("#faq-container", {
  scrollTrigger: {
    trigger: "#faq-section",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  x: -100, // Slides in from the left
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

gsap.from("#faq-image img", {
  scrollTrigger: {
    trigger: "#faq-section",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  x: 100, // Slides in from the right
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
  delay: 0.3, // Slight delay to sync with the content
});

})

//contact

document.addEventListener("DOMContentLoaded",()=> {
  // Ensure GSAP and ScrollTrigger are loaded
// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Stars Animation
gsap.from(".stars svg", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%", // Trigger when the section is 80% in the viewport
    toggleActions: "play none none reverse",
  },
  rotate: -15, // Rotates slightly
  opacity: 0, // Starts invisible
  duration: 1,
  ease: "power2.out",
});

// "Let's Collaborate" Heading Animation
gsap.from(".contact-section h3", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: 30, // Slides in from below
  opacity: 0, // Starts invisible
  duration: 1.2,
  ease: "power2.out",
});

// Main Heading Animation
gsap.from(".contact-section h2", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  scale: 0.9, // Slightly scaled down
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

})




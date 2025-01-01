document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

  // Make sure GSAP is loaded
  if (typeof gsap === "undefined") {
    console.error("GSAP is not loaded!");
    return;
  }



  const contentElements = {
    topText: document.querySelector(".font-manrope.text-primary"),
    logo: document.querySelector('img[src*="heroLogo"]'),
    heading: document.querySelector("h1"),
    subText: document.querySelector(".subtext-hero"),
    buttons: document.querySelectorAll(".flex.flex-col.sm\\:flex-row a"),
  };


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
  
    // Quick fade-in to ensure visibility
    gsap.fromTo(".services-section", { opacity: 0 }, { opacity: 1, duration: 0.3 });
  
    // Header animations
    const servicesHeaderTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 90%",
        end: "top 10%",
        toggleActions: "play none none reverse",
      },
    });
  
    servicesHeaderTl
      .from(".services-section .subhead, .services-header h2, .services-header p", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
      });
  
    // Section scaling animation
    const sectionScaleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 90%",
        end: "top top",
        scrub: 2,
      },
    });
  
 
  
   
    
});
//vision section
document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  // GSAP Animations only for larger screens (larger than 768px)
  if (window.innerWidth >= 768) {  // md breakpoint (768px)
      // Initial section animation with background effect
      const sectionTL = gsap.timeline({
          scrollTrigger: {
              trigger: '.award-section',
              start: 'top 80%',
              end: 'bottom center',
              toggleActions: "play none none reverse"
          }
      });

      sectionTL
          .from('.award-section', {
              opacity: 0,
              duration: 1,
              ease: "power3.out"
          })
          .from('.award-section .bg-gradient', {
              opacity: 0,
              scale: 1.2,
              duration: 1.5,
              ease: "power2.out"
          }, "-=0.5");

      // Enhanced animation for card 1
      gsap.from('.award-card.one', {
          scrollTrigger: {
              trigger: '.award-section',
              start: 'top 70%',
              end: 'bottom center',
              toggleActions: "play none none reverse"
          },
          opacity: 0,
          x: -100,
          y: 50,
          rotation: -5,
          duration: 1.2,
          ease: "back.out(1.7)"
      });

      // Enhanced animation for card 2
      gsap.to('.award-card.two', {
          scrollTrigger: {
              trigger: '.award-section',
              start: 'top-=5% top',
              end: '60% bottom',
              scrub: 1,
          },
          x: '-105.2%',
          rotation: 2,
          ease: 'none',
      });

      // Enhanced animation for card 3
      gsap.to('.award-card.three', {
          scrollTrigger: {
              trigger: '.award-section',
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1,
          },
          x: '-205.5%',
          rotation: -2,
          ease: 'none',
      });

      // Enhanced hover animations for award cards
      document.querySelectorAll('.award-card').forEach(card => {
          const cardContent = card.querySelectorAll('h3, p, img, svg');
          
          card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                  y: -15,
                  scale: 1.03,
                  rotation: 0,
                  duration: 0.4,
                  ease: "power2.out",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              });

              gsap.to(cardContent, {
                  y: -5,
                  duration: 0.3,
                  stagger: 0.05,
                  ease: "power2.out"
              });
          });

          card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                  y: 0,
                  scale: 1,
                  rotation: card.classList.contains('two') ? 2 : 
                           card.classList.contains('three') ? -2 : 0,
                  duration: 0.4,
                  ease: "power2.inOut",
                  boxShadow: "0 0 0 rgba(0,0,0,0)"
              });

              gsap.to(cardContent, {
                  y: 0,
                  duration: 0.3,
                  stagger: 0.02,
                  ease: "power2.inOut"
              });
          });
      });

      // Enhanced content animations
      gsap.from('.award-card h3', {
          scrollTrigger: {
              trigger: '.award-section',
              start: 'top 70%',
              toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
      });

      gsap.from('.award-card p', {
          scrollTrigger: {
              trigger: '.award-section',
              start: 'top 70%',
              toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out"
      });

      // Enhanced icon animations
      gsap.from('.award-card img, .award-card svg', {
          scrollTrigger: {
              trigger: '.award-section',
              start: 'top 70%',
              toggleActions: "play none none reverse"
          },
          opacity: 0,
          scale: 0,
          rotation: 180,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.7)"
      });

  } else {
      // Enhanced mobile animations
      const mobileTL = gsap.timeline({
          scrollTrigger: {
              trigger: '.award-section',
              start: 'top 80%',
              toggleActions: "play none none reverse"
          }
      });

      mobileTL
          .from('.award-section', {
              opacity: 0,
              duration: 0.8
          })
          .from('.award-card', {
              opacity: 0,
              y: 50,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out"
          })
          .from('.award-card img, .award-card svg', {
              opacity: 0,
              scale: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)"
          }, "-=0.4")
          .from('.award-card h3, .award-card p', {
              opacity: 0,
              y: 20,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out"
          }, "-=0.4");
  }
  const visionTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".award-section",
        start: "top 70%",
        // markers: true, // Enable for debugging
    }
});

// Animate the left side content
visionTimeline
    .from(".award-content .subhead", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    })
    .from(".award-content h1", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
    }, "-=0.7")
    .from(".award-content p", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.7")
    .from(".award-content button", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5");

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
gsap.from("#step-1", {
  scrollTrigger: {
    trigger: "#steps-container",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2, // Delay between each card
  ease: "power2.out",
});
gsap.from("#step-2", {
  scrollTrigger: {
    trigger: "#steps-container",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
  y: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.2, // Delay between each card
  ease: "power2.out",
});
gsap.from("#step-3", {
  scrollTrigger: {
    trigger: "#steps-container",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
  y: -100,
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





//single

document.addEventListener("DOMContentLoaded", () => {
  // Create a timeline for the hero section
  const heroTimeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" }
  });

  // Hero section animations
  heroTimeline
      .from(".bg-primary", {
          opacity: 0,
          y: 50,
          duration: 1.2
      })
      .from(".bg-primary h1", {
          opacity: 0,
          y: 30,
          duration: 1
      }, "-=0.8")
      .from(".bg-primary p", {
          opacity: 0,
          y: 20,
          duration: 1
      }, "-=0.8");

  // Main content animations
  gsap.from(".main-image", {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      scrollTrigger: {
          trigger: ".main-image",
          start: "top 80%",
      }
  });

  // Tabs animation
  gsap.from(".tab-btn", {
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
          trigger: ".tab-btn",
          start: "top 80%",
      }
  });

  // Service cards animation
  gsap.from(".sservice-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
          trigger: ".sservice-card",
          start: "top 80%",
      }
  });

  // Tab content animation
  function animateTabContent(tabId) {
      const content = document.querySelector(`#${tabId}`);
      if (content) {
          gsap.from(content, {
              opacity: 0,
              y: 20,
              duration: 0.5,
              ease: "power2.out"
          });
      }
  }

  // Add click listeners to tabs for content animation
  document.querySelectorAll('.tab-btn').forEach(button => {
      button.addEventListener('click', (e) => {
          const tabId = e.target.getAttribute('data-tab');
          animateTabContent(tabId);
      });
  });
});




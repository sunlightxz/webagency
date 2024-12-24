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




// Ensure you include ScrollTrigger and GSAP libraries

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const contimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 2,
      markers :true ,
    },
  });

  // Animate each `content-section` sequentially
  contimeline
  .from("#about-subhead", {
    opacity: 0,
    x: -100,
    duration: 1,
  })
    .from("#about-title", {
      opacity: 0,
      x: -100,
      duration: 1,
    })
    .from("#about-p", {
      opacity: 0,
      x: -100,
      duration: 1,
    }, "-=0.3") // Starts this animation slightly earlier
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
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: true,
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
        x: -200 ,
      } // Overlap the animations slightly
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
      "-=0.8"
    );
});

  




  // Add hover animation for button
  const button = document.querySelector('button');
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

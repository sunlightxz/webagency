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
    subText: document.querySelector(".text-lg.md\\:text-xl"),
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
  
// utils/gsapAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateSlideUpOnScroll = (triggerElement, stagger = 0.2) => {
  const elements = triggerElement.querySelectorAll(".slide-up-text");

  elements.forEach((el, i) => {
    gsap.fromTo(
      el,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: i * stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};
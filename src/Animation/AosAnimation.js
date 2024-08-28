// src/animations/aosAnimations.js
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file

export const initAOS = (ofset , delay , duration) => {
  AOS.init({
    offset: ofset,
    delay : delay,
    duration: duration,
    
  });
};

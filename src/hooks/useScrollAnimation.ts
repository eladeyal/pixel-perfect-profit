
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('revealed');
        }
      });
    };
    
    // Initial check for elements already in view
    setTimeout(animateElements, 100);
    
    // Add scroll listener
    window.addEventListener('scroll', animateElements);
    
    // Cleanup
    return () => window.removeEventListener('scroll', animateElements);
  }, []);
};

export default useScrollAnimation;

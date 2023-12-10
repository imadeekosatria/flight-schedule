"use client"
import { useState, useEffect } from 'react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled down by a certain amount (e.g., 200 pixels)
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: animated smooth scroll
    });
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div>
      {isVisible && (
        <button className="fixed bottom-5 right-8 w-16 h-16 flex justify-center items-center bg-slate-800 shadow-2xl z-40 rounded-full" onClick={scrollToTop}>
          <box-icon name='chevron-up' color="#7088f1" size='lg'></box-icon>
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;

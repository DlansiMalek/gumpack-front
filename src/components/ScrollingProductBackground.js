import React, { useState, useEffect } from 'react';

const ScrollingProductBackground = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / scrollHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // First image is visible from 0% to 50% scroll, fades out 40-60%
  // Second image is visible from 50% to 100% scroll, fades in 40-60%
  const firstImageOpacity = scrollProgress < 0.4 ? 0.04 : 
                            scrollProgress > 0.6 ? 0 : 
                            0.04 * (1 - (scrollProgress - 0.4) / 0.2);

  const secondImageOpacity = scrollProgress < 0.4 ? 0 : 
                             scrollProgress > 0.6 ? 0.04 : 
                             0.04 * ((scrollProgress - 0.4) / 0.2);

  return (
    <>
      {/* First product image - etiquette.png */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: firstImageOpacity,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <img
          src="/etiquette.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Second product image - etiverbrun.png */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: secondImageOpacity,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <img
          src="/etiverbrun.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            mixBlendMode: 'multiply',
          }}
        />
      </div>
    </>
  );
};

export default ScrollingProductBackground;

import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [rotation, setRotation] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scale, setScale] = useState(0.5);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [writingMode, setWritingMode] = useState('horizontal-rl');
  const [resizeKey, setResizeKey] = useState(0); // Add a state to track the resize

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolling(scrollY > 0);

      // Update rotation, X-axis position, and scale
      const newRotation = scrollY % 360;
      const newPositionX = scrollY * 0.2;
      const newScale = Math.min(0.5 + scrollY / 500, 1);

      setRotation(newRotation);
      setPositionX(newPositionX);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth <= 768;
      setIsSmallScreen(isSmall);
      setWritingMode(isSmall ? 'vertical-rl' : 'horizontal-rl');
      
      // Change the resizeKey to trigger remount
      setResizeKey(prevKey => prevKey + 1); // Increment to trigger remount
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = {
    backgroundColor: '#CD4633',
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/aa.svg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
  };

  return (
    <div
      key={resizeKey} // Use the resizeKey to remount the component
      className="container-fluid w-full py-5 flex flex-col justify-center items-center min-h-screen relative overflow-hidden"
      style={style}
    >
      <div
        className="text-center py-0 flex flex-col justify-center items-center z-10"
        style={{
            marginTop:'-90px',
          position: 'absolute',
          zIndex: 12,
        }}
      >
        <h1 className="font-bold text-7xl sm:text-9xl md:text-[10rem] text-[#F5E8DD] mb-4">
          PIZZA
        </h1>
        <h1 className="font-bold text-7xl sm:text-9xl md:text-[10rem] text-[#F5E8DD] mb-4 mt-[-30px] sm:mt-[-60px]">
          DI MARCO
        </h1>
        <h3 className="font-medium text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-[#F5E8DD] mt-[-25px] sm:mt-[-40px]">
          FROM ITALY WITH LOVE
        </h3>
      </div>

      <div
        style={{
          display: isScrolling ? 'block' : 'none',
          position: 'absolute',
          top: '30px',
          right: `${-10 + positionX}px`,
          transform: `rotate(${rotation}deg) scale(${scale})`,
          zIndex: 10,
        }}
      >
        <img
          className=" rounded-lg hidden sm:block"
          src={`${process.env.PUBLIC_URL}/images/loader3.webp`}
          alt="Top Pizza"
          style={{
            maxHeight: '300px',
            width: 'auto',
          }}
        />
      </div>

      {/* Rotated Bottom Image */}
      <div
        style={{
          display: isScrolling ? 'block' : 'none',
          position: 'absolute',
          bottom: '-14px',
          left: `${-10 + positionX}px`,
          transform: `rotate(${-rotation}deg) scale(${scale})`,
          zIndex: 10,
        }}
      >
        <img
          className=" rounded-lg hidden sm:block"
          src={`${process.env.PUBLIC_URL}/images/loader3.webp`}
          alt="Bottom Pizza"
          style={{
            maxHeight: '300px',
            width: 'auto',
          }}
        />
      </div>

      {/* Vertical Text on Left */}
      <div
        className="absolute sm:left-0  sm:top-1/2 top-120 transform -translate-y-1/2 -rotate-90 text-black font-bold text-sm hidden sm:block md:text-3xl tracking-widest"
        style={{ writingMode: writingMode }}
      >
        FROM 12:00 PM EVERYDAY
      </div>
    </div>
  );
}

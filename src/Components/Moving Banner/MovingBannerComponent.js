import React, { useEffect, useState } from "react";

const MovingBanner = ({Content}) => {
  const [translateX, setTranslateX] = useState(0);
  const speed = 0.2; // Speed of scrolling
  const contentWidth = 100; // Width of the content in viewport units (vw)

  // Handle animation of the content
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => prev - speed); // Move content to the left
    }, 14); // Roughly 60 FPS for smooth animation

    return () => clearInterval(interval);
  }, []);

  // Reset translateX when content has moved out of view
  useEffect(() => {
    if (translateX <= -contentWidth) {
      setTranslateX(contentWidth); // Reset to the right edge of the container
    }
  }, [translateX]);

  return (
    <div
      className="min-h-32"
      style={{
        position: "scroll",
        overflow: "hidden",
        zIndex: 10,
        backgroundColor: "#f4e9dd",
        color: "black",
        fontFamily: "Rubik, sans-serif",
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: "1.25rem",
        boxSizing: "border-box",
        borderTop: "8px solid #000",
        borderBottom: "8px solid #000",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/divider.png)`,
      }}
    >
      <div
        style={{
          display: "flex",
          transform: `translateX(${translateX}vw)`,
          willChange: "transform",
          height: "100%",
        }}
        className="loop-content-wrapper flex flex-row justify-between min-h-32"
      >
        {/* Banner Content */}
        <div
          className="w-full sm:w-1/3 border-x-8 border-black min-h-32 text-center flex flex-row items-center justify-center text-2xl sm:text-3xl font-extrabold"
          style={{
            background: "#F5E8DD",
            padding: "0 1rem",
          }}
        >
          <div className="divider-text">{Content}</div>
        </div>
        {/* Banner Content */}
        {/* <div
          className="w-full sm:w-1/3 border-x-8 border-black min-h-32 text-center flex flex-row items-center justify-center text-2xl sm:text-3xl font-extrabold opacity-0 sm:opacity-100"
          style={{
            background: "#F5E8DD",
            padding: "0 1rem",
          }}
        >
          <div className="divider-text">Slice to meet you!</div>
        </div> */}
      </div>
    </div>
  );
};

export default MovingBanner;

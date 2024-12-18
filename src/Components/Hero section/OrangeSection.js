import React, { useEffect, useState } from "react";

export default function OrangeSectionComponent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateTop = (baseTop) => {
    const numericBaseTop = parseFloat(baseTop); 
    return `${numericBaseTop - scrollY * 0.5}px`;
  };

  const sectionStyle = {
    backgroundColor: "#CD4633",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bb.png)`,
    backgroundSize: "5%",
    backgroundPosition: "start",
    backgroundAttachment: "fixed",
  };

  const contentStyle = {
    backgroundColor: "#CD4633",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/star.svg)`,
    backgroundSize: "200%",
    backgroundPosition: "680% 50%",
    backgroundAttachment: "fixed",
    position: "relative", 
  };

  return (
    <section
      className="h-[42rem] container-fluid flex flex-col justify-center items-center text-start py-10"
      style={sectionStyle}
    >
      <div
        className="text-start container h-full border-4 border-black flex flex-col justify-start items-start p-10 overflow-hidden"
        style={contentStyle}
      >
        <h1
          className="text-6xl sm:text-6xl font-extrabold w-full sm:w-1/3"
          style={{ color: "#F5E8DD" }}
        >
          I FOLLOWED MY HEART AND IT LED ME TO PIZZA
        </h1>
        <p className="font-bold sm:w-1/3 w-full mt-2 sm:text-xl text-md">
          Praesent eget aliquam elit. Nullam lobortis eleifend massa, eget
          facilisis velit posuere quis. Suspendisse quis quam vel eros iaculis
          efficitur at eu libero. Donec quis mattis mauris, sed ultricies dui.
          Mauris pharetra enim eget egestas luctus.
        </p>
        <p className="font-bold sm:w-1/3 w-full mt-2 sm:text-xl text-md">
          In bibendum nunc non sapien gravida volutpat tristique luctus augue.
          Donec ut faucibus erat. Mauris ac nibh mollis, dapibus mauris cursus,
          bibendum quam. Nulla facilisi.
        </p>

        <img
          style={{
            top: calculateTop("720"),
            right: "30px",
            position: "absolute", 
          }}
          className="scroll-image hidden-right border-2 w-48 h-auto border-black rounded-lg img-animation hidden sm:block"
          src={`${process.env.PUBLIC_URL}/images/bw1.webp`}
          alt="Example image 1"
        />
        <img
          style={{
            top: calculateTop("850"),
            right: "250px",
            position: "absolute", // Positioned relative to the parent div
          }}
          className="scroll-image hidden-right border-2 w-48 border-black rounded-lg img-animation hidden sm:block"
          src={`${process.env.PUBLIC_URL}/images/bw2.webp`}
          alt="Example image 2"
        />
        <img
          style={{
            top: calculateTop("1050"),
            right: "30px",
            position: "absolute", // Positioned relative to the parent div
          }}
          className="scroll-image hidden-right border-2 w-48 border-black rounded-lg img-animation hidden sm:block"
          src={`${process.env.PUBLIC_URL}/images/bw3.webp`}
          alt="Example image 3"
        />
      </div>
    </section>
  );
}

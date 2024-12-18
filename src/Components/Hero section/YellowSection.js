import React, { useState, useEffect, useContext } from "react";
import PizzaContext from "../../Contexts/PizzaContext";
import Typed from "typed.js";
import FoodCard from "./FoodCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function YellowSectionComponent({ setOrderedPizza, setCurrentOrder }) {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("25rem");

  const style = {
    backgroundColor: "#F7DC6F",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/yellow.png)`,
    backgroundSize: "30%",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  const ParentStyle = {
    minHeight: "38rem",
    maxHeight: maxHeight,
    transition: "max-height 1.5s ease-in-out",
    overflowY: "scroll",
    overflowX: "auto",
    position: "relative",
  };

  const headerStyle = {
    width: "100%",
    height: "150px",
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  useEffect(() => {
    const options = {
      strings: [
        "Have you tasted our all-time-popular items?",
        "Must try, we promise :)",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed("#typed-text", options);
    return () => {
      typed.destroy();
    };
  }, []);

  const toggleHeight = () => {
    setExpanded(!expanded);
    setMaxHeight(expanded ? "25rem" : "100%");
  };

  const pizzas = useContext(PizzaContext);

  const pizzasList = pizzas.map((pizza) => (
    <FoodCard
      key={pizza.id}
      title={pizza.name}
      description={pizza.description}
      imgSrc={pizza.img}
      price={pizza.price}
      dietary={pizza.dietary}
      nutrition={pizza.nutrition}
      ingredients={pizza.ingredients}
      setOrderedPizza={() => setOrderedPizza(pizza)}
      setCurrentOrder={() => setCurrentOrder(pizza)}
    />
  ));

  return (
    <div
      className="yellow-section container-fluid py-10 flex flex-col items-center"
      style={style}
    >
      <div style={headerStyle}>
        <h1
          id="typed-text"
          className="text-3xl sm:text-6xl font-extrabold italic"
        ></h1>
      </div>

      <div
        className="w-full sm:w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-10 relative parent mb-16 parent-scrollbar"
        style={ParentStyle}
      >
        {pizzasList}
      </div>

      <div className="relative w-full">
        {/* Uncomment if you want a button for expanding/collapsing */}
        {/* <div className="absolute bottom-4 w-full flex justify-center items-center">
          <FaArrowRight
            className={`transition-transform duration-[1500ms] mx-2 ${expanded ? "rotate-180" : ""}`}
          />
          <button
            className="btn bg-emerald-500 p-2 px-4 rounded-lg border-2 border-black font-bold mx-3"
            onClick={toggleHeight}
          >
            {expanded ? "Show Less" : "Click for More"}
          </button>
          <FaArrowLeft
            className={`transition-transform duration-[1500ms] mx-2 ${expanded ? "rotate-180" : ""}`}
          />
        </div> */}
      </div>
    </div>
  );
}

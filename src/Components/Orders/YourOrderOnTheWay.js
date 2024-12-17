import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function YourOrderOnTheWay() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const BackGroundStyle = {
    backgroundImage: "url('/images/buttons.png')",
    backgroundSize: "30%",
    backgroundPosition: "start",
    backgroundAttachment: "fixed",
  

  }

  return (
    <div className="w-full h-full bg-emerald-800 flex flex-col justify-center items-center" style={BackGroundStyle}>
      <div className=" flex flex-col justify-center items-center bg-emerald-900 bg-opacity-40 shadow-xl backdrop-blur-xl p-10 border-2 border-emerald-400 rounded-lg">
        <h1 className="text-8xl italic text-yellow-300 font-bold">Your order is on the way!</h1>
        <img src="/images/delivary.webp" alt="Order on the way" />
      </div>
    </div>
  );
}

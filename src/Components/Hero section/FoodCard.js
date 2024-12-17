import { useNavigate } from "react-router-dom";
import OrderNowBtnComponent from "../Navbar/OrderNowBtnComponent";

const FoodCard = ({
  title,
  description,
  imgSrc,
  price,
  dietary,
  ingredients,
  setOrderedPizza,
  setCurrentOrder,
}) => {
  const limitedIngredients = ingredients.slice(0, 4);
  const navigate = useNavigate();

  const handleOrderClick = () => {
    setOrderedPizza({ title, price, imgSrc }); 
    setCurrentOrder({ title, description, price }); 
    navigate("/ordering");
  };

  return (
    <div className="border-2 border-black rounded-lg bg-white p-3 pb-0 italic w-full sm:w-11/12 lg:w-full mx-2 my-4 flex flex-col justify-center">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
        <h3 className="font-extrabold text-gray-800 text-xl">{title}</h3>
        <span className="inline-flex items-center rounded-md mt-1 sm:mt-0 bg-gray-200 border border-gray-300 px-1 py-0.5 font-medium text-gray-600 text-xs ring-1 ring-inset ring-gray-500/10">
          {dietary}
        </span>
      </div>

      <img
        className="w-full h-auto rounded-t-xl m-1 border-2 border-black rounded-lg"
        src={imgSrc}
        alt={title}
      />

      <div className="p-4 md:p-5">
        <p className="mt-1 text-gray-900 text-start font-bold">Description:</p>
        <p className="text-gray-600 text-start">{description}</p>

        <p className="mt-1 text-gray-900 text-start font-bold">Price:</p>
        <p className="text-gray-600 text-start">{price} $</p>

        <OrderNowBtnComponent onClick={handleOrderClick} />
      </div>
    </div>
  );
};

export default FoodCard;

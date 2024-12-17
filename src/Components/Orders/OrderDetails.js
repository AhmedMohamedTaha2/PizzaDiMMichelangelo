import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate
import CurrentOrderContext from '../../Contexts/CurrentOrderContext';

export default function OrderDetails({ setOrderData }) {
  const selectedPizza = useContext(CurrentOrderContext); // Get selected pizza from context
  const [quantity, setQuantity] = useState(1); // Quantity state
  const navigate = useNavigate(); // Initialize navigate

  const totalPrice = selectedPizza ? (selectedPizza.price * quantity).toFixed(2) : 0;

  // Update order data whenever selectedPizza, quantity, or totalPrice changes
  useEffect(() => {
    if (selectedPizza) {
      setOrderData({
        selectedPizza,
        quantity,
        totalPrice,
      });
    }
  }, [selectedPizza, quantity, totalPrice, setOrderData]);

  // Handle redirection when no pizza is selected
  useEffect(() => {
    if (!selectedPizza) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [selectedPizza, navigate]);

  // If no pizza is selected, show fallback UI
  if (!selectedPizza) {
    return (
      <div className="text-center p-4">
        <p className="text-xl text-red-500 italic font-bold">
          No pizza here! <br /> Aliens stole it.
        </p>
        <img src="/images/aliens.webp" alt="Aliens Stole Pizza" className="mx-auto mt-4" />
        <p className="text-white mt-4">Redirecting to the homepage...</p>
      </div>
    );
  }

  // If a pizza is selected, render the order details
  return (
    <div className="order-details w-full mx-auto flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden border-2 border-black">
      <img
        src={selectedPizza.img}
        alt={selectedPizza.name}
        className="w-full h-40 object-cover"
      />
      <div className="details w-full py-2 px-5 flex flex-col items-start space-y-4 bg-emerald-700 italic border-t-2 border-black">
        <div className="header flex justify-between items-start w-full">
          <h1 className="text-xl font-bold text-yellow-300">{selectedPizza.name}</h1>
          <span className="dietary px-3 py-1 text-xs font-medium text-emerald-800 bg-gray-100 rounded-full border-2 bg-emerald-200 border-emerald-300">
            {selectedPizza.dietary}
          </span>
        </div>
        <p className="price text-lg text-yellow-200 font-bold">
          Price Per Unit: <span className="font-bold text-yellow-300">${selectedPizza.price}</span>
        </p>
        <div className="ingredients text-start">
          <p className="text-lg font-bold text-yellow-200">Ingredients:</p>
          <ul className="list-disc mt-2 ms-16 text-yellow-100">
            {(selectedPizza.ingredients || []).map((ingredient, index) => (
              <li key={index} className="text-md font-bold mt-1">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="quantity-controls w-full flex flex-col items-center">
          <p className="text-lg font-bold text-yellow-200 mb-2">Quantity</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              className="w-10 h-10 flex items-center justify-center bg-red-500 text-white font-bold text-xl rounded-md hover:bg-red-600 transition"
            >
              -
            </button>
            <p className="text-2xl font-bold text-yellow-300">{quantity}</p>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-10 h-10 flex items-center justify-center bg-green-500 text-white font-bold text-xl rounded-md hover:bg-green-600 transition"
            >
              +
            </button>
          </div>
        </div>
        <p className="total text-lg font-bold text-yellow-200 self-center">
          Total: <span className="text-yellow-300">${totalPrice}</span>
        </p>
      </div>
    </div>
  );
}

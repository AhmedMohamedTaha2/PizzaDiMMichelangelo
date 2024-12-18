import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import OrderedOrdersList from "./OrderedOrdersList";
import AuthenticationContext from '../../Contexts/AuthenticationContext';

export default function StuffDashBoard() {
  const BgStyle = {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/pizzaPattern2.png')`,
    backgroundSize: "20%",
    backgroundPosition: "start",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  };

  const { setAuthenticated } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  function LogoutFunction() {
    const isConfirmed = window.confirm('Are you sure you want to logout?');
    if (isConfirmed) {
      setAuthenticated(false);
      navigate("/");
    }
  }

  return (
    <div className="min-h-screen bg-red-950 bg-fixed" style={BgStyle}>
      {/* Header */}
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 shadow-lg">
        <nav className="max-w-7xl w-full mx-auto px-4 flex justify-between items-center">
          <button
            className="focus:outline-none hover:opacity-80"
            aria-label="Brand"
            onClick={() => navigate("/")}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Brand Logo"
              className="h-12 w-12"
            />
          </button>

          <div className="flex items-center space-x-6">
            <a
              className="font-medium text-red-600 border-r border-gray-300 pr-5"
              href="#"
            >
              Orders
            </a>
            <button
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none"
              onClick={LogoutFunction}
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      {/* Orders List */}
      <div className="flex flex-col items-center justify-center mt-10 mb-10 px-4 sm:px-6 lg:px-8">
        <OrderedOrdersList />
      </div>
    </div>
  );
}

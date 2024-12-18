import OrderNowBtnComponent from "./OrderNowBtnComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavBarComponent() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false); // State for nav toggle

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev); // Toggle the navbar state
  };

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-gray-800">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-x-1">
          <a
            className="flex-none focus:outline-none focus:opacity-80"
            aria-label="Brand"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Brand Logo"
              style={{
                height: "48px",
                width: "48px",
              }}
            />
          </a>

          <button
            type="button"
            className="md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            onClick={toggleNav} // Toggle function
          >
            {/* Open/Close Icons */}
            {!isNavOpen ? (
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            )}
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>

        {/* Collapsible Content */}
        <div
          className={`transition-all duration-300 basis-full grow md:block ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <div className="overflow-hidden overflow-y-auto max-h-[75vh]">
            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
              {/* Links */}
              <div className="grow">
                <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                  <a
                    className="p-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                   Home
                  </a>
                  <div className="w-full h-px md:w-px md:h-4 bg-gray-300"></div>
                  <a
                    className="p-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Stuff Only
                  </a>
                </div>
              </div>

              <div className="my-2 md:my-0 md:mx-2">
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

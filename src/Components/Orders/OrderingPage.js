  import { useState, useContext } from 'react';
  import { useNavigate } from 'react-router-dom';  
  import NavBarComponent from '../Navbar/NavBarComponent';
  import OrderDetails from './OrderDetails';
  import CustomerDetails from './CustomerDetails';
  import VisaDetails from './VisaDetails';
  import OrdersListContext from '../../Contexts/OrdersListContext';

  export default function OrderingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();  

    // Access ordersList and setOrdersList from context
    const { ordersList, setOrdersList } = useContext(OrdersListContext);

    const [orderData, setOrderData] = useState({});
    const [customerData, setCustomerData] = useState({
      name: '',
      phone: '',
      location: ''
    });
    const [visaData, setVisaData] = useState({
      cardNumber: '',
      cardHolder: '',
      validThru: '',
      cvv: ''
    });

    // Handle step navigation
    const handleNextStep = () => {
      if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const handleBackStep = () => {
      if (currentStep > 1) setCurrentStep(currentStep - 1);
    };




function getCurrentDateTime() {
  const now = new Date(); 
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const Orderdate = [{
    year: year,
    month:month,
    day: day,
    hours: hours,
    minutes:minutes
  }]

  return Orderdate  ;
}

    const handleFinish = () => {
      const finalData = {
        orderDetails: orderData,
        customerDetails: customerData,
        visaDetails: visaData,
        CreatedAt:getCurrentDateTime()
      };

      // Add the finalData to the existing ordersList
      setOrdersList([...ordersList, finalData]);

      console.log('Final Data:', finalData);
      alert('Finished!');

      // Redirect to "YourOrderOnTheWay" page
      navigate("/your-order-on-the-way");

      // After 5 seconds, navigate back to App.js
      setTimeout(() => {
        navigate("/");
      }, 2500);
    };

    const stepContent = [
      <OrderDetails setOrderData={setOrderData} />,
      <CustomerDetails customerData={customerData} setCustomerData={setCustomerData} />,
      <VisaDetails visaData={visaData} setVisaData={setVisaData} />
    ];

    const BackGroundStyle = {
      backgroundImage: "url('/images/buttons.png')",
      backgroundSize: "30%",
      backgroundPosition: "start",
      backgroundAttachment: "fixed",
    };

    return (
      <>
        <NavBarComponent />
        <div className="container-fluid h-screen py-5 px-2 bg-gray-700 flex flex-col items-center" style={BackGroundStyle}>
          <div className="w-full sm:w-1/3 h-screen flex flex-col min-h-[60%] mx-auto p-5 pb-6 rounded-lg backdrop-blur-xl bg-gray-900 bg-opacity-40 shadow-xl">
            <ul className="relative flex flex-row gap-x-6 items-center justify-center w-full mx-auto mb-5">
              {[1, 2, 3].map((step, index) => (
                <li key={step} className={`flex items-center gap-x-2 flex-1 group ${currentStep >= step ? 'active' : ''}`}>
                  <span className="flex justify-center items-center min-w-7 min-h-7 group inline-flex text-xs align-middle focus:outline-none">
                    <span className={`flex justify-center items-center shrink-0 w-7 h-7 text-white font-medium rounded-full ${currentStep >= step ? 'bg-emerald-600' : 'bg-gray-400'}`}>
                      {currentStep >= step ? (
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        step
                      )}
                    </span>
                  </span>
                  {index < 2 && (
                    <div className={`flex-1 h-px bg-gray-300 ${currentStep >= step ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-5 sm:mt-8 w-full flex flex-col justify-between h-full">
              <div aria-live="polite" className="step-content-container w-full h-full flex justify-center items-center mb-4">
                {stepContent[currentStep - 1]}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row justify-between items-center gap-y-2 gap-x-4">
                <button
                  type="button"
                  className="py-2 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 disabled:opacity-50"
                  onClick={handleBackStep}
                  disabled={currentStep === 1}
                  aria-label="Go to previous step"
                >
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  Back
                </button>

                <button
                  type="button"
                  className={`py-2 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${currentStep === 3 ? 'hidden' : ''}`}
                  onClick={handleNextStep}
                  aria-label="Go to next step"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="spinner-border spinner-border-sm text-white"></span>
                  ) : (
                    <>
                      Next
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="py-2 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  onClick={handleFinish}
                  style={{ display: currentStep === 3 ? 'inline-flex' : 'none' }}
                  aria-label="Finish the process"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

import { useEffect, useState } from "react";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import "../node_modules/preline/dist/preline";
import "./App.css";
import GreenSectionComponent from "./Components/Hero section/GreenSection";
import HeroSectioon from "./Components/Hero section/HeroSectioon";
import OrangeSectionComponent from "./Components/Hero section/OrangeSection";
import YellowSectionComponent from "./Components/Hero section/YellowSection";
import MovingBanner from "./Components/Moving Banner/MovingBannerComponent";
import NavBarComponent from "./Components/Navbar/NavBarComponent";
import PizzaContext from "./Contexts/PizzaContext";
import PizzaArray from "./Contexts/PizzaArray";
import RatingSection from "./Components/Hero section/RatingSection";
import FooterComponent from "./Components/Footer/FooterComponent";
import OrderingPage from "./Components/Orders/OrderingPage";
import YourOrderOnTheWay from "./Components/Orders/YourOrderOnTheWay";
import OrdersListContext from "./Contexts/OrdersListContext";
import AuthenticationContext from "./Contexts/AuthenticationContext";
import usersContext from "./Contexts/usersContext";
import CurrentOrderContext from "./Contexts/CurrentOrderContext"; // Import missing context
import LoginComponent from "./Components/StuffOnly/LoginComponent";
import usersList from "./Contexts/UsersList";
import StuffDashBoard from "./Components/StuffOnly/StuffDashBoard";

function App() {
  const [orderedPizza, setOrderedPizza] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null); 
  const [ordersList, setOrdersList] = useState([]);
  const [Authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const storedOrders = localStorage.getItem('ordersList');
    const currentOrders = ordersList;
  
    if (storedOrders) {
      const oldOrders = JSON.parse(storedOrders);
      
      const updatedOrders = [
        ...oldOrders.filter(order => !currentOrders.some(newOrder => newOrder.id === order.id)),
        ...currentOrders
      ];
      
      localStorage.setItem('ordersList', JSON.stringify(updatedOrders));
    } else {
      localStorage.setItem('ordersList', JSON.stringify(currentOrders));
    }
  }, [ordersList]);
  
  

  return (
    <AuthenticationContext.Provider value={{ Authenticated, setAuthenticated }}>
      <usersContext.Provider value={usersList}>
        <PizzaContext.Provider value={PizzaArray}>
          <OrdersListContext.Provider value={{ ordersList, setOrdersList }}>
            <CurrentOrderContext.Provider value={currentOrder}>
              {/* Wrap with CurrentOrderContext */}
              <Router>
                <div
                  className="App m-0"
                  style={{ height: "100vh", margin: "0px", top: "0px" }}
                >
                  <Routes>
                    {/* Main Page */}
                    <Route
                      path="/"
                      element={
                        <div className="w-full m-0 px-0 bg-black h-full">
                          <NavBarComponent />
                          <HeroSectioon />
                          <MovingBanner
                            Content={"Best Slice You Will Ever Have"}
                          />
                          <GreenSectionComponent />
                          <OrangeSectionComponent />
                          <YellowSectionComponent
                            setOrderedPizza={(pizza) =>
                              setOrderedPizza([...orderedPizza, pizza])
                            }
                            setCurrentOrder={setCurrentOrder} // Update currentOrder here
                          />
                          <MovingBanner Content={"FOODIES SINCE 2001"} />
                          <RatingSection />
                          <FooterComponent />
                        </div>
                      }
                    />
                    {/* Ordering Page */}
                    <Route path="/ordering" element={<OrderingPage />} />
                    <Route
                      path="/your-order-on-the-way"
                      element={<YourOrderOnTheWay />}
                    />
                    <Route path="/login" element={<LoginComponent />} />

                    {/* Conditional Route */}
                    {Authenticated ? (
                      <Route
                        path="/StuffDashBoard"
                        element={<StuffDashBoard />}
                      />
                    ) : (
                      <Route
                        path="/StuffDashBoard"
                        element={<LoginComponent />}
                      />
                    )}
                  </Routes>
                </div>
              </Router>
            </CurrentOrderContext.Provider>
          </OrdersListContext.Provider>
        </PizzaContext.Provider>
      </usersContext.Provider>
    </AuthenticationContext.Provider>
  );
}

export default App;

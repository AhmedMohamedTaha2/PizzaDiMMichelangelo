import { useContext, useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import OrdersListContext from "../../Contexts/OrdersListContext";

export default function OrderedOrdersList() {
  const [ordersList, setOrdersList] = useState([]);

  const ordersListContext = useContext(OrdersListContext);

  useEffect(() => {
    const storedOrders = localStorage.getItem('ordersList');
    if (storedOrders) {
      setOrdersList(JSON.parse(storedOrders));
    }
  }, []);

  const DisplayedOrders = ordersList.map((order, index) => (
    <OrderCard
      key={index}
      orderDetails={order.orderDetails}
      customerDetails={order.customerDetails}
      CreatedAt={order.CreatedAt[0]}
      index={index}
    />
  ));

  return (
    <div className="w-full md:w-3/4 lg:w-2/3 bg-black bg-opacity-40 rounded-lg border-2 border-black min-h-96 flex flex-col py-5 items-center">
      {DisplayedOrders}
    </div>
  );
}

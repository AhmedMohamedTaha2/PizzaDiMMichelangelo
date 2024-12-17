import { HiCalendarDateRange } from "react-icons/hi2";
import { IoIosPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function OrderCard({ orderDetails, customerDetails, CreatedAt, index }) {
  return (
    <div className="my-4 bg-white w-5/6 sm:w-2/3 rounded-md shadow-md flex flex-col border-t-4 border-red-700">
      {/* Order details */}
      <div className="p-5 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg font-bold text-black">Order {index + 1}</h1>
          <div className="flex items-center text-gray-700">
            <HiCalendarDateRange className="mr-1 text-lg" />
            <span>
              {CreatedAt.year}/{CreatedAt.month}/{CreatedAt.day} - {CreatedAt.hours}:{CreatedAt.minutes}
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-amber-500 mb-2">
          {orderDetails.selectedPizza.name}
        </h2>
        <p className="text-gray-900 font-semibold">Quantity: {orderDetails.quantity}</p>
        <p className="text-gray-900 font-semibold">Total: ${orderDetails.totalPrice}</p>

        <h3 className="mt-4 font-bold text-gray-700">Customer Details:</h3>
        <ul className="list-none text-gray-600">
          <li className="flex items-center">
            <IoIosPerson className="mr-2" /> {customerDetails.name}
          </li>
          <li className="flex items-center">
            <FaPhone className="mr-2" /> {customerDetails.phone}
          </li>
          <li className="flex items-center">
            <FaLocationDot className="mr-2" /> {customerDetails.location}
          </li>
        </ul>
      </div>

      {/* Actions */}
      <div className="bg-gray-100 p-3 flex justify-between items-center md:justify-around md:p-5">
        <button className="w-1/3 py-2 text-white bg-emerald-600 rounded hover:bg-emerald-700 transition text-sm mx-1">
          Finished
        </button>
        <button className="w-1/3 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition text-sm mx-1">
          Delete
        </button>
        <button className="w-1/3 py-2 text-white bg-sky-600 rounded hover:bg-sky-700 transition text-sm mx-1">
          Print
        </button>
      </div>
    </div>
  );
}

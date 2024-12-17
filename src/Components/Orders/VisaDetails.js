import React, { useState } from 'react';

export default function VisaDetails({ setVisaData }) {
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardHolder: '',
        validThru: '',
        cvv: '',
    });

    // Handle input changes and update state in OrderingPage.js
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Update visaData in OrderingPage.js on each input change
        setVisaData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="w-full mx-auto flex flex-col items-center bg-transparent overflow-hidden my-10 py-10">
            {/* Visa Card Preview */}
            <div className="visa-card w-full bg-gray-800 text-white rounded-lg shadow-lg p-6 mb-8">
                <div className="flex justify-between flex-row">
                    <h1 className="font-bold">Enter Your Visa Information</h1>
                    <div className="logoContainer flex justify-end">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 48 48"
                            className="svgLogo"
                        >
                            <path
                                fill="#ff9800"
                                d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                            ></path>
                            <path
                                fill="#d50000"
                                d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                            ></path>
                            <path
                                fill="#ff3d00"
                                d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                            ></path>
                        </svg>
                    </div>
                </div>

                <div className="number-container my-4">
                    <label className="text-sm font-bold block" htmlFor="cardNumber">
                        CARD NUMBER
                    </label>
                    <input
                        className="inputstyle w-full bg-gray-700 text-white p-2 rounded mt-1 placeholder-gray-400"
                        id="cardNumber"
                        placeholder="XXXX XXXX XXXX XXXX"
                        name="cardNumber"
                        type="text"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        maxLength={16}
                        minLength={16}
                        required
                    />
                </div>

                <div className="name-date-cvv-container flex justify-between gap-4">
                    <div className="name-wrapper flex-1">
                        <label className="text-sm font-bold block" htmlFor="cardHolder">
                            CARD HOLDER
                        </label>
                        <input
                            className="inputstyle w-full bg-gray-700 text-white p-2 rounded mt-1 placeholder-gray-400"
                            id="cardHolder"
                            placeholder="NAME"
                            name="cardHolder"
                            type="text"
                            value={formData.cardHolder}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="expiry-wrapper flex-1">
                        <label className="text-sm font-bold block" htmlFor="validThru">
                            Expire Year
                        </label>
                        <input
                            className="inputstyle w-full bg-gray-700 text-white p-2 rounded mt-1 placeholder-gray-400"
                            id="validThru"
                            placeholder="MM/YY"
                            name="validThru"
                            type="text"
                            value={formData.validThru}
                            onChange={handleChange}
                            maxLength={4}
                            required
                        />
                    </div>

                    <div className="cvv-wrapper flex-1">
                        <label className="text-sm font-bold block" htmlFor="cvv">
                            CVV
                        </label>
                        <input
                            className="inputstyle w-full bg-gray-700 text-white p-2 rounded mt-1 placeholder-gray-400"
                            id="cvv"
                            placeholder="***"
                            name="cvv"
                            type="password"
                            value={formData.cvv}
                            onChange={handleChange}
                            maxLength={3}
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

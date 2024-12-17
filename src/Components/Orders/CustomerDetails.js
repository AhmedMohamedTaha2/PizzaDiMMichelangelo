import React, { useState, useEffect } from 'react';

export default function CustomerDetails({ customerData, setCustomerData }) {
    const [formData, setFormData] = useState({
        name: customerData.name || '',
        phone: customerData.phone || '',
        location: customerData.location || '',
    });


    useEffect(() => {
        setFormData({
            name: customerData.name || '',
            phone: customerData.phone || '',
            location: customerData.location || '',
        });
    }, [customerData]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        setCustomerData(updatedData); 
    };

    return (
        <div className="w-full bg-emerald-600 mx-auto mt-4 p-6 rounded-xl shadow-md border-2 border-black">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-100 mb-4">
                Enter Your Location Details
            </h1>
            <form className="space-y-4">
                {/* Name Input */}
                <div className="flex flex-col text-start">
                    <label htmlFor="name" className="text-sm sm:text-base font-bold text-yellow-200">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="py-2 px-3 border border-gray-300 rounded-md"
                    />
                </div>
                {/* Phone Input */}
                <div className="flex flex-col text-start">
                    <label htmlFor="phone" className="text-sm sm:text-base font-bold text-yellow-200">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="py-2 px-3 border border-gray-300 rounded-md"
                    />
                </div>
                {/* Location Input */}
                <div className="flex flex-col text-start">
                    <label htmlFor="location" className="text-sm sm:text-base font-bold text-yellow-200">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="py-2 px-3 border border-gray-300 rounded-md"
                    />
                </div>
            </form>
        </div>
    );
}

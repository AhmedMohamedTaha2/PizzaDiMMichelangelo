import { FaStar } from "react-icons/fa";    
import { FaHeart } from "react-icons/fa";
import React from "react";

const RatingSection = () => {
    const style = {
        backgroundColor: '#F4E9DD'
    };

    return (
        <div className="container-fluid px-4 py-10" style={style}>
            {/* Section Title */}
            <div className="flex flex-col justify-center items-center mb-15">
                <h1 className="font-extrabold text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full sm:w-2/3">
                    We spend our days enjoying what we do and our customers love it!
                </h1>
                <div className="container flex flex-row justify-center items-center my-5">
                    <FaHeart className="text-red-600 mx-4 text-2xl sm:text-3xl lg:text-4xl"/>
                    <FaHeart className="text-red-600 mx-4 text-2xl sm:text-3xl lg:text-4xl"/>
                    <FaHeart className="text-red-600 mx-4 text-2xl sm:text-3xl lg:text-4xl"/>
                </div>
            </div>

            {/* Rating Cards Section */}
            <div className="container mx-auto border-2 p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="flex flex-col justify-between items-center">
                        <div className="bg-emerald-800 h-96 rounded-lg p-5 flex flex-col border-4 justify-between border-black">
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className="text-yellow-300 text-2xl mx-1" />
                                ))}
                            </div>
                            <p className="text-start text-2xl sm:text-lg md:text-2xl lg:text-xl xl:text-2xl my-2 text-white font-bold">
                                Radical pizza! Fresh, cheesy, and super tasty. The crust is perfect, and delivery is fast. Cowabunga, I’m coming back for more!
                            </p>
                            <p className="my-3 text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-yellow-300 font-bold italic">
                                Michelangelo
                            </p>
                        </div>
                        <img
                            src="/images/tmnt1.webp"
                            alt="Pizza Image 1"
                            className="w-full rounded-lg object-cover mt-4 hidden lg:block"  
                        />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center justify-between">
                        <img
                            src="/images/tmnt2.webp"
                            alt="Pizza Image 2"
                            className="w-full rounded-lg object-cover mb-4 hidden lg:block"  
                        />
                        <div className="bg-emerald-800 h-96 rounded-lg p-5 flex flex-col justify-between border-4 border-black">
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className="text-yellow-300 text-2xl mx-1" />
                                ))}
                            </div>
                            <p className="text-start text-2xl sm:text-lg md:text-2xl lg:text-xl xl:text-2xl my-2 text-white font-bold">
                                Great pizza with top ingredients. Fast service, balanced flavors. This place knows how to make a perfect pizza.
                            </p>
                            <p className="my-3 text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-yellow-300 font-bold italic">
                                Leonardo
                            </p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center justify-between">
                        <div className="bg-emerald-800 h-96 rounded-lg p-5 flex flex-col justify-between border-4 border-black">
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className="text-yellow-300 text-2xl mx-1" />
                                ))}
                            </div>
                            <p className="text-start text-2xl sm:text-lg md:text-2xl lg:text-xl xl:text-2xl my-2 text-white font-bold">
                                Perfect pizza with fresh toppings. The website is easy to use, and delivery is quick. A great choice for techies and pizza lovers!
                            </p>
                            <p className="my-3 text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-yellow-300 font-bold italic">
                                Donatello
                            </p>
                        </div>
                        <img
                            src="/images/tmnt3.webp"
                            alt="Pizza Image 3"
                            className="w-full rounded-lg object-cover mt-4 hidden lg:block"  
                        />
                    </div>
                </div>
            </div>

            {/* Awards Section */}
            <div className="mt-12 w-full sm:w-2/3 lg:w-2/6 mx-auto flex flex-row justify-around items-center flex-wrap">
                <img src="/images/award1.webp" className="w-32 mb-4 sm:mb-0 md:mb-4" />
                <img src="/images/award3.webp" className="w-32 mb-4 sm:mb-0 md:mb-4" />
                <img src="/images/award2.webp" className="w-32 mb-4 sm:mb-0 md:mb-4" />
                <img src="/images/award4.webp" className="w-32  mb-4 sm:mb-0 md:mb-4" />
            </div>
        </div>
    );
};

export default RatingSection;

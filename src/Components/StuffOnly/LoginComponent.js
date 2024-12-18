import React, { useState, useContext, useEffect } from 'react';
import NavBarComponent from "../Navbar/NavBarComponent";
import usersContext from '../../Contexts/usersContext';
import AuthenticationContext from '../../Contexts/AuthenticationContext';
import { useNavigate } from 'react-router-dom';  

export default function LoginComponent() {
    const BackGroundStyle = {
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/buttons.png')`,
        backgroundSize: "10%",
        backgroundPosition: "start",
        backgroundAttachment: "fixed",
        minHeight: '100vh',
    };

    const usersList = useContext(usersContext);
    const { setAuthenticated } = useContext(AuthenticationContext);
    const { Authenticated } = useContext(AuthenticationContext);

    const navigate = useNavigate();  

    if (!usersList) {
        console.error('usersContext is not available or empty');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError(''); 
    };

    const validateCredentials = () => {
        let isValid = true;
        setEmailError('');
        setPasswordError('');

        if (!email.trim()) {
            setEmailError('Please enter your email');
            isValid = false;
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        }

        if (!password.trim()) {
            setPasswordError('Please enter your password');
            isValid = false;
        }

        if (!isValid) {
            return; 
        }

        // Check credentials against the usersList
        const user = usersList?.find((user) => user.email === email && user.password === password);
        if (user) {
            alert('Login Successful');
            setAuthenticated(true);
            navigate("/StuffDashBoard"); 
        } else {
            alert('Invalid Email or Password');
            setAuthenticated(false);
            navigate("/"); 
        }
    };

    // useEffect(() => {
    //     if (Authenticated === false) {
    //         alert('Please login to access the application');
    //         navigate("/");       }
    // }, [Authenticated, navigate]);

    return (
        <div className="login-container container-fluid bg-red-900" style={BackGroundStyle}>
            <div className="w-full min-h-screen bg-black bg-opacity-40 flex flex-col">
                <NavBarComponent />
                <div className="w-full flex-1 flex justify-center items-center">
                    <div className="flex flex-col items-start justify-center bg-[#4C1111] p-6 rounded-md border-2 border-black shadow-lg gap-5 w-2/3 sm:w-1/3">
                        <div className="text-white font-extrabold text-xl mb-6 text-start">
                            <h1>Welcome,</h1>
                            <span className="text-gray-100 font-bold text-lg">You Need to be a staff member</span>
                        </div>

                        {/* Email input with error message */}
                        <div className="w-full">
                            <input
                                className={`w-full h-10 rounded-md border-2 border-black bg-beige shadow-xl text-base font-semibold text-black px-3 outline-none focus:border-[#780000] ${emailError ? 'border-red-500' : ''}`}
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && <div className="text-red-500 text-sm mt-1">{emailError}</div>}
                        </div>

                        {/* Password input with error message */}
                        <div className="w-full">
                            <input
                                className={`w-full h-10 rounded-md border-2 border-black bg-beige shadow-xl text-base font-semibold text-black px-3 outline-none focus:border-[#780000] ${passwordError ? 'border-red-500' : ''}`}
                                name="password"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passwordError && <div className="text-red-500 text-sm mt-1">{passwordError}</div>}
                        </div>

                        {/* Submit button */}
                        <button
                            className="w-32 h-10 rounded-md border-2 border-black bg-beige shadow-xl text-lg font-semibold bg-white text-black mt-5 hover:bg-gray-200 active:shadow-none active:translate-y-[3px]"
                            onClick={validateCredentials}
                        >
                            Let's go →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

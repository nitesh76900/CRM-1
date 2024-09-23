import {Link } from 'react-router-dom'
import React from 'react';
import image from '../images/crm-home-stay-informed.svg'

const Landing = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-lg">
                <h1 className="text-2xl font-bold mb-4">Welcome to Our Home Page</h1>
                <p className="text-gray-700 mb-6">
                    This is a brief description of our website. Here you can find various resources and information that may be useful to you.
                </p>
                <img 
                    src={image} 
                    alt="Sample" 
                    className="rounded-lg mb-6"
                />
                <Link 
                    to={"/login"}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
                >
                    Get Free CRM
                </Link>
            </div>
        </div>
    );
};

export default Landing;

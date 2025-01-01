"use client"

import React, { useState } from 'react';

const Home = () => {
    const [hasLocationPermission, setHasLocationPermission] = useState(false);

    const requestLocationAccess = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('User location:', position.coords);
                setHasLocationPermission(true);
            },
            (error) => {
                alert('Location access denied. Unable to display the page content.');
                console.error(error.message);
            }
        );
    };

    return (
        <div className='flex flex-col min-h-screen justify-center items-center bg-gray-950'>
            {!hasLocationPermission ? (
                <div className='flex flex-col justify-center items-center bg-gray-900 text-gray-200 border-2 border-gray-700 p-8 rounded-md shadow-lg'>
                    <h2 className='text-2xl font-bold mb-4'>Location Access Required</h2>
                    <p className='mb-4'>We need access to your location to show the nearest police station.</p>
                    <button
                        onClick={requestLocationAccess}
                        className='bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition duration-200'
                    >
                        Allow Location Access
                    </button>
                </div>
            ) : (
                <>
                    <div className='text-4xl font-semibold text-yellow-400 py-4'>Nearest Police Station</div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9188327558522!2d77.51581198288056!3d12.912938183684641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fabe04ce5a9%3A0xccf0b282a9ec7357!2sRajaRajeshwari%20Nagar%20Police%20Station!5e0!3m2!1sen!2sin!4v1735633401615!5m2!1sen!2sin"
                        width="1200"
                        height="600"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </>
            )}
        </div>
    );
};

export default Home;
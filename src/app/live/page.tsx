"use client"

import { useEffect, useState } from "react";
import { CameraOff } from "lucide-react";

const LivePage = () => {
    const [dateTime, setDateTime] = useState("");
    const [location, setLocation] = useState("Detecting location...");

    // Function to update date and time
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setDateTime(now.toLocaleString("en-US", { hour12: false }) + `:${now.getMilliseconds().toString().padStart(3, '0')}`);
        }, 1); // Update every millisecond
        return () => clearInterval(interval);
    }, []);

    // Function to detect user's location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation(`Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`);
                },
                () => {
                    setLocation("Location unavailable");
                }
            );
        } else {
            setLocation("Geolocation not supported");
        }
    }, []);

    return (
        <div className="relative flex justify-center items-center min-h-screen mx-36 my-16 overflow-clip">
            {/* Date, Time, and Location */}
            <div className="fixed top-16 left-4 p-4 text-gray-200 font-semibold rounded-bl-lg">
                {location}
            </div>
            <div className="fixed top-16 right-4 p-4 text-gray-200 font-semibold  rounded-br-lg">
                {dateTime}
            </div>

            {/* Main Content */}
            <div className="flex flex-row h-[70vh] w-full space-x-2">
                <div className="w-2/3 bg-gray-300">
                    <iframe
                        className="w-full h-full"
                        src="http://192.168.125.45:7001/"
                        frameBorder="0"
                    ></iframe>
                </div>
                <div className="flex flex-col w-1/3 space-y-2">
                    <div className="h-1/3 bg-gray-600 flex justify-center items-center">
                        <CameraOff size={60} />
                    </div>
                    <div className="h-1/3 bg-gray-600 flex justify-center items-center">
                        <CameraOff size={60} />
                    </div>
                    <div className="h-1/3 bg-gray-600 flex justify-center items-center">
                        <CameraOff size={60} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LivePage;

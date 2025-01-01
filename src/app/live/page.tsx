import { CameraOff } from "lucide-react";
import React from "react";

const LivePage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen mx-36">
            <div className="flex flex-row h-[70vh] w-full space-x-2">
                <div className="w-2/3 bg-gray-300">
                    <iframe className="w-full h-full " src="http://192.168.125.45:7001/" frameBorder="0"></iframe>
                </div>
                <div className="flex flex-col w-1/3 space-y-2">
                    <div className="h-1/3 bg-gray-600 flex justify-center items-center"><CameraOff size={60}/></div>
                    <div className="h-1/3 bg-gray-600 flex justify-center items-center"><CameraOff size={60}/></div>
                    <div className="h-1/3 bg-gray-600 flex justify-center items-center"><CameraOff size={60}/></div>
                </div>
            </div>
        </div>
    );
};

export default LivePage;

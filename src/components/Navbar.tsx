"use client"

import { ShieldCheck } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {

    const router = useRouter();

	return (
		<nav className="shadow-md border-b-2 border-gray-900 fixed w-full top-0 bg-black">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				{/* Project Name */}
                
				<h1 onClick={()=>{router.push('/')}} className="cursor-pointer flex flex-row text-xl font-bold text-gray-100 justify-center items-center">
                <ShieldCheck className="mx-2 text-yellow-300"/>
                <span className="text-yellow-300">B</span>ehaviour <span className="text-yellow-300 ml-2"> A</span>nomaly <span className="text-yellow-300 ml-2"> I</span>dentification & <span className="text-yellow-300 ml-2"> G</span>uarding through <span className="text-yellow-300 ml-2"> A</span>rtificial <span className="text-yellow-300 ml-2">N</span>etwork
				</h1>

				{/* Navigation Links */}
				<ul className="flex space-x-6 text-gray-200 z-10">
					<li>
						<button onClick={()=>{router.push('/report')}} className="hover:text-yellow-400 hover:bg-gray-900 px-2 py-1 rounded-md duration-200 transition-all">
							Report Anomaly
						</button>
					</li>
					<li>
						<button onClick={()=>{router.push('/police')}}  className="hover:text-yellow-400 hover:bg-gray-900 px-2 py-1 rounded-md duration-200 transition-all">
							Nearest Police Stations
						</button>
					</li>
					<li>
						<button onClick={()=>{router.push('/live')}}  className="hover:text-yellow-400 hover:bg-gray-900 px-2 py-1 rounded-md duration-200 transition-all">
							Live Feed
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

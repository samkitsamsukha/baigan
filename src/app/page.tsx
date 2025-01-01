"use client"

import React from "react";
import {
	ArrowBigUp,
	Blocks,
	Box,
	BriefcaseBusiness,
	Building2,
	Clock,
	GlobeLock,
	Siren,
	Wallet,
} from "lucide-react";
import { redirect } from "next/navigation";

export default function Home() {
	return (
		<div className="bg-gray-950 text-gray-200 min-h-screen mt-16">
			<header className="py-20 text-center">
				<h1 className="text-7xl font-bold text-yellow-400">
					Behaviour Anomaly Identification
				</h1>
				<p className="mt-4 text-lg text-gray-200">
					Machine Learning powered CCTV monitoring to detect and alert about
					violent activities in real time.
				</p>
				<button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300">
					Get Started
				</button>
			</header>
			<div className="flex flex-col md:flex-row gap-12 mx-12 py-12">
				<div className="md:w-1/3 bg-gray-800 rounded-xl p-1">
					<video
						src="/report.mp4"
						autoPlay
						loop
						muted
						className="rounded-xl w-full h-[300px] object-cover"
					></video>
				</div>
				<div className="md:w-1/3 bg-gray-800 rounded-xl p-1">
					<video
						src="/report.mp4"
						autoPlay
						loop
						muted
						className="rounded-xl w-full h-[300px] object-cover"
					></video>
				</div>
				<div className="md:w-1/3 bg-gray-800 rounded-xl p-1">
					<video
						src="/policestation.mp4"
						autoPlay
						loop
						muted
						className="rounded-xl w-full h-[300px] object-cover"
					></video>
				</div>
			</div>
			<section className="py-20 px-8 md:px-16">
				<h2 className="text-4xl font-bold text-center text-yellow-400">
					Features
				</h2>
				<div className="mt-12 grid gap-8 md:grid-cols-3">
					<div className="bg-gray-900 p-6 rounded-lg">
						<div className="flex items-center gap-2">
							<i className="lucide lucide-briefcase text-yellow-400 text-2xl">
								<Clock />
							</i>
							<h3 className="text-2xl font-semibold text-yellow-400">Real-Time Alerts</h3>
						</div>
						<p className="mt-4 text-gray-200">
							Get instant notifications for any violent activity detected on
							screen.
						</p>
					</div>
					<div className="bg-gray-900 p-6 rounded-lg">
						<div className="flex items-center gap-2">
							<i className="lucide lucide-briefcase text-yellow-400 text-2xl">
								<ArrowBigUp />
							</i>
							<h3 className="text-2xl font-semibold text-yellow-400">High Accuracy</h3>
						</div>
						<p className="mt-4 text-gray-200">
							Trained with advanced ML models to minimize false positives.
						</p>
					</div>
					<div className="bg-gray-900 p-6 rounded-lg">
						<div className="flex items-center gap-2">
							<i className="lucide lucide-briefcase text-yellow-400 text-2xl">
								<Blocks />
							</i>
							<h3 className="text-2xl font-semibold text-yellow-400">Easy Integration</h3>
						</div>
						<p className="mt-4 text-gray-200">
							Seamlessly integrate with your existing CCTV setup.
						</p>
					</div>
					<div className="bg-gray-900 p-6 rounded-lg">
						<div className="flex items-center gap-2">
							<i className="lucide lucide-briefcase text-yellow-400 text-2xl">
								<GlobeLock />
							</i>
							<h3 className="text-2xl font-semibold text-yellow-400">Blockchain Based Report Filing</h3>
						</div>
						<p className="mt-4 text-gray-200">
							Absolutely authentic and reliable report filing using Ether as gas
							fee.
						</p>
					</div>
					<div className="bg-gray-900 p-6 rounded-lg">
						<div className="flex items-center gap-2">
							<i className="lucide lucide-briefcase text-yellow-400 text-2xl">
								<Siren />
							</i>
							<h3 className="text-2xl font-semibold text-yellow-400">Nearest Police Station</h3>
						</div>
						<p className="mt-4 text-gray-200">
							Finds and alert the nearest police station in case any anomaly is
							detected.
						</p>
					</div>
					<div className="bg-gray-900 p-6 rounded-lg">
						<div className="flex items-center gap-2">
							<i className="lucide lucide-briefcase text-yellow-400 text-2xl">
								<Clock />
							</i>
							<h3 className="text-2xl font-semibold text-yellow-400">Real-Time Alerts</h3>
						</div>
						<p className="mt-4 text-gray-200">
							Seamlessly integrate with your existing CCTV setup.
						</p>
					</div>
				</div>
			</section>
			<section className="py-20 px-8 md:px-16 bg-gray-900">
				<div className="flex items-center gap-2 justify-center">
					<i className="lucide lucide-box text-yellow-400 text-4xl font-bold">
						<Wallet size={30} />
					</i>
					<h3 className="text-4xl font-bold text-center text-yellow-400">
						Pricing
					</h3>
				</div>
				<div className="mt-12 grid gap-8 md:grid-cols-3">
					<div className="bg-gray-950 p-6 rounded-lg border border-gray-700">
						<div className="flex items-center gap-2">
							<i className="lucide lucide-box text-yellow-400 text-2xl">
								<Box />
							</i>
							<h3 className="text-2xl font-semibold text-yellow-400">Basic</h3>
						</div>
						<p className="mt-4 text-gray-200">For small setups</p>
						<ul className="mt-4 text-gray-200 list-disc list-inside">
							<li>1 GB storage</li>
							<li>Email support</li>
							<li>Access to basic features</li>
						</ul>
						<p className="mt-6 text-gray-200 text-sm">Validity: 1 month</p>
						<p className="mt-2 text-3xl font-bold text-gray-200">Rs. 2999/mo</p>
						<button onClick={() => redirect('https://rzp.io/rzp/mQVO5LhG')} className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300">
							Subscribe
						</button>
					</div>
					<div className="bg-gray-950 p-6 rounded-lg border border-gray-700">
						<div className="flex items-center gap-2">
							<i className="lucide lucide-briefcase text-yellow-400 text-2xl">
								<BriefcaseBusiness />
							</i>
							<h3 className="text-2xl font-semibold text-yellow-400">Pro</h3>
						</div>
						<p className="mt-4 text-gray-200">For medium businesses</p>
						<ul className="mt-4 text-gray-200 list-disc list-inside">
							<li>10 GB storage</li>
							<li>Priority email support</li>
							<li>Advanced analytics</li>
						</ul>
						<p className="mt-6 text-gray-200 text-sm">Validity: 3 months</p>
						<p className="mt-2 text-3xl font-bold text-gray-200">Rs. 5999/mo</p>
						<button onClick={() => redirect('https://rzp.io/rzp/mQVO5LhG')} className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300">
							Subscribe
						</button>
					</div>
					<div className="bg-gray-950 p-6 rounded-lg border border-gray-700">
						<div className="flex items-center gap-2">
							<i className="lucide lucide-building text-yellow-400 text-2xl">
								<Building2 />
							</i>
							<h3 className="text-2xl font-semibold text-yellow-400">
								Enterprise
							</h3>
						</div>
						<p className="mt-4 text-gray-200">Custom solutions</p>
						<ul className="mt-4 text-gray-200 list-disc list-inside">
							<li>Unlimited storage</li>
							<li>Dedicated account manager</li>
							<li>Custom integrations</li>
						</ul>
						<p className="mt-6 text-gray-200 text-sm">Validity: Custom</p>
						<p className="mt-2 text-3xl font-bold text-gray-200">Contact Us</p>
						<button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300">
							Contact
						</button>
					</div>
				</div>
			</section>
			<section className="bg-gray-900 py-12">
				<div className="container mx-auto text-center">
					<h2 className="text-yellow-400 text-3xl font-bold mb-4">Contact Us</h2>
					<p className="text-gray-200 text-lg mb-6">
						We'd love to hear from you! Reach out to us for any inquiries or feedback.
					</p>
					<form className="max-w-md mx-auto">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full p-3 mb-4 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full p-3 mb-4 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
						/>
						<textarea
							placeholder="Your Message"
							rows="5"
							className="w-full p-3 mb-4 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
						></textarea>
						<button
							type="submit"
							className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded hover:bg-yellow-300 transition duration-300"
						>
							Send Message
						</button>
					</form>
				</div>
			</section>
			<footer className="py-4 text-center bg-gray-950">
				<p className="text-gray-400">
					&copy; 2024 BAIGAN. All Rights Reserved.
				</p>
			</footer>
		</div>
	);
}

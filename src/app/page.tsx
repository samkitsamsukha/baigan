import React from "react";
import {
  ArrowBigUp,
	Blocks,
	Box,
	BriefcaseBusiness,
	Building,
	Building2,
	Clock,
	GlobeLock,
	IndianRupee,
	Siren,
	Wallet,
} from "lucide-react";

export default function Home() {
	return (
		<div className="bg-gray-950 text-gray-200 min-h-screen mt-16">
			{/* Hero Section */}
			<header className="py-20 text-center">
				<h1 className="text-5xl font-bold text-yellow-400">
					Violence Detection AI
				</h1>
				<p className="mt-4 text-lg text-gray-200">
					Machine Learning powered CCTV monitoring to detect and alert about
					violent activities in real time.
				</p>
				<button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300">
					Get Started
				</button>
			</header>

			{/* Features Section */}
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

			{/* Pricing Section */}
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
					{/* Basic Plan */}
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
						<p className="mt-2 text-3xl font-bold text-gray-200">$19/mo</p>
						<button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300">
							Subscribe
						</button>
					</div>

					{/* Pro Plan */}
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
						<p className="mt-2 text-3xl font-bold text-gray-200">$49/mo</p>
						<button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300">
							Subscribe
						</button>
					</div>

					{/* Enterprise Plan */}
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

			{/* Footer */}
			<footer className="py-4 text-center bg-gray-950">
				<p className="text-gray-400">
					&copy; 2024 BAIGAN. All Rights Reserved.
				</p>
			</footer>
		</div>
	);
}

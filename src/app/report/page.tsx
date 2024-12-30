"use client";

import { useState } from "react";
import Web3 from "web3";
import { jsPDF } from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";

const anomalyTypes = [
	"Violence",
	"Abuse",
	"Shoplifting",
	"Vandalism",
	"Harassment",
	"Fraud",
	"Cyberbullying",
];

const locationTypes = [
	"Home",
	"Work",
	"Public",
	"Festival",
	"School",
	"Online",
];

const ReportForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		location: "",
		description: "",
		anomalyType: "",
		imageUrl: "",
		locationType: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleAnomalyTypeChange = (type) => {
		setFormData({ ...formData, anomalyType: type });
	};

	const handleLocationTypeChange = (e) => {
		setFormData({ ...formData, locationType: e.target.value });
	};

	const generatePDF = () => {
		const doc = new jsPDF();
		doc.setFontSize(16);
		doc.setFont("times", "bold");
		doc.text(
			"Behaviour Anomaly Identification & Guarding through Artificial Network",
			10,
			20
		);

		// Add date
		doc.setFontSize(12);
		doc.setFont("times", "normal");

		const startX = 10;
		const startY = 30;
		const rowHeight = 10;
		const leftColWidth = 60; // 1/3rd width
		const rightColWidth = 120; // 2/3rd width

		const data = [
			["Date", new Date().toLocaleDateString()],
			["Time", new Date().toLocaleTimeString()],
			["Name", formData.name],
			["Location", formData.location],
			["Location Type", formData.locationType],
			["Anomaly Type", formData.anomalyType],
			["Description", formData.description],
		];

		let currentY = startY;

		data.forEach((row) => {
			const leftCellHeight = rowHeight; // Default cell height
			const wrappedText = doc.splitTextToSize(row[1], rightColWidth - 2); // Wrap text
			const rightCellHeight = wrappedText.length * 7;

			// Determine the tallest cell height for this row
			const cellHeight = Math.max(leftCellHeight, rightCellHeight);

			// Draw left cell with grey background
			doc.setFillColor(211, 211, 211); // Light grey
			doc.rect(startX, currentY, leftColWidth, cellHeight, "FD"); // Draw filled rectangle with border
			doc.setFont("times", "bold");
			doc.text(row[0], startX + 2, currentY + 7); // Add key text

			// Draw right cell
			doc.setDrawColor(0, 0, 0); // Black border
			doc.rect(startX + leftColWidth, currentY, rightColWidth, cellHeight); // Draw rectangle with border
			doc.setFont("times", "normal");
			doc.text(wrappedText, startX + leftColWidth + 2, currentY + 7);

			// Move to the next row
			currentY += cellHeight;
		});

		// Add image if provided
		if (formData.imageUrl) {
			doc.addImage(formData.imageUrl, "JPEG", 10, currentY + 10, 120, 90); // Adjust dimensions as needed
		}

		return doc.output("datauristring");
	};

	const submitForm = async () => {
		if (!window.ethereum) {
			alert("MetaMask is not installed. Please install MetaMask to proceed.");
			return;
		}

		try {
			setIsSubmitting(true);

			// MetaMask Transaction
			const web3 = new Web3(window.ethereum);
			await window.ethereum.request({ method: "eth_requestAccounts" });
			const accounts = await web3.eth.getAccounts();

			const gasFee = web3.utils.toWei("0.001", "ether"); // Example gas fee

			const tx = {
				from: accounts[0],
				to: "0xC7584fDDa402C2908AF794Cea82543bdAc8A64b7", // Replace with your contract address
				value: gasFee,
				gas: 21000,
			};

			await web3.eth.sendTransaction(tx);

			// Generate PDF after successful transaction
			const pdfData = generatePDF();
			window.open(pdfData); // Open the PDF in a new tab

			toast.success(
				"Complaint submitted successfully. Thank you for reporting."
			);
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error("Failed to submit complaint. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submitForm();
	};

	return (
		<div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col">
			<Navbar />
			<div className="flex justify-center items-center flex-grow">
				<div className="rounded-lg shadow-lg border border-gray-700 p-6 bg-gray-950 w-full max-w-3xl">
					<h1 className="text-2xl font-semibold mb-6 text-yellow-400">
						Report Anomaly
					</h1>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-medium">Name</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full bg-gray-800 text-gray-200 border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-medium">Location</label>
							<input
								type="text"
								name="location"
								value={formData.location}
								onChange={handleChange}
								required
								className="w-full bg-gray-800 text-gray-200 border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-medium">
								Location Type
							</label>
							<select
								name="locationType"
								value={formData.locationType}
								onChange={handleLocationTypeChange}
								required
								className="w-full bg-gray-800 text-gray-200 border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
							>
								<option value="">Select Location Type</option>
								{locationTypes.map((type) => (
									<option key={type} value={type}>
										{type}
									</option>
								))}
							</select>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-medium">
								Anomaly Type
							</label>
							<div className="flex flex-wrap gap-2">
								{anomalyTypes.map((type) => (
									<button
										key={type}
										type="button"
										className={`px-4 py-2 rounded transition-all duration-200 text-sm font-medium ${
											formData.anomalyType === type
												? "bg-yellow-400 text-gray-900"
												: "bg-gray-800 text-gray-200 hover:bg-yellow-400 hover:text-gray-900"
										}`}
										onClick={() => handleAnomalyTypeChange(type)}
									>
										{type}
									</button>
								))}
							</div>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-medium">
								Description
							</label>
							<textarea
								name="description"
								value={formData.description}
								onChange={handleChange}
								required
								rows="3"
								className="w-full bg-gray-800 text-gray-200 border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
							></textarea>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-medium">
								Image URL
							</label>
							<input
								type="text"
								name="imageUrl"
								value={formData.imageUrl}
								onChange={handleChange}
								placeholder="Enter image URL (e.g., GitHub raw URL)"
								className="w-full bg-gray-800 text-gray-200 border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
							/>
						</div>
						{formData.imageUrl && (
							<div className="mb-4 flex justify-center items-center">
								<img
									src={formData.imageUrl}
									alt="Preview"
									className="h-[300px] h-auto rounded"
								/>
							</div>
						)}
						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition-all duration-300"
						>
							{isSubmitting ? "Generating Report" : "Submit"}
						</button>
					</form>
				</div>
				<ToastContainer />
			</div>
		</div>
	);
};

export default ReportForm;

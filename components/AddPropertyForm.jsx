"use client";
import { useState } from "react";
import addProperty from "@/app/actions/addProperty";

const AddPropertyForm = () => {
	const [step, setStep] = useState(1);
	const totalSteps = 4;

	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	return (
		<div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
			{/* Progress Bar */}
			<div className="mb-8">
				<div className="flex justify-between mb-2">
					<span className="text-sm font-medium text-blue-600">
						Step {step} of {totalSteps}
					</span>
					<span className="text-sm font-medium text-blue-600">
						{Math.round((step / totalSteps) * 100)}%
					</span>
				</div>
				<div className="w-full bg-gray-200 rounded-full h-2">
					<div
						className="bg-gray-800 h-2 rounded-full transition-all duration-500"
						style={{ width: `${(step / totalSteps) * 100}%` }}
					></div>
				</div>
			</div>

			<form action={addProperty}>
				<h2 className="text-2xl font-bold mb-6 text-gray-800">
					{step === 1 && "Start with the basics"}
					{step === 2 && "Where is it located?"}
					{step === 3 && "Property details"}
					{step === 4 && "Final touches"}
				</h2>

				{/* STEP 1: BASICS */}
				<div className={step === 1 ? "space-y-4 animate-fadeIn" : "hidden"}>
					<div>
						<label className="block text-gray-700 font-bold mb-2">
							Property Type
						</label>
						<select
							name="type"
							className="border rounded-lg w-full py-2 px-3 focus:ring-2 focus:ring-blue-500 outline-none"
							required
						>
							<option value="Apartment">Apartment</option>
							<option value="Condo">Condo</option>
							<option value="House">House</option>
							<option value="Studio">Studio</option>
							<option value="Other">Other</option>
						</select>
					</div>
					<div>
						<label className="block text-gray-700 font-bold mb-2">
							Listing Name
						</label>
						<input
							type="text"
							name="name"
							className="border rounded-lg w-full py-2 px-3 focus:ring-2 focus:ring-blue-500 outline-none"
							placeholder="eg. Beautiful Apartment In Miami"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700 font-bold mb-2">
							Description
						</label>
						<textarea
							name="description"
							className="border rounded-lg w-full py-2 px-3 focus:ring-2 focus:ring-blue-500 outline-none"
							rows="4"
							placeholder="Optional description"
						></textarea>
					</div>
				</div>

				{/* STEP 2: LOCATION */}
				<div className={step === 2 ? "space-y-4 animate-fadeIn" : "hidden"}>
					<div className="bg-blue-50 p-4 rounded-lg space-y-3">
						<input
							type="text"
							name="location.street"
							className="border rounded-lg w-full py-2 px-3"
							placeholder="Street"
						/>
						<input
							type="text"
							name="location.city"
							className="border rounded-lg w-full py-2 px-3"
							placeholder="City"
							required
						/>
						<input
							type="text"
							name="location.state"
							className="border rounded-lg w-full py-2 px-3"
							placeholder="State"
							required
						/>
						<input
							type="text"
							name="location.zipcode"
							className="border rounded-lg w-full py-2 px-3"
							placeholder="Zipcode"
						/>
					</div>
				</div>

				{/* STEP 3: DETAILS & AMENITIES */}
				<div className={step === 3 ? "space-y-6 animate-fadeIn" : "hidden"}>
					<div className="flex gap-4">
						<div className="flex-1">
							<label className="block text-gray-700 font-bold mb-2">Beds</label>
							<input
								type="number"
								name="beds"
								className="border rounded-lg w-full py-2 px-3"
								required
							/>
						</div>
						<div className="flex-1">
							<label className="block text-gray-700 font-bold mb-2">
								Baths
							</label>
							<input
								type="number"
								name="baths"
								className="border rounded-lg w-full py-2 px-3"
								required
							/>
						</div>
						<div className="flex-1">
							<label className="block text-gray-700 font-bold mb-2">
								Area (sq ft)
							</label>
							<input
								type="number"
								name="square_feet"
								className="border rounded-lg w-full py-2 px-3"
								required
							/>
						</div>
					</div>
					<div>
						<label className="block text-gray-700 font-bold mb-2">
							Amenities
						</label>
						<div className="grid grid-cols-2 gap-2">
							{[
								"Wifi",
								"Full kitchen",
								"Free Parking",
								"Swimming Pool",
								"Gym",
								"Air Conditioning",
								"Washer & Dryer",
								"Pet Friendly",
								"Heating",
							].map((amenity, index) => (
								<label
									key={index}
									className="flex items-center space-x-2 cursor-pointer"
								>
									<input
										type="checkbox"
										name="amenities"
										value={amenity}
										className="w-4 h-4 text-green-600"
									/>
									<span>{amenity}</span>
								</label>
							))}
						</div>
					</div>
				</div>

				{/* STEP 4: SELLER & IMAGES */}
				<div className={step === 4 ? "space-y-4 animate-fadeIn" : "hidden"}>
					<div>
						<label className="block text-gray-700 font-bold mb-2">
							Seller Contact
						</label>
						<input
							type="text"
							name="seller_info.name"
							className="border rounded-lg w-full py-2 px-3 mb-2"
							placeholder="Name"
						/>
						<input
							type="email"
							name="seller_info.email"
							className="border rounded-lg w-full py-2 px-3"
							placeholder="Email"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700 font-bold mb-2">
							Phone Number
						</label>
						<input
							type="tel"
							name="seller_info.phone"
							className="border rounded-lg w-full py-2 px-3"
							placeholder="+90 (555) 555-5555"
						/>
					</div>
					<div className="mb-4 bg-blue-50 p-4">
						<label className="block text-gray-700 font-bold mb-2">
							Rates (Leave blank if not applicable)
						</label>
						<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
							<div className="flex items-center">
								<label className="mr-2">Weekly</label>
								<input
									type="number"
									id="weekly_rate"
									name="rates.weekly"
									className="border rounded w-full py-2 px-3"
								/>
							</div>
							<div className="flex items-center">
								<label className="mr-2">Monthly</label>
								<input
									type="number"
									id="monthly_rate"
									name="rates.monthly"
									className="border rounded w-full py-2 px-3"
								/>
							</div>
							<div className="flex items-center">
								<label className="mr-2">Nightly</label>
								<input
									type="number"
									id="nightly_rate"
									name="rates.nightly"
									className="border rounded w-full py-2 px-3"
								/>
							</div>
						</div>
					</div>
					<div>
						<label className="block text-gray-700 font-bold mb-2">
							Property Images
						</label>
						<div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
							<input
								type="file"
								id="images"
								name="images"
								className="border rounded w-full py-2 px-3"
								accept="image/*"
								multiple
								required
							/>
							<p className="text-xs text-gray-500 mt-2">
								Up to 4 images allowed
							</p>
						</div>
					</div>
				</div>

				{/* NAVIGATION BUTTONS */}
				<div className="mt-8 flex justify-between gap-4">
					{step > 1 && (
						<button
							type="button"
							onClick={prevStep}
							className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 text-gray-700 font-medium transition-all"
						>
							Back
						</button>
					)}

					{step < totalSteps ? (
						<button
							type="button"
							onClick={nextStep}
							className="ml-auto px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all"
						>
							Next
						</button>
					) : (
						<button
							type="submit"
							className="ml-auto px-8 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all"
						>
							Add Property
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default AddPropertyForm;

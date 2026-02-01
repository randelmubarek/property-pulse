import Image from "next/image";
import Link from "next/link";
import {
	FaBed,
	FaBath,
	FaRulerCombined,
	FaMapMarker,
	FaMoneyBill,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card"; // Removed duplicate cardContent

const Propertycard = ({ property }) => {
	const getPrice = () => {
		const rates = property.rates;
		if (rates.monthly) {
			return `$${rates.monthly.toLocaleString()}/mo`;
		} else if (rates.weekly) {
			return `$${rates.weekly.toLocaleString()}/wk`;
		} else if (rates.nightly) {
			// Fixed typo from rates.nighty to rates.nightly
			return `$${rates.nightly.toLocaleString()}/night`;
		}
	};

	// const getImageSrc = () => {
	// 	if (!property.images || property.images.length === 0) {
	// 		return "/images/no-image.png";
	// 	}

	// 	const firstImage = property.images[0];

	// 	if (firstImage.startsWith("http")) {
	// 		return firstImage; // ✅ This will work now!
	// 	}

	// 	return `/properties/${firstImage}`;
	// };

	return (
		<Card className="bg-white rounded-xl shadow-md relative">
			<Image
				// This check handles both old local strings and new Cloudinary URLs
				src={property.images[0]}
				alt={property.name}
				className="w-full h-[250px] object-cover rounded-t-xl"
				width={0}
				height={0}
				sizes="100vw"
				priority={true}
			/>
			<CardContent>
				<div className="p-4">
					<div className="text-left md:text-center lg:text-left mb-6">
						<div className="text-gray-600">{property.type}</div>
						<h3 className="text-xl font-bold">{property.name}</h3>
					</div>
					<h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
						{getPrice()}
					</h3>

					<div className="flex justify-center gap-4 text-gray-500 mb-4">
						<p>
							<FaBed className="inline-block mr-1" /> {property.beds}
							<span className="md:hidden lg:inline">Beds</span>
						</p>
						<p>
							<FaBath className="inline-block mr-1" /> {property.baths}
							<span className="md:hidden lg:inline">Baths</span>
						</p>
						<p>
							<FaRulerCombined className="inline-block mr-1" />
							{property.square_feet}
							<span className="md:hidden lg:inline">sqft</span>
						</p>
					</div>

					<div className="flex justify-center text-green-900 gap-4 text-sm mb-4">
						{/* Optional: Add conditional rendering so icons only show if rate exists */}
						{property.rates.weekly && (
							<p>
								{" "}
								<FaMoneyBill className="inline-block mr-1" /> Weekly
							</p>
						)}
						{property.rates.monthly && (
							<p>
								{" "}
								<FaMoneyBill className="inline-block mr-1" /> Monthly{" "}
							</p>
						)}
						{property.rates.nightly && (
							<p>
								{" "}
								<FaMoneyBill className="inline-block mr-1" /> Nightly{" "}
							</p>
						)}
					</div>

					<div className="border border-gray-100 mb-5"></div>

					<div className="flex flex-col lg:flex-row justify-between mb-4">
						<div className="flex align-middle gap-2 mb-4 lg:mb-0">
							<FaMapMarker className="text-lg text-orange-700 mt-1" />
							<span className="text-orange-700">
								{property.location.city}, {property.location.state}
							</span>
						</div>
						<Link
							href={`/properties/${property._id}`}
							className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
						>
							Details
						</Link>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default Propertycard;

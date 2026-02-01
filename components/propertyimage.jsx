import Image from "next/image";

const Propertyimage = ({ property }) => {
	return (
		<div className="flex-none w-full md:w-[31%] h-48 bg-gray-200 rounded-xl shadow-md overflow-hidden transition-all hover:scale-105 border-2 border-white">
			<div className="relative h-full w-full">
				<Image
					src={property.images[0]}
					alt="Property Preview"
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, 33vw"
					priority
				/>
				{/* Subtle overlay for a modern look */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
			</div>
		</div>
	);
};

export default Propertyimage;

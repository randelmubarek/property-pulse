import Propertyimage from "@/components/propertyimage";
import Property from "@/models/Property";
import connectDB from "@/config/database";
import AddPropertyForm from "@/components/AddPropertyForm";

const AddPropertyPage = async () => {
	await connectDB();

	// Fetch only the 3 most recent properties
	const recentProperties = await Property.find({})
		.sort({ createdAt: -1 }) // Sort by creation date descending
		.limit(3)
		.lean();

	return (
		<section className="bg-blue-50 py-10">
			<div className="container-xl lg:container m-auto">
				{/* Top Preview Section */}
				<div className="mb-6">
					<div className="flex flex-wrap md:flex-nowrap gap-2 justify-between">
						{recentProperties.map((property, index) => (
							<Propertyimage key={index} property={property} />
						))}
					</div>
					<h1 className="text-3xl text-center font-bold mb-2 mt-2 text-gray-700">
						Add Property
					</h1>
				</div>

				{/*Multi-Step Form Component */}
				<AddPropertyForm />
			</div>
		</section>
	);
};
export default AddPropertyPage;

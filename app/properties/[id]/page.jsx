import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import {FaArrowLeft , FaBed , FaBath , FaRulerCombined , FaMapMarker , FaMoneyBill, FaCheck , FaTimes , FaDollarSign} from "react-icons/fa"
import { Card , CardTitle , CardContent , CardDescription , CardHeader } from "@/components/ui/card";

const PropertyPage = async({ params }) => {
  const { id } = await params; // get the id from the params
  await connectDB();
  const property = await Property.findById(id).lean();
  
  const getPrice = (rates) => {
  if (rates.monthly) return `$${rates.monthly}/mo`;
  if (rates.weekly) return `$${rates.weekly}/wk`;
  if (rates.nightly) return `$${rates.nightly}/night`;
  return 'Price not available';
};

  return ( 
    <>
    <PropertyHeaderImage image={property.images[0]} />
    <Link href="/properties" className="flex items-center gap-2 text-blue-600 text-lg hover:text-black mt-4">
      <FaArrowLeft className="ml-16"/>
       Back to properties
    </Link>

    <section className=" bg-slate-200 mt-6"> 
      <div className="container m-auto py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        {/* Property Details */}
       <main>
  {/* Card 1: Property Name, Location & Price */}
  <Card className="mb-6">
    <CardHeader>
      <p className="text-gray-600 items-end"> {property.type}</p>
      <CardTitle className="text-2xl font-bold text-gray-700">
        {property.name}
      </CardTitle>
      <CardDescription className="text-lg text-orange-600 flex gap-2">
       <FaMapMarker className="text-orange-500" />  {property.location.city}, {property.location.state} , {property.location.street} 
      </CardDescription>
    </CardHeader>
    <CardContent>
      <h3 className="text-lg font-bold text-gray-600 mb-4 text-center bg-slate-100">
      Rates & Options
    </h3>
      <div className="text-3xl  py-3 px-6 flex justify-center gap-6 mb-6 ">
      <div className=" flex-col items-center text-center">
      <div className="text-lg">Nightly</div>
        {property.rates.nightly ? (
          <p className=' text-blue-600 bg-orange-100 font-boldrounded-xl rounded-xl shadow-md '> <FaDollarSign className="inline-block mr-1" />{getPrice({nightly: property.rates.nightly})} </p>
):( <FaTimes className="text-red-500"/> )}</div>
         <div className=" flex-col items-center text-center">
         <div className="text-lg">weekly</div>
        {property.rates.weekly?  ( 
          <p className=' text-blue-600 bg-orange-100 font-boldrounded-xl  rounded-xl  shadow-md '> <FaDollarSign className="inline-block mr-1" /> {getPrice({weekly: property.rates.weekly})} </p>
        ): ( <FaTimes className="text-red-500"/> )} </div>
        <div className=" flex-col items-center text-center">
          <div className="text-lg">monthly</div>
        {property.rates.monthly ? (
          <p className=' text-blue-600 bg-orange-100 font-boldrounded-xl  rounded-xl shadow-md '> <FaDollarSign className="inline-block mr-1" /> {getPrice({monthly: property.rates.monthly})} </p>
        ) : ( <FaTimes className="text-red-500 "/> )} </div>
      </div>


    </CardContent>
  </Card>

  {/* Card 2: Description & Details (Beds, Baths, Area) */}
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-gray-700">
        Description & Details
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-800 mb-6">{property.description}</p>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-gray-600 font-semibold mb-2">Bedrooms</p>
          <p className="text-2xl font-bold text-blue-600">{property.beds}</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-gray-600 font-semibold mb-2">Bathrooms</p>
          <p className="text-2xl font-bold text-blue-600">{property.baths}</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-gray-600 font-semibold mb-2">Area</p>
          <p className="text-2xl font-bold text-blue-600">
            {property.square_feet?.toLocaleString()} <span className="text-sm">sqft</span>
          </p>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Card 3: Amenities */}
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-gray-700">
        Amenities
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {property.amenities.map((amenity, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <FaCheck className="text-green-600 mr-2" />
            {amenity}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>

  {/* Additional cards can be added here */}
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-gray-700 flex gap-2">
       <FaMapMarker className="text-orange-500" />  Location
      </CardTitle>
    </CardHeader>
    <CardContent>
     
    </CardContent>
  </Card>
</main>

        {/* Sidebar */}
        <aside>
 
          </aside>
      </div>
      </div>
    </section>
    </>
  );
}
 
export default PropertyPage;

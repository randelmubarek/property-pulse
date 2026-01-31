
import Propertycard from '@/components/propertycard';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import Link from 'next/link';
const Homeproperties = async () => {
    await connectDB();
    const recentproperties = await Property.find({}).sort({createdAt : -1}).limit(3).lean(); // Fetch all properties from the database 
    //.lean() to convert Mongoose documents to plain JavaScript objects
    //sort by createdAt descending to get recent properties , -1 means descending order
    return (
        <>
    <section className="px-4 py-6">
      <div className="container lg:container m-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Recent Properties</h2>
        {recentproperties.length === 0 ? (
          <p>No properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
           
            {recentproperties.slice(0,3).map((property) => (
              <div key={property.id} className="border rounded-lg  shadow-lg">
                <Propertycard property={property} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
    <section>
        <div className="text-center mb-8">
            <Link href="/properties" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                View All Properties
            </Link>
        </div>
    </section>
 </>
   ); 
}
 
export default Homeproperties;
import properties2 from '@/properties2.json';
import Propertycard from '@/components/propertycard';
import Link from 'next/link';
const Homeproperties = () => {
    return (
        <>
    <section className="px-4 py-6">
      <div className="container lg:container m-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Recent Properties</h2>
        {properties2.length === 0 ? (
          <p>No properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
           
            {properties2.slice(0,3).map((property) => (
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
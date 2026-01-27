import React from 'react';
import properties2 from '@/properties2.json';
import Propertycard from '@/components/propertycard';


const PropertiesPage = () => {
  
  return (
    <section className="px-4 py-6">
      <div className="container lg:container m-auto px-4 py-6">
        {properties2.length === 0 ? (
          <p>No properties Found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {properties2.map((property) => (
              <div key={property.id} className="border rounded-lg overflow-hidden shadow-lg">
                <Propertycard property={property} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PropertiesPage;
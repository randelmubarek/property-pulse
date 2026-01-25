import React from 'react';
 import '@/properties2.json';

async function PropertiesPage() {
  const res = await fetch('/properties2.json');
  const properties = await res.json();

  console.log(properties);

  return (
    <div>Properties page</div>
  );
}
export default PropertiesPage;
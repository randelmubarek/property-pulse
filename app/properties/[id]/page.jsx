
const PropertyPage = async({params , searchParams}) => {
  const {id} = await params;
  const {name} = await searchParams;
    return ( <div>
        Property Page {id}
        heyy {name}
    
    </div> );
}
 
export default PropertyPage;
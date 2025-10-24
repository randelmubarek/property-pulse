import '@/assets/styles/globals.css';
export const metadata = {
    title: 'Property Pulse',
    keywords: 'Real Estate, Property Listings, Homes for Sale, Rent, Buy, Sell',
    description: 'Discover your dream home with Property Pulse - the ultimate real estate platform for buying, selling, and renting properties.',
}
const MainLayout = ({children}) => {
    return ( <html>
<body>
    <main>
        {children}
    </main>
</body>

    </html> );
}
 
export default MainLayout; 
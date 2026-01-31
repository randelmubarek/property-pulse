import "@/assets/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
	title: "Property Pulse",
	keywords: "Real Estate, Property Listings, Homes for Sale, Rent, Buy, Sell",
	description:
		"Discover your dream home with Property Pulse - the ultimate real estate platform for buying, selling, and renting properties.",
};
const MainLayout = ({ children }) => {
	return (
		<AuthProvider>
			<html>
				<body>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	);
};

export default MainLayout;

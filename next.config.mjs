/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			//allow loading images from googleusercontent.com for user profile pics
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				pathname: "**",
			},
			//allow loading images from cloudinary
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;

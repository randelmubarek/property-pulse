import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default cloudinary;
//this code is to configure cloudinary for image upload and management
// where will be used in other parts of the application to handle image uploads for property listings

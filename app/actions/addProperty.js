"use server";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache"; // to revalidate the path after adding a property
import { redirect } from "next/navigation"; // to redirect after adding a property
import cloudinary from "@/config/cloudinary";

async function addProperty(formData) {
	await connectDB();
	const sessionuser = await getSessionUser();
	if (!sessionuser || !sessionuser.userId) {
		throw new Error("User not authenticated");
	}
	const userId = sessionuser.userId; // get user id from session to associate with property

	// Upload images to Cloudinary FIRST
	const imageUrls = []; // ✅ Declare BEFORE using

	const amenities = formData.getAll("amenities");
	const images = formData.getAll("images").filter((image) => image.name !== ""); //filter out empty uploads
	for (const imageFile of images) {
		const imageBuffer = await imageFile.arrayBuffer(); // read file as array buffer
		const imageArray = Array.from(new Uint8Array(imageBuffer)); // convert to byte array so we can create buffer from it
		const imageData = Buffer.from(imageArray); // create buffer from byte array so we can upload to cloudinary

		//convert to base64 , cloudinary needs base64 string for upload
		const base64Image = imageData.toString("base64");

		//Make request to cloudinary
		const uploadResult = await cloudinary.uploader.upload(
			//upload from buffer
			`data:image/png;base64,${base64Image}`, // specify data type so cloudinary knows how to handle it
			{
				folder: "propertypulse", // specify folder in cloudinary
			},
		);

		imageUrls.push(uploadResult.secure_url); // store the secure url (Moved inside loop)
	}

	const propertyData = {
		Owner: userId,
		type: formData.get("type"),
		name: formData.get("name"),
		description: formData.get("description"),
		location: {
			street: formData.get("location.street"),
			city: formData.get("location.city"),
			state: formData.get("location.state"),
			zipcode: formData.get("location.zipcode"),
		},
		beds: formData.get("beds"),
		baths: formData.get("baths"),
		square_feet: formData.get("square_feet"),
		amenities,
		rates: {
			weekly: formData.get("rates.weekly"),
			monthly: formData.get("rates.monthly"),
			nightly: formData.get("rates.nightly"),
		},
		seller_info: {
			name: formData.get("seller_info.name"),
			email: formData.get("seller_info.email"),
			phone: formData.get("seller_info.phone"),
		},
		images: imageUrls,
	};

	propertyData.images = imageUrls; // associate image urls with property

	const newProperty = new Property(propertyData);
	await newProperty.save(); // save the property with image urls

	revalidatePath("/", "layout"); // revalidate the home page layout
	// FIX: Used backticks for interpolation
	redirect(`/properties/${newProperty._id}`); // redirect to the new property's detail page
}

export default addProperty;

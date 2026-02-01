//we are setting up authentication options for NextAuth.js using Google as the provider ,
// its in seperated file for better organization and maintainability
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				//this code is to get refresh token from google to keep the user logged in and avoid frequent logins
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
	callbacks: {
		//callbacks are functions that are called at specific points in the auth flow ,
		//Invoded on successful sign in
		async signIn({ profile }) {
			//1. Connect to database
			await connectDB();
			//2. Check if user exists
			const userExists = await User.findOne({ email: profile.email });
			//3. If not , create a new user
			if (!userExists) {
				//Truncate the name if its too long
				const name = profile.name.slice(0, 20);
				await User.create({
					email: profile.email,
					username: name,
					image: profile.picture,
				});
			}
			//4. Return true to sign in
			return true;
		},
		//Session callback function that modigies the session object (used when a session is checked/created)
		async session({ session }) {
			//1. Get the user from the database
			const user = await User.findOne({ email: session.user.email });
			//2. assign user id from the session
			session.user.id = user._id.toString(); //convert to string
			//3. return the session
			return session;
		},
	},
};

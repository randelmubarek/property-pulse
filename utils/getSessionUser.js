import { getServerSession } from "next-auth"; // to get the session user and check if logged in
import { authOptions } from "@/utils/authOptions"; // to get the auth options for next auth
//we want to get the owner of the session user to associate with created properties
export const getSessionUser = async () => {
	//to deploy to vercel we need to use getServerSession from next auth and remove try catch

	const session = await getServerSession(authOptions); //getserversession needs the auth options to work cuz it needs to know how to get the session
	if (!session || !session.user) {
		return null; // No user is logged in
	}
	return {
		user: session.user,
		userId: session.user.id,
	};
};

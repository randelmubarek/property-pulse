import authOptions from "@/utils/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions); // Initialize NextAuth with the provided options to handle authentication.
export { handler as GET, handler as POST }; // Export the handler for both GET and POST requests

"use client";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
	// children are the components wrapped by this provider in the app layout
	return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;

export { default as middleware } from "next-auth/middleware"; //to show sign in page if not signed in
export const config = {
	matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"], //protect these routes
};

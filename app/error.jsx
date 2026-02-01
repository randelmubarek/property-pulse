"use client";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
const Error = ({ error }) => {
	return (
		<Card className="max-w-md mx-auto mt-20 p-6 shadow-lg">
			<FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-4" />
			<CardTitle className="text-2xl font-bold text-center mt-4">
				something went wrong
			</CardTitle>
			<CardDescription className="text-center">
				<p className="text-lg">
					Sorry, the page you are looking for does not exist.
				</p>
				{error.toString()}
			</CardDescription>
		</Card>
	);
};

export default Error;

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Age Calculator App",
	description: "Front-End Mentor Challenge",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} min-h-screen bg-neutral-off-white md:mx-4 lg:mx-auto flex justify-center items-center`}
			>
				{children}
			</body>
		</html>
	);
}

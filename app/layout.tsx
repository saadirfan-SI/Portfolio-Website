import type { Metadata } from "next"; // Importing type Metadata from Next.js
import { Inter } from "next/font/google"; // Importing Inter font from Google Fonts in Next.js
import "./globals.css"; // Importing global CSS styles
import StarsCanvas from "@/components/main/StarBackground"; // Importing StarsCanvas component
import Navbar from "@/components/main/Navbar"; // Importing Navbar component
import Footer from "@/components/main/Footer"; // Importing Footer component

const inter = Inter({ subsets: ["latin"] }); // Initializing Inter font with Latin subset

export const metadata: Metadata = { // Exporting metadata for the page
  title: "Space Portfolio", // Setting page title
  description: "This is my portfolio", // Setting page description
};

export default function RootLayout({ // Exporting default function RootLayout
  children, // Destructuring children as a prop
}: {
  children: React.ReactNode; // Type definition for children prop
}) {
  return ( // Returning JSX for the RootLayout component
    <html lang="en"> {/* HTML element with lang attribute set to "en" */}
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}> {/* Body element with dynamic class names */}
        <StarsCanvas /> {/* Rendering StarsCanvas component */}
        <Navbar /> {/* Rendering Navbar component */}
        {children} {/* Rendering children components */}
        <Footer /> {/* Rendering Footer component */}
      </body>
    </html>
  );
}

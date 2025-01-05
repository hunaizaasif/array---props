import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import CommentSec from "./Component/CommentSec";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog Website", 
  description: "Generated by create next app with Sanity", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
       
        {children}
        <CommentSec/>
        <Footer/>
        </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ECOSHINE VAUGHAN",
  description: "Premium Cleaning Service",
  icons: { icon: "/latestecoshinelogo.png" },
  openGraph: {
    title: "ECOSHINE VAUGHAN",
    description: "Professional cleaning and detailing in Vaughan.",
    url: "https://ecoshinevaughan.ca",
    siteName: "ECOSHINE VAUGHAN",
    images: [
      {
        url: "/latestecoshinelogo.png", // must be in /public
        width: 800,
        height: 600,
        alt: "ECOSHINE VAUGHAN Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECOSHINE VAUGHAN",
    description: "Professional cleaning and detailing in Vaughan.",
    images: ["/latestecoshinelogo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import {Cormorant_Garamond} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "DBrand Marketplace",
  description:
    "DBrand Marketplace is the official web app for requesting and purchasing bespoke outfits from your trusted tailor.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="font-serif antialiased text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

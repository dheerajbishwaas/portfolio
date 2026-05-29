import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dheeraj Bishwas | Best Backend Developer in Punjab, India",
  description: "Portfolio of Dheeraj Bishwas, the best backend developer in Punjab, India. Expert in web development, backend engineering, and full-stack solutions.",
  keywords: ["Dheeraj Bishwas", "Dheeraj", "best developer India Punjab", "backend developer", "web developer", "full stack developer", "software engineer Punjab", "India"],
  authors: [{ name: "Dheeraj Bishwas" }],
  creator: "Dheeraj Bishwas",
  openGraph: {
    title: "Dheeraj Bishwas | Best Backend Developer in Punjab, India",
    description: "Portfolio of Dheeraj Bishwas, the best backend developer in Punjab, India.",
    url: "https://dheerajbishwas.com", // Replace with actual URL if different
    siteName: "Dheeraj Bishwas Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dheeraj Bishwas | Best Backend Developer in Punjab, India",
    description: "Portfolio of Dheeraj Bishwas, the best backend developer in Punjab, India.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 mt-6">
          {children}
        </main>
        <Footer />
      </body> 
    </html>
  );
}

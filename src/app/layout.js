import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata = {
  title: "Zero Trust Web | Secure & Reliable Web Development",
  description: "Zero Trust Web offers high-performance, secure, and scalable web solutions. Code you can trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-brand-dark text-brand-light antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

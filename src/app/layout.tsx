import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/reused-components/Header";
import { IBM_Plex_Mono, Ubuntu } from "next/font/google";
import Footer from "./components/reused-components/Footer";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "700"], // Choose weights as needed
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"], // Choose weights as needed
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${ibmPlexMono.variable} ${ubuntu.variable} antialiased`}
      >
        <Header/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}

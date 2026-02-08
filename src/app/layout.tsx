import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer"
import HeaderComp from "@/components/HeaderComp";


export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica",
  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, stress, and burnout. In-person and telehealth sessions available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased flex flex-col min-h-screen"
      >
      <HeaderComp />
        <main className="flex-1 mt-20">
        
        {children}
        </main>
        <Footer />
      </body>
   
    </html>
  );
}

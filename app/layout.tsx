import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./compontents/Navbar";
import Footer from "./compontents/Footer";

const cinzel = localFont({
  src: [
    {
      path: "./fonts/Cinzel-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Cinzel-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Cinzel-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Cinzel-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Cinzel-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Cinzel-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
  ],

  variable: "--font-cinzel",
});
const cormorant = localFont({
  src: [
    {
      path: "./fonts/Cormorant-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Cormorant-SemiBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Cormorant-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Cormorant-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Cormorant-Light.ttf",
      weight: "200",
      style: "normal",
    },
  ],

  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Grof's Jewlery | Handmade paper jewlery",
  description: "Handmade Paper Jewlery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${cinzel.variable} ${cormorant.variable} bg-bgColor text-textColor antialiased`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

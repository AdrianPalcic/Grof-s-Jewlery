import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./compontents/Navbar";
import Footer from "./compontents/Footer";
import Note from "./compontents/Note";
import { Analytics } from "@vercel/analytics/next";
import CookieConsentBanner from "./components/CookieConsentBanner";

const cinzel = localFont({
  src: [
    { path: "./fonts/Cinzel-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/Cinzel-Bold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/Cinzel-ExtraBold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Cinzel-Medium.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Cinzel-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Cinzel-SemiBold.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-cinzel",
});

const cormorant = localFont({
  src: [
    { path: "./fonts/Cormorant-Bold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/Cormorant-SemiBold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Cormorant-Medium.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Cormorant-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Cormorant-Light.ttf", weight: "200", style: "normal" },
  ],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Grof's Jewelry | Handmade Unique Gifts",
  description: "Handmade Paper Jewelry",
  metadataBase: new URL("https://grofsjewelry.com"),
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content={metadata.description!} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        suppressHydrationWarning
        className={`${cinzel.variable} ${cormorant.variable} bg-bgColor text-textColor antialiased`}
      >
        <Note />
        <Navbar />
        {children}
        <Analytics />
        <CookieConsentBanner />
        <Footer />
      </body>
    </html>
  );
}

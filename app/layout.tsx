import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./compontents/Navbar";
import Footer from "./compontents/Footer";

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
  title: "Grof's Jewelry | Handmade Paper Jewelry",
  description: "Handmade Paper Jewelry",
};

type LinkItem = {
  href: string;
  targetHints?: Record<string, any>; // opcionalno, ovisi što vraća API
};

type CategoryLinks = {
  self: LinkItem[];
  collection: LinkItem[];
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  count: number;
  image: string | null;
  menu_order: number;
  children: Category[];
  _links: CategoryLinks;
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let topLevelCategories: Category[] = [];

  try {
    const res = await fetch("http://localhost:3000/api/wc-categories", {
      next: { revalidate: 3600 }, // cache 1h
    });

    if (res.ok) {
      const categories: Category[] = await res.json();

      const categoriesMap: Record<number, Category> = {};
      categories.forEach((cat) => {
        categoriesMap[cat.id] = { ...cat, children: [] };
      });

      categories.forEach((cat) => {
        if (cat.parent === 0) {
          topLevelCategories.push(categoriesMap[cat.id]);
        } else if (categoriesMap[cat.parent]) {
          categoriesMap[cat.parent].children.push(categoriesMap[cat.id]);
        }
      });

      topLevelCategories = topLevelCategories.filter(
        (cat) => cat.name !== "Uncategorized"
      );
      console.log(topLevelCategories);
    } else {
      console.error("Proxy fetch error:", await res.text());
    }
  } catch (err) {
    console.error("Error fetching categories via proxy:", err);
  }

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
        <Navbar categories={topLevelCategories} />
        {children}
        <Footer categories={topLevelCategories} />
      </body>
    </html>
  );
}

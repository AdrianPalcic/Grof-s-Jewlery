import React from "react";
import SubcategorySection from "../components/SubcategorySection";
import { Product } from "@/types/types";
import { getProductsByTag } from "@/lib/shopify/productsByTag";

export const metadata = {
  title: "Grof's Jewlery | Dodaci Poklonima",
  description:
    "Otkrijte dodatke za poklone u Grof's Jewlery webshopu – čestitke, zahvalnice i dekoracije kutija i vrečica.",
  openGraph: {
    title: "Grof's Jewlery | Dodaci Poklonima",
    description:
      "Otkrijte dodatke za poklone u Grof's Jewlery webshopu – čestitke, zahvalnice i dekoracije kutija i vrečica.",
    url: "https://grof-s-jewlery.vercel.app/kategorije/dodaci-poklonima",
    siteName: "Grof's Jewlery",
    images: [
      {
        url: "/hero-home.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grof's Jewlery | Dodaci Poklonima",
    description:
      "Otkrijte dodatke za poklone u Grof's Jewlery webshopu – čestitke, zahvalnice i dekoracije kutija i vrečica.",
    images: ["/hero-home.png"],
  },
};

const page = async () => {
  const categorySlug = "dodaci-poklonima";

  const subCategories = [
    { text: "Čestitke", slug: "cestitke" },
    { text: "Zahvalnice", slug: "zahvalnice" },
    {
      text: "Dekoracije kutija i vrečica",
      slug: "dekoracije-kutija-i-vrecica",
    },
  ];

  const subcategoriesWithProducts = await Promise.all(
    subCategories.map(async (subcategory) => {
      const products: Product[] = await getProductsByTag(5, subcategory.slug);
      return { ...subcategory, products };
    })
  );

  return (
    <main className="mx-auto mt-10 mb-20 px-4 sm:px-10">
      <h1 className="text-3xl sm:text-5xl mb-10">
        Dodaci <span className="acc">Poklonima</span>
      </h1>
      {subcategoriesWithProducts.map((subcategory) => (
        <SubcategorySection
          key={subcategory.slug}
          text={subcategory.text}
          slug={subcategory.slug}
          category={categorySlug}
          products={subcategory.products}
        />
      ))}
    </main>
  );
};

export default page;

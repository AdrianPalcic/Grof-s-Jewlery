import React from "react";
import SubcategorySection from "../components/SubcategorySection";
import { Product } from "@/types/types";
import { getProductsByTag } from "@/lib/shopify/productsByTag";

export const metadata = {
  title: "Grof's Jewelry | Gift Boxes",
  description:
    "Otkrijte našu kolekciju Gift Boxeva – savršeni pokloni za svaku prigodu u Grof's Jewelry webshopu.",
  openGraph: {
    title: "Grof's Jewelry | Gift Boxes",
    description:
      "Otkrijte našu kolekciju Gift Boxeva – savršeni pokloni za svaku prigodu u Grof's Jewelry webshopu.",
    url: "https://grofsjewelry.com/kategorije/gift-boxes",
    siteName: "Grof's Jewelry",
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
    title: "Grof's Jewelry | Gift Boxes",
    description:
      "Otkrijte našu kolekciju Gift Boxeva – savršeni pokloni za svaku prigodu u Grof's Jewelry webshopu.",
    images: ["/hero-home.png"],
  },
};

const page = async () => {
  const categorySlug = "gift-boxes";
  const subCategories = [
    { text: "Zimski gift boxevi", slug: "zimski-gift-boxevi" },
    { text: "Jesenski gift boxevi", slug: "jesenski-gift-boxevi" },
    { text: "Božićni gift boxevi", slug: "bozicni-gift-boxevi" },
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
        Gift <span className="acc">Boxes</span>
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

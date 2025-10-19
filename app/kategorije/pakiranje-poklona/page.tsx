import React from "react";
import SubcategorySection from "../components/SubcategorySection";
import { Product } from "@/types/types";
import { getProductsByTag } from "@/lib/shopify/productsByTag";

export const metadata = {
  title: "Grof's Jewlery | Pakiranje Poklona",
  description:
    "Otkrijte Grof's Jewlery – kutije i vrećice za poklone, idealne za personalizirane poklone i unikatna pakiranja.",
  openGraph: {
    title: "Grof's Jewlery | Pakiranje Poklona",
    description:
      "Otkrijte Grof's Jewlery – kutije i vrećice za poklone, idealne za personalizirane poklone i unikatna pakiranja.",
    url: "https://grof-s-jewlery.vercel.app/kategorije/pakiranje-poklona",
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
    title: "Grof's Jewlery | Pakiranje Poklona",
    description:
      "Otkrijte Grof's Jewlery – kutije i vrećice za poklone, idealne za personalizirane poklone i unikatna pakiranja.",
    images: ["/hero-home.png"],
  },
};

const page = async () => {
  const categorySlug = "pakiranje-poklona";

  const subCategories = [
    { text: "Kutije za poklone", slug: "kutije-za-poklone" },
    { text: "Vrečice za poklone", slug: "vrecice-za-poklone" },
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
        Pakiranje <span className="acc">Poklona</span>
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

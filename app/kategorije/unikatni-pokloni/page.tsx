import React from "react";
import SubcategorySection from "../components/SubcategorySection";
import { Product } from "@/types/types";
import { getProductsByTag } from "@/lib/shopify/productsByTag";

export const metadata = {
  title: "Grof's Jewelry | Unikatni Pokloni",
  description:
    "Otkrijte Grof's Jewelry – unikatni pokloni, okviri, dekorativne vaze, platna i drvene škrinjice za posebne trenutke.",
  openGraph: {
    title: "Grof's Jewelry | Unikatni Pokloni",
    description:
      "Otkrijte Grof's Jewelry – unikatni pokloni, okviri, dekorativne vaze, platna i drvene škrinjice za posebne trenutke.",
    url: "https://grofsjewelry.com/kategorije/unikatni-pokloni",
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
    title: "Grof's Jewelry | Unikatni Pokloni",
    description:
      "Otkrijte Grof's Jewelry – unikatni pokloni, okviri, dekorativne vaze, platna i drvene škrinjice za posebne trenutke.",
    images: ["/hero-home.png"],
  },
};

const page = async () => {
  const categorySlug = "unikatni-pokloni";

  const subCategories = [
    { text: "Okviri za slike", slug: "okviri-za-slike" },
    {
      text: "Dekorativne vaze i teglice",
      slug: "dekorativne-vaze-i-teglice",
    },
    {
      text: "Dekorativna slikarska platna",
      slug: "dekorativne-slikarska-platna",
    },
    { text: "Dekoracije za dom", slug: "dekoracije-za-dom" },
    { text: "Magneti", slug: "magneti" },
    { text: "Notesi", slug: "notesi" },
    { text: "Drvene škrinjice", slug: "drvene-skrinjice" },
    { text: "Knjižne oznake", slug: "knjizne-oznake" },
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
        Unikatni <span className="acc">Pokloni</span>
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

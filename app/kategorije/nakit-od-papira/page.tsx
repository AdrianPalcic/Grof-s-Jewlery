import React from "react";
import SubcategorySection from "../components/SubcategorySection";
import { Product } from "@/types/types";
import { getProductsByTag } from "@/lib/shopify/productsByTag";

export const metadata = {
  title: "Grof's Jewelry | Nakit od Papira",
  description:
    "Otkrijte Grof's Jewelry – unikatni nakit od papira, uključujući naušnice, broševe, prstenje i ogrlice.",
  openGraph: {
    title: "Grof's Jewelry | Nakit od Papira",
    description:
      "Otkrijte Grof's Jewelry – unikatni nakit od papira, uključujući naušnice, broševe, prstenje i ogrlice.",
    url: "https://grof-s-Jewelry.vercel.app/kategorije/nakit-od-papira",
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
    title: "Grof's Jewelry | Nakit od Papira",
    description:
      "Otkrijte Grof's Jewelry – unikatni nakit od papira, uključujući naušnice, broševe, prstenje i ogrlice.",
    images: ["/hero-home.png"],
  },
};

const page = async () => {
  const categorySlug = "nakit-od-papira";

  const subCategories = [
    { text: "Naušnice", slug: "nausnice" },
    { text: "Broševi", slug: "brosevi" },
    { text: "Prstenje", slug: "prstenje" },
    { text: "Ogrlice", slug: "ogrlice" },
    { text: "Grof's special edition", slug: "grof-special-edition" },
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
        Nakit od <span className="acc">Papira</span>
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

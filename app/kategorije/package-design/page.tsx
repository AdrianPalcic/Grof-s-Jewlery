import React from "react";
import SubcategorySection from "../components/SubcategorySection";
import { Product } from "@/types/types";
import { getProductsByTag } from "@/lib/shopify/productsByTag";

const page = async () => {
  const categorySlug = "package-design";

  const subCategories = [
    { text: "Unique business kartice", slug: "unique-business-kartice" },
    { text: "Thank you kartice", slug: "thank-you-kartice" },
    { text: "Pozivnice i zahvalnice", slug: "pozivnice-i-zahvalnice" },
    { text: "Kutije za proizvode", slug: "kutije-za-proizvode" },
    { text: "Vrečice za proizvode", slug: "vrecice-za-proizvode" },
    {
      text: "Dekoriranje pakirne ambalaže",
      slug: "dekoriranje-pakirne-ambalaze",
    },
    { text: "Znak pažnje za goste", slug: "znak-paznje-za-goste" },
    { text: "Korporativni gift boxes", slug: "korporativni-gift-boxes" },
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
        Package <span className="acc">Design</span>
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

import React from "react";
import SubcategorySection from "../components/SubcategorySection";
import { Product } from "@/types/types";
import { getProductsByTag } from "@/lib/shopify/productsByTag";

const page = async () => {
  const categorySlug = "pokloni";

  const subCategories = [
    { text: "Okviri za slike", slug: "okviri-za-slike" },
    { text: "Mala slikarska platna", slug: "mala-slikarska-platna" },
    { text: "Dekorativne vaze", slug: "dekorativne-vaze" },
    { text: "Dekorativne teglice", slug: "dekorativne-teglice" },
    { text: "Magneti", slug: "magneti" },
    { text: "Notesi", slug: "notesi" },
    { text: "Drvene kutije", slug: "drvene-kutije" },
    { text: "Dekoracije za dom", slug: "dekoracije-za-dom" },
    { text: "Mikrobuketi", slug: "mikrobuketi" },
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
        <span className="acc">Pokloni</span>
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

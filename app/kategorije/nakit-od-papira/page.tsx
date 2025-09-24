import React from "react";
import SubcategorySection from "../components/SubcategorySection";
import { Product } from "@/types/types";
import { getProductsByTag } from "@/lib/shopify/productsByTag";

const page = async () => {
  const categoryName = "Nakit od papira";

  const subCategories = [
    { text: "Naušnice i ukosnice", slug: "nausnice-ukosnice" },
    { text: "Broševi", slug: "brosevi" },
    { text: "Prstenje", slug: "prstenje" },
    { text: "Ukosnice", slug: "ukosnice" },
    { text: "Ogrlice", slug: "ogrlice" },
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
          category={categoryName}
          products={subcategory.products}
        />
      ))}
    </main>
  );
};

export default page;

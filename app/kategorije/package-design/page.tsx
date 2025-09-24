import React from "react";
import SubcategorySection from "../components/SubcategorySection";
import { Product } from "@/types/types";
import { getProductsByTag } from "@/lib/shopify/productsByTag";

const page = async () => {
  const categoryName = "Package Design";

  const subCategories = [
    { text: "Handcrafted vizitke", slug: "handcrafted-vizitke" },
    { text: "Poklon paketići", slug: "poklon-paketici" },
    { text: "Zahvalnice za goste", slug: "zahvalnice-za-goste" },
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
        Pakcage <span className="acc">Design</span>
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

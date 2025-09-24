import React from "react";
import SubcategorySection from "../components/SubcategorySection";

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
      {/* {subCategories.map((subcategory) => (
        <SubcategorySection key={subcategory} name={subcategory} />
      ))} */}
    </main>
  );
};

export default page;

import React from "react";
import SubcategorySection from "../components/SubcategorySection";

const page = () => {
  const subCategories = [
    { text: "Kutije za poklone", slug: "kutije-za-poklone" },
    { text: "Vrečice za poklone", slug: "vrecice-za-poklone" },
  ];

  return (
    <main className="mx-auto mt-10 mb-20 px-4 sm:px-10">
      <h1 className="text-3xl sm:text-5xl mb-10">
        Pakiranje <span className="acc">Poklona</span>
      </h1>
      {/* {subCategories.map((subcategory) => (
        <SubcategorySection key={subcategory} name={subcategory} />
      ))} */}
    </main>
  );
};

export default page;

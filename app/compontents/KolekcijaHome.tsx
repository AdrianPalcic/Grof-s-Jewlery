import Link from "next/link";
import React from "react";
import ButtonMain from "./ButtonMain";

const KolekcijaHome = async () => {
  let brand;

  try {
    const res = await fetch("http://localhost:3000/api/brands", {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      brand = await res.json();
      if (brand.length > 0) {
        brand = brand[0];
      }
    } else {
      console.error("Failed to Fetch Brand", await res.text());
      return null;
    }
  } catch (error) {
    console.error("Error fetching brand via proxy:", error);
    return null;
  }

  return (
    <section className="flex flex-col lg:flex-row px-2 sm:px-10 items-center  gap-10 mx-auto mb-20">
      <div className="flex-1">
        <h2 className="text-center sm:text-left text-3xl mb-4 border-b-2 border-solid border-secondaryColor">
          {brand.name}
        </h2>
        <p className="text-xl text-black mb-4">{brand.description}</p>
        <Link
          href={`/kolekcije/${brand.slug}`}
          className="flex justify-center sm:justify-normal"
        >
          <ButtonMain text="Pregledajte Proizvode" />
        </Link>
      </div>
      <div className="flex-1 w-full">
        <img
          src={brand?.image?.src}
          alt={brand?.image?.alt}
          className="w-full h-full object-cover max-h-[700px]"
        />
      </div>
    </section>
  );
};

export default KolekcijaHome;

"use client";

import ButtonMain from "@/app/compontents/ButtonMain";
import GhostButton from "@/app/compontents/GhostButton";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubcategorySection = ({
  text,
  slug,
  category,
  products,
}: {
  text: string;
  slug: string;
  category: string;
  products: Product[];
}) => {
  function formatName(slug: string) {
    return slug
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  }

  return (
    <section className="flex flex-col mb-6">
      <h1 className="text-2xl sm:text-4xl mb-4">{text}</h1>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory mb-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-none w-full smm:w-[300px] snap-start"
          >
            <Link
              href={`/proizvodi/${product.handle}`}
              className="overflow-hidden block"
            >
              <img
                src={product.featuredImage?.url || "/placeholder.png"}
                alt={product.featuredImage?.altText || product.title}
                loading="lazy"
                className="w-full h-[300px] object-cover transition-opacity duration-300 hover:opacity-70"
              />
            </Link>
            <div className="flex flex-col items-start justify-start w-full mt-2">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="mb-2">
                {" "}
                {"€" + product.priceRange.minVariantPrice.amount}
              </p>
              <GhostButton text="Dodaj u košaricu" />
            </div>
          </div>
        ))}
      </div>

      <Link href={`/kategorije/${category}/${slug}`}>
        <ButtonMain text="Svi Artikli" />
      </Link>
    </section>
  );
};

export default SubcategorySection;

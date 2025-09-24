import { Product } from "@/types/types";
import React from "react";
import GhostButton from "./GhostButton";

const ItemGridPlaceholder = ({ products }: { products: Product[] }) => {
  return (
    <section id="item-grid" className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
        {products.map((product) => (
          <div key={product.id}>
            <div className="overflow-hidden">
              <img
                src={product.featuredImage?.url || "/placeholder.png"}
                alt={product.featuredImage?.altText || product.title}
                className="w-full min-h-[250px] h-[300px] object-cover transition-opacity duration-300 hover:opacity-70"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="mt-2 text-xl font-semibold">{product.title}</h2>
              <p className="mb-2">
                {"€" + product.priceRange.minVariantPrice.amount}
              </p>
              <GhostButton text="Dodaj u košaricu" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemGridPlaceholder;

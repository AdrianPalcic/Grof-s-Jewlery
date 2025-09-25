import { Product } from "@/types/types";
import React from "react";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";

const ItemGrid = ({ products }: { products: Product[] }) => {
  return (
    <section id="item-grid" className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
        {products.map((product) => (
          <div key={product.id}>
            <Link
              href={`/proizvodi/${product.handle}`}
              className="overflow-hidden"
            >
              <img
                src={product.featuredImage?.url || "/placeholder.png"}
                alt={product.featuredImage?.altText || product.title}
                loading="lazy"
                className="w-full min-h-[250px] h-[300px] object-cover transition-opacity duration-300 hover:opacity-70 "
              />
            </Link>
            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="mt-2 text-xl font-semibold">{product.title}</h2>
              <p className="mb-2 text-xl font-cormorant">
                {"€" + product.priceRange.minVariantPrice.amount}
              </p>
              <AddToCartBtn product={product} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemGrid;

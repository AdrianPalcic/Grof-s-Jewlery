import { Product } from "@/types/types";
import React from "react";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import Image from "next/image";

const ItemGrid = ({ products }: { products: Product[] }) => {
  return (
    <section id="item-grid" className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6">
        {products.map((product) => (
          <div key={product.id}>
            <Link
              href={`/proizvodi/${product.handle}`}
              className="overflow-hidden relative"
            >
              <Image
                src={product.featuredImage?.url || "/placeholder.png"}
                alt={product.featuredImage?.altText || product.title}
                loading="lazy"
                className="w-full min-h-[150px] h-[250px] object-cover transition-opacity duration-300 hover:opacity-70 "
                width={150}
                height={250}
              />
              {product.availableForSale === false ? (
                <span className="sold-out">Rasprodano</span>
              ) : (
                ""
              )}
            </Link>
            <div className="flex flex-col items-start justify-start w-full">
              <Link href={`/proizvodi/${product.handle}`}>
                <h2 className="mt-2 text-lg font-semibold  duration-200 transition-colors hover:text-secondaryColor">
                  {product.title}
                </h2>
              </Link>
              <p className="mb-2 text-sm font-cormorant">
                {"€" + product.priceRange.minVariantPrice.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemGrid;

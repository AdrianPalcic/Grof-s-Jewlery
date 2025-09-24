import { Product } from "@/types/types";
import Link from "next/link";
import React from "react";

const Bestsellers = ({ products }: { products: Product[] }) => {
  if (!products || products.length < 5) return null;

  const [first, ...rest] = products;

  return (
    <section className="section">
      <h2 className="sec-h2">Istaknuti Proizvodi</h2>
      <p className="text-center mb-5">
        Otkrijte najomiljenije komade koje naše mušterije jednostavno obožavaju.
      </p>
      <div className="flex flex-col mdd:flex-row gap-4 mdd:max-w-9xl mx-auto">
        <Link
          href={`/proizvodi/${first.handle}`}
          className="flex-1 overflow-hidden"
        >
          <img
            src={first.featuredImage?.url || "/placeholder.png"}
            alt={first.featuredImage?.altText || first.title}
            className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
          />
        </Link>

        {/* Grid of 4 smaller images */}
        <div className="flex-1 flex flex-wrap gap-4">
          {rest.slice(0, 4).map((product) => (
            <Link
              key={product.id}
              href={`/proizvodi/${product.handle}`}
              className="w-full smm:w-[48%] overflow-hidden"
            >
              <img
                src={product.featuredImage?.url || "/placeholder.png"}
                alt={product.featuredImage?.altText || product.title}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;

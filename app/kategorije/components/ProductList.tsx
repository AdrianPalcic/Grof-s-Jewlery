"use client";

import React, { useState } from "react";
import { Product } from "@/types/types";
import { getProductsByTagPaginated } from "@/lib/shopify/getProductsPaginated";
import ItemGrid from "@/app/compontents/ItemGrid";
import Link from "next/link";

interface Props {
  initialProducts: Product[];
  initialTag: string;
}

const ProductList = ({ initialProducts, initialTag }: Props) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [lastCursor, setLastCursor] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const tag = initialTag;

  const loadMore = async () => {
    if (!hasNextPage) return;
    setLoading(true);

    try {
      const {
        products: newProducts,
        endCursor,
        hasNextPage: nextPage,
      } = await getProductsByTagPaginated(25, tag, lastCursor || undefined);

      setProducts((prev) => {
        // Deduplikacija po ID-u
        const all = [...prev, ...newProducts];
        return Array.from(new Map(all.map((p) => [p.id, p])).values());
      });

      setLastCursor(endCursor || null);
      setHasNextPage(nextPage);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ItemGrid products={products} />

      <div className="flex justify-center my-6">
        {hasNextPage ? (
          <button className="ghost" onClick={loadMore} disabled={loading}>
            {loading ? "Učitavanje..." : "Učitaj više proizvoda"}
          </button>
        ) : (
          <Link
            href="/"
            className="font-cormorant duration-200 transition-colors hover:text-secondaryColor"
          >
            Vidjeli ste sve proizvode
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductList;

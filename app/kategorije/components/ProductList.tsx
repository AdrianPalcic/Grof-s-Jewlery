"use client";

import React, { useState } from "react";
import { Product } from "@/types/types";
import { getProductsByTagPaginated } from "@/lib/shopify/getProductsPaginated";
import ItemGrid from "@/app/compontents/ItemGrid";

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
    setLoading(true);
    try {
      const {
        products: newProducts,
        endCursor,
        hasNextPage: nextPage,
      } = await getProductsByTagPaginated(25, tag, lastCursor || undefined);

      console.log("cursor prije slanja:", lastCursor);
      console.log("API returned:", newProducts);
      setProducts((prev) => {
        // Deduplikacija po ID-u
        const all = [...prev, ...newProducts];
        return Array.from(new Map(all.map((p) => [p.id, p])).values());
      });
      console.log(products);
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
      {products.length !== 0 ? (
        <ItemGrid products={products} />
      ) : (
        <div className="w-full mx-auto flex justify-center">
          <p>Nema proizvoda iz ove kategorije</p>
        </div>
      )}

      <div className="flex justify-center my-6">
        {hasNextPage && (
          <button onClick={loadMore} className="ghost">
            Učitaj još
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;

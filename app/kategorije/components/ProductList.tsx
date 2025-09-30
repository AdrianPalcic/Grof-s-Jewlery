"use client";

import React, { useState } from "react";
import { Product } from "@/types/types";
import { getProductsByTagPaginated } from "@/lib/shopify/getProductsPaginated";
import ItemGrid from "@/app/compontents/ItemGrid";

interface Props {
  initialProducts: Product[];
}

const ProductList: React.FC<Props> = ({ initialProducts }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [lastCursor, setLastCursor] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  const tag = "cestitke";

  const loadMore = async () => {
    if (!hasNextPage) return;
    setLoading(true);

    try {
      const {
        products: newProducts,
        endCursor,
        hasNextPage: nextPage,
      } = await getProductsByTagPaginated(20, tag, lastCursor || undefined);

      setProducts((prev) => [...prev, ...newProducts]);
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

      {hasNextPage && (
        <div className="flex justify-center mt-6">
          <button className="ghost" onClick={loadMore} disabled={loading}>
            {loading ? "Učitavanje..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;

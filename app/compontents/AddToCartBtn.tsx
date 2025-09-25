"use client";

import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/types";
import React from "react";

const AddToCartBtn = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button className="ghost" onClick={() => addToCart(product)}>
      Dodaj u košaricu
    </button>
  );
};

export default AddToCartBtn;

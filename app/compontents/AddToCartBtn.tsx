"use client";

import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/types";
import React, { useState } from "react";
import Modal from "./Modal";

const AddToCartBtn = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  const addCart = (product: Product) => {
    const isSame = cart.find((p) => p.id === product.id);
    if (isSame) {
      setIsOpen(true);
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      <button className="ghost w-full" onClick={() => addCart(product)}>
        Dodaj u košaricu
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
};

export default AddToCartBtn;

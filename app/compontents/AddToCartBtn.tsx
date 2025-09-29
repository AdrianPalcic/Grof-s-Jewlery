"use client";

import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/types";
import React, { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

const AddToCartBtn = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  const addCart = () => {
    const isSame = cart.find((p) => p.id === product.id);
    if (isSame) {
      setIsOpen(true);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="relative w-full">
      <button className="ghost w-full" onClick={addCart}>
        Dodaj u košaricu
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-[260px] p-3 bg-bgColor border rounded shadow-lg z-50">
          <button
            className="absolute top-1 right-1"
            onClick={() => setIsOpen(false)}
          >
            <X size={16} />
          </button>
          <h2 className="font-semibold text-lg mt-2">
            Ovaj artikl Vam je već u košarici
          </h2>
          <p className="">
            Za više primjeraka molimo{" "}
            <Link href="/kontakt" className="text-secondaryColor underline">
              Kontaktirajte nas
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default AddToCartBtn;

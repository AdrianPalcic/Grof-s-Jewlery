import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/types";
import { Check, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartModal = ({ product }: { product: Product }) => {
  const closeModal = useCartStore((state) => state.closeModal);
  const cart = useCartStore((state) => state.cart);
  const cartLength = cart.length;

  // lokalni state da animira fade in kad se modal mounta
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`
        fixed inset-x-0 top-20 z-[1000] 
        w-full 
        md:absolute md:inset-x-auto md:right-10 md:w-[400px]
        transition-opacity duration-300 ease-out
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="bg-white p-4 rounded shadow-lg relative">
        <div className="flex w-full justify-between mb-4">
          <p className="text-[16px]">
            <Check size={20} className="inline-flex" /> artikl je dodan u
            košaricu
          </p>
          <button
            onClick={closeModal}
            className="text-textColor duration-300 transition-colors hover:text-secondaryColor"
          >
            <X size={20} />
          </button>
        </div>
        <div className="mt-1 flex gap-4">
          <Link href={`/proizvodi/${product.handle}`}>
            <img
              src={product.featuredImage?.url || "/placeholder.png"}
              alt={product.featuredImage?.altText || product.title}
              loading="lazy"
              className="w-[80px] h-[80px] object-cover"
            />
          </Link>
          <p className="font-semibold text-xl">
            <span className="acc">{product.title}</span> je u košarici
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4 w-full items-center">
          <Link
            href="/shopping-cart"
            className="w-full flex items-center justify-center"
          >
            <button className="ghost w-[80%]" onClick={closeModal}>
              <span className="text-sm">Košarica ({cartLength})</span>
            </button>
          </Link>
          <button
            onClick={closeModal}
            className="underline text-secondaryColor"
          >
            Nastavite s kupnjom
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

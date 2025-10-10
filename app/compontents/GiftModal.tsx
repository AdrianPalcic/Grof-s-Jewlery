import { useGiftStore } from "@/store/giftStore";
import { Product } from "@/types/types";
import { Check, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const GiftModal = ({ product }: { product: Product }) => {
  const closeModal = useGiftStore((state) => state.closeModal);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-20 z-[1000] 
      w-full md:absolute md:inset-x-auto md:left-10 md:w-[400px]
      transition-opacity duration-300 ease-out
      ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="bg-white p-4 rounded shadow-lg relative">
        <div className="flex w-full justify-between mb-4">
          <p className="text-[16px]">
            <Check size={20} className="inline-flex" /> artikl je dodan u gift
            box
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
            {product.productType !== "pakiranje-poklona" ? (
              <>
                <span className="acc">{product.title}</span> je dodan u gift box
              </>
            ) : (
              <>
                <span className="acc">{product.title}</span> je postavljen kao
                poklon pakiranje
              </>
            )}
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-4 w-full items-center">
          <Link
            href="/gift-box-builder"
            className="w-full flex items-center justify-center"
          >
            <button className="ghost w-[80%]" onClick={closeModal}>
              <span className="text-sm">Gift box</span>
            </button>
          </Link>
          <button
            onClick={closeModal}
            className="underline text-secondaryColor"
          >
            Nastavite s dodavanjem
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftModal;

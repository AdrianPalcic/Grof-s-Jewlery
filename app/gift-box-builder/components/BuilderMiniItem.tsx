"use client";

import { useGiftStore } from "@/store/giftStore";
import { Product } from "@/types/types";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BuilderMiniItem = ({ product }: { product: Product }) => {
  const removeItem = useGiftStore((state) => state.removeItem);

  return (
    <div className="flex gap-4">
      <Link href={`/proizvodi/${product.handle}`} className="w-[50px] h-[50px]">
        <Image
          src={product.featuredImage?.url || ""}
          alt={product.featuredImage?.altText || ""}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="flex flex-col justify-between">
        <p className="text-sm">{product.title}</p>
        <p className="text-sm">{product.priceRange.minVariantPrice.amount}€</p>
        <span onClick={() => removeItem(product.id)}>
          <Trash
            className="opacity-65 transition-all duration-300 hover:text-secondaryColor hover:opacity-100 cursor-pointer"
            size={12}
          />
        </span>
      </div>
    </div>
  );
};

export default BuilderMiniItem;

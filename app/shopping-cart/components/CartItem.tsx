"use client";

import { Product } from "@/types/types";
import { Trash } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const CartItem = ({ product }: { product: Product }) => {
  const deleteItem = (id: string) => {
    console.log(id);
  };

  return (
    <div
      id="item"
      className="w-full flex flex-col py-2 border-b border-gray-200"
    >
      {/* Glavni artikl */}
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-4">
          <Link href={`/proizvodi`} className="w-[100px] smm:w-[150px]">
            <img
              src="/1.png"
              alt="Artikl"
              className="w-full h-full object-cover"
            />
          </Link>

          <div className="flex flex-col gap-1 justify-between">
            <div>
              <h3 className="text-lg sm:text-xl">{product.title}</h3>
              <h3 className="text-[15px] smm:text-[16px]">
                {product.priceRange.minVariantPrice.amount}€
              </h3>
            </div>
            <div className="flex gap-1">
              <span onClick={() => deleteItem(product.id)}>
                <Trash
                  className="opacity-65 transition-all duration-300 hover:text-secondaryColor hover:opacity-100 cursor-pointer"
                  size={15}
                />
              </span>
            </div>
          </div>
        </div>

        {/* Cijena desno */}
        <div>
          <h3 className="text-lg sm:text-2xl">
            {product.priceRange.minVariantPrice.amount}€
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

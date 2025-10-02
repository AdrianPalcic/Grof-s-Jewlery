"use client";

import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/types";
import { Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartItem = ({ product }: { product: Product }) => {
  const deleteItem = useCartStore((state) => state.removeFromCart);

  return (
    <div id="item" className="w-full  py-2 ">
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-4 w-full h-full">
          <Link
            href={`/proizvodi/${product.handle}`}
            className="w-[100px] smm:w-[150px] h-[100px]"
          >
            <img
              src={product.featuredImage?.url}
              alt="Artikl"
              className="w-full h-full object-cover transition-opacity duration-200 hover:opacity-90"
            />
          </Link>

          <div className="flex flex-col gap-1 justify-between">
            <div>
              <h3 className="text-lg sm:text-xl">{product?.title}</h3>
              <h3 className="text-[15px] smm:text-[16px]">
                {product?.priceRange?.minVariantPrice?.amount}€
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
            {product?.priceRange?.minVariantPrice?.amount}€
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

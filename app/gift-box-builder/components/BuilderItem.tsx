"use client";

import { ChevronDown, ChevronUp, Trash } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import BuilderMiniItem from "./BuilderMiniItem";
import { Product } from "@/types/types";
import { useGiftStore } from "@/store/giftStore";

const BuilderItem = ({ item, price }: { item: Product; price: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const selectedItems = useGiftStore((state) => state.selectedItems);
  const resetGift = useGiftStore((state) => state.resetGift);
  return (
    <div className="flex justify-between items-center w-full py-2">
      <div className="flex gap-4 w-full h-full">
        <Link
          href={`/proizvodi/${item.handle}`}
          className="w-[100px] smm:w-[150px] h-[120px]"
        >
          <img
            src={item.featuredImage?.url}
            alt={item.featuredImage?.altText}
            className="w-full h-full object-cover transition-opacity duration-200 hover:opacity-90"
          />
        </Link>
        <div className="flex flex-col gap-1 justify-between">
          <div>
            <h3 className="text-lg sm:text-xl">{item.title}</h3>
            <h3 className="text-[15px] smm:text-[16px]">
              {item.priceRange.minVariantPrice.amount}€
            </h3>
            {selectedItems.length > 0 && (
              <>
                {" "}
                <button
                  className="flex text-sm font-cormorant items-center gap-1"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {!isVisible ? (
                    <>
                      Pokaži proizvode <ChevronDown size={14} />
                    </>
                  ) : (
                    <>
                      Sakrij proizvode <ChevronUp size={14} />
                    </>
                  )}
                </button>
                <div
                  className={`${
                    !isVisible ? "hidden " : "flex "
                  }  flex-col mt-2 gap-4 `}
                >
                  {selectedItems.map((item) => (
                    <BuilderMiniItem product={item} key={item.title} />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex gap-1">
            <span onClick={() => resetGift()}>
              <Trash
                className="opacity-65 transition-all duration-300 hover:text-secondaryColor hover:opacity-100 cursor-pointer"
                size={15}
              />
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg sm:text-2xl">{price}€</h3>
      </div>
    </div>
  );
};

export default BuilderItem;

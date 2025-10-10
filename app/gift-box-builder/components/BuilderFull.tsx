import React from "react";
import BuilderItem from "./BuilderItem";
import { Product } from "@/types/types";
import { useGiftStore } from "@/store/giftStore";

const BuilderFull = () => {
  const { baseBox, selectedItems } = useGiftStore();
  const boxPrice = parseFloat(
    baseBox?.priceRange.minVariantPrice.amount ?? "0"
  );
  const selectedItemsPrice = selectedItems.reduce((sum, item) => {
    const itemPrice = parseFloat(item.priceRange.minVariantPrice.amount ?? "0");
    return sum + itemPrice;
  }, 0);

  const totalPrice = boxPrice + selectedItemsPrice;

  const priceWithDiscount = totalPrice * 0.9;

  return (
    <>
      <div className="flex flex-col mt-3">
        <div className="flex w-full items-center justify-between">
          <p className="smm:text-[16px] text-[14px]">Proizvod</p>
          <p className="smm:text-[16px] text-[14px]">Total</p>
        </div>
        <div className="w-full h-[1px] bg-secondaryColor mb-2"></div>

        <div className="w-full flex flex-col gap-6">
          {baseBox && (
            <BuilderItem
              key={baseBox.title}
              item={baseBox}
              price={totalPrice}
            />
          )}
        </div>

        <div className="w-full h-[1px] bg-secondaryColor mt-2 "></div>
        <div className="my-10">
          <div className="flex gap-4 items-center">
            <p className="text-left">Cijena:</p>
            <p className="text-left text-secondaryColor font-bold">
              {totalPrice}€
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-left">Popust na Gift Box:</p>
            <p className="text-left text-secondaryColor font-bold">10%</p>
          </div>
          <div className="flex gap-4 items-center mb-2">
            <h4 className="text-2xl">Vaš total:</h4>
            <p className="text-2xl font-cormorant ">{priceWithDiscount}€</p>
          </div>
          <button className="ghost">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default BuilderFull;

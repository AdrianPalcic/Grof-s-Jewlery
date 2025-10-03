import React from "react";
import BuilderItem from "./BuilderItem";

const BuilderFull = () => {
  return (
    <>
      <div className="flex flex-col mt-3">
        <div className="flex w-full items-center justify-between">
          <p className="smm:text-[16px] text-[14px]">Proizvod</p>
          <p className="smm:text-[16px] text-[14px]">Total</p>
        </div>
        <div className="w-full h-[1px] bg-secondaryColor mb-2"></div>

        <div className="w-full flex flex-col gap-6">
          <BuilderItem />
        </div>

        <div className="w-full h-[1px] bg-secondaryColor mt-2 "></div>
        <div className="my-10">
          <div className="flex gap-4 items-center">
            <p className="text-left">Cijena:</p>
            <p className="text-left text-secondaryColor font-bold">10€</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-left">Popust na Gift Box:</p>
            <p className="text-left text-secondaryColor font-bold">10%</p>
          </div>
          <div className="flex gap-4 items-center mb-2">
            <h4 className="text-2xl">Vaš total:</h4>
            <p className="text-2xl font-cormorant ">10€</p>
          </div>
          {/* <AddToCartBtn /> */}
          <button className="ghost">Dodaj u košaricu</button>
        </div>
      </div>
    </>
  );
};

export default BuilderFull;

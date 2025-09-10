import { Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartItem = () => {
  const deleteItem = (id: number) => {
    console.log(id);
  };

  return (
    <div id="item" className="w-full flex items-center justify-between py-2">
      <div className="flex gap-4">
        <Link href="/taj-artikl" className="w-[100px] smm:w-[150px]">
          {" "}
          <img
            src="/1.png"
            alt="Artikl"
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="flex flex-col gap-1 justify-between">
          <div>
            <h3 className="text-lg smm:text-xl sm:text-3xl">Ime artikla</h3>
            <h3 className="text-[15px] smm:text-[16px]">11.30€</h3>
          </div>
          <span onClick={() => deleteItem(1)}>
            <Trash
              className="opacity-65 transition-all duration-300 hover:text-secondaryColor hover:opacity-100 cursor-pointer"
              size={15}
            />
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-lg sm:text-2xl">11.30€</h3>
      </div>
    </div>
  );
};

export default CartItem;

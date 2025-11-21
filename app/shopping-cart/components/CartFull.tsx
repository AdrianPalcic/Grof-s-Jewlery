import Link from "next/link";
import React from "react";
import CartItem from "./CartItem";
import { Product } from "@/types/types";
import { calculateTotal } from "@/utils/calculateTotal";
import CheckoutBtn from "./CheckoutBtn";

const CartFull = ({ products }: { products: Product[] }) => {
  const total = calculateTotal(products);

  console.log(products);
  return (
    <section>
      <div className="flex flex-col sm:flex-row mb-5  w-full items-left sm:items-center gap-2 sm:gap-0 justify-between ">
        <h1 className="text-3xl sm:text-4xl">Vaša košarica</h1>
        <Link href="/">
          <button className="ghost">Nastavite s kupnjom</button>
        </Link>
      </div>

      <div className="flex flex-col mt-3">
        <div className="flex w-full items-center justify-between">
          <p className="smm:text-[16px] text-[14px]">Proizvod</p>
          <p className="smm:text-[16px] text-[14px]">Total</p>
        </div>
        <div className="w-full h-[1px] bg-secondaryColor mb-2"></div>

        <div className="w-full flex flex-col gap-6">
          {products.map((product) => {
            return (
              <CartItem
                key={`${product.id}-${product.handle}`}
                product={product}
              />
            );
          })}
        </div>

        <div className="w-full h-[1px] bg-secondaryColor mt-2 "></div>
        <div className="my-10 ">
          <div className="flex items-center gap-10">
            <h4 className="text-2xl">Vaš Total</h4>
            <p className="text-2xl  font-cormorant">{total}€</p>
          </div>
          <p className="text-left mb-2">Idite na checkout</p>
          <CheckoutBtn />
        </div>
      </div>
    </section>
  );
};

export default CartFull;

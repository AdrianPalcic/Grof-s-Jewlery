"use client";

import React from "react";
import CartEmpty from "./components/CartEmpty";
import CartFull from "./components/CartFull";
import { useCartStore } from "@/store/cartStore";

const Page = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <section className="px-4 sm:px-10 mx-auto mt-10 mb-20">
      {cart.length === 0 ? <CartEmpty /> : <CartFull products={cart} />}
    </section>
  );
};

export default Page;

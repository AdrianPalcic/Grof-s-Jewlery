"use client";

import React, { useState } from "react";
import CartEmpty from "./components/CartEmpty";
import CartFull from "./components/CartFull";

const Page = () => {
  const [items, setItems] = useState(1);

  return (
    <section className="px-4 sm:px-10 mx-auto mt-10 mb-20">
      {items < 1 ? <CartEmpty /> : <CartFull />}
    </section>
  );
};

export default Page;

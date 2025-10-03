"use client";

import React, { useState } from "react";
import BuilderFull from "./components/BuilderFull";
import Hero from "./components/Hero";

const Page = () => {
  const [items, setItems] = useState(0);

  return (
    <section className="section mt-10">
      <Hero />
      {items > 0 && <BuilderFull />}
    </section>
  );
};

export default Page;

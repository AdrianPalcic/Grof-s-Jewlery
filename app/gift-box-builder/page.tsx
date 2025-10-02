"use client";

import React, { useState } from "react";
import Hero from "./components/Hero";
import BuilderEmpty from "./components/BuilderEmpty";
import BuilderFull from "./components/BuilderFull";

const page = () => {
  const [items, setItems] = useState(1);

  return (
    <section className="section mt-10">
      {items === 0 ? <BuilderEmpty /> : <BuilderFull />}
    </section>
  );
};

export default page;

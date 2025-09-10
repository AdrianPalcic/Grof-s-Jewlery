"use client";

import ItemDetails from "@/app/compontents/ItemDetails";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  return (
    <section className="px-4 sm:px-10 mx-auto mt-10 mb-20">
      <ItemDetails
        artiklSlug={typeof params.artikl === "string" ? params.artikl : ""}
      />
    </section>
  );
};

export default Page;

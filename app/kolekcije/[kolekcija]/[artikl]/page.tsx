"use client";

import ItemDetails from "@/app/compontents/ItemDetails";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();

  return (
    <>
      <ItemDetails
        artiklSlug={typeof params.artikl === "string" ? params.artikl : ""}
      />{" "}
      : {params.artikl}
    </>
  );
};

export default Page;

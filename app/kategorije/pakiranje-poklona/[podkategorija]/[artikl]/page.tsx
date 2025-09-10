"use client";

import ItemDetails from "@/app/compontents/ItemDetails";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  return (
    <div>
      <ItemDetails />: {params.artikl}
    </div>
  );
};

export default Page;

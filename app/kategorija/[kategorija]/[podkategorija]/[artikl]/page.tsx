"use client";

import ItemDetails from "@/app/compontents/ItemDetails";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();

  return (
    <>
      <ItemDetails /> : {params.artikl}
    </>
  );
};

export default page;

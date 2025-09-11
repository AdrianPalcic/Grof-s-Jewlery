"use client";

import { useParams } from "next/navigation";
import React from "react";
import CollectionDetails from "./components/CollectionDetails";

const Page = () => {
  const params = useParams();

  return (
    <CollectionDetails
      collection={typeof params.kolekcija === "string" ? params.kolekcija : ""}
    />
  );
};

export default Page;

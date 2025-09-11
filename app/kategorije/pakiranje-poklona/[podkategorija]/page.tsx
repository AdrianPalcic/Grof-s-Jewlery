"use client";

import { useParams } from "next/navigation";
import React from "react";
import CatDetails from "../../components/CatDetails";

const Page = () => {
  const params = useParams();
  return (
    <div>
      <CatDetails
        param={
          typeof params.podkategorija === "string" ? params.podkategorija : ""
        }
      />
    </div>
  );
};

export default Page;

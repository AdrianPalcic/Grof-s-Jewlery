"use client";

import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  return <div>Page: {params.podkategorija}</div>;
};

export default Page;

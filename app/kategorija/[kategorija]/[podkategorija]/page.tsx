"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  return (
    <div>
      <div>page: {params.podkategorija}</div>
      <Link href={`${params.podkategorija}/asdasdasdasd`}>
        LINKKKKKKKKKKKKK
      </Link>
    </div>
  );
};

export default page;

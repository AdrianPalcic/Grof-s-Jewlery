import Link from "next/link";
import React from "react";
import ButtonMain from "../compontents/ButtonMain";

const page = () => {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl sm:text-6xl">
        <span className="acc">Hvala Vam</span> na poruci!
      </h1>
      <p className="mb-4">
        Javiti čemo Vam se u najkračem roku. Do tada browsajte po našem webu.
      </p>
      <Link href="/">
        <ButtonMain text="Povratak na Naslovnu" />
      </Link>
    </div>
  );
};

export default page;

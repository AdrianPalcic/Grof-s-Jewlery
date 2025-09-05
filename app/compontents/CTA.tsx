import Link from "next/link";
import React from "react";
import ButtonSecondary from "./ButtonSecondary";

const CTA = ({ text, link }: { text: string; link: string }) => {
  return (
    <section className="w-full py-10 mb-20 px-4 bg-secondaryColor text-white mx-auto flex flex-col items-center justify-center">
      <h1 className="text-xl mb-2 sm:text-3xl text-center">
        IMATE PITANJE, IDEJU ZA POKLON KOJI BI ŽELJELI POKLONITI ?
      </h1>
      <p className="text-center mb-5 normal-case">
        Tu smo za Vas, osmišljavamo jedinstvene i originalne poklone
      </p>
      <Link href={`/${link}`}>
        <ButtonSecondary text={text} />
      </Link>
    </section>
  );
};

export default CTA;

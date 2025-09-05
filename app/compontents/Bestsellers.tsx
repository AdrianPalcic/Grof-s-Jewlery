import Link from "next/link";
import React from "react";

const Bestsellers = () => {
  return (
    <section className="section">
      <h2 className="sec-h2">Istaknuti Proizvodi</h2>
      <p className="text-center mb-5">
        Otkrijte najomiljenije komade koje naše mušterije jednostavno obožavaju.
      </p>
      <div className="flex flex-col mdd:flex-row gap-4 mdd:max-w-9xl mx-auto">
        <Link href="/negdje" className="flex-1 overflow-hidden">
          <img
            src="/1.png"
            alt=""
            className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
          />
        </Link>
        <div className="flex-1 flex flex-wrap gap-4">
          <Link href="/negdje" className="w-full smm:w-[48%] overflow-hidden">
            <img
              src="/2.png"
              alt=""
              className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
            />
          </Link>
          <Link href="/negdje" className="w-full smm:w-[48%] overflow-hidden">
            <img
              src="/3.png"
              alt=""
              className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
            />
          </Link>
          <Link href="/negdje" className="w-full smm:w-[48%] overflow-hidden">
            <img
              src="/4.png"
              alt=""
              className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
            />
          </Link>
          <Link href="/negdje" className="w-full smm:w-[48%] overflow-hidden">
            <img
              src="/5.png"
              alt=""
              className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;

import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <section className="section">
      <h2 className="sec-h2">Naše kategorije</h2>
      <p className="text-center mb-5">
        Otkrijte ručno izrađen proizvode koji priča vašu jedinstvenu priču.{" "}
        <br />
        Svaki komad iz naše kategorije pomno je odabran kako bi unio eleganciju
        i profinjenost u svaki trenutak.
      </p>

      <div className="flex flex-wrap justify-center gap-5 w-full">
        <div className="flex flex-col gap-4 flex-1 min-w-[250px]">
          <Link href="/kategorije/nakit-od-papira">
            <div className="relative w-full  h-[250px] sm:h-[400px]  overflow-hidden">
              <img
                src="/kat1.png"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-3 left-3 text-white text-lg font-semibold">
                Nakit od papira
              </h3>
            </div>
          </Link>

          <Link href="/kategorije/pokloni">
            <div className="relative w-full  h-[250px] sm:h-[250px]  overflow-hidden">
              <img
                src="/kat2.png"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-3 left-3 text-white text-lg font-semibold">
                Pokloni
              </h3>
            </div>
          </Link>

          <Link href="/kategorije/pakiranje-poklona">
            <div className="relative w-full  h-[250px] sm:h-[300px]  overflow-hidden">
              <img
                src="/kat3.png"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-3 left-3 text-white text-lg font-semibold">
                Pakiranje poklona
              </h3>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4 flex-1 min-w-[250px]">
          <Link href="/kategorije/dodaci-poklonima">
            <div className="relative w-full  h-[250px] sm:h-[300px]  overflow-hidden">
              <img
                src="/kat4.png"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-3 left-3 text-white text-lg font-semibold">
                Dodaci Poklonima
              </h3>
            </div>
          </Link>

          <Link href="/kategorije/gift-boxes">
            <div className="relative w-full  h-[250px] sm:h-[400px]  overflow-hidden">
              <img
                src="/kat5.png"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-3 left-3 text-white text-lg font-semibold">
                Gift Boxes
              </h3>
            </div>
          </Link>

          <Link href="/kategorije/package-design">
            <div className="relative w-full  h-[250px] sm:h-[400px]  overflow-hidden">
              <img
                src="/ant.jpeg"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-3 left-3 text-white text-lg font-semibold">
                Package Design
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;

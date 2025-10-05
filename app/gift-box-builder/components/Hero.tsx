import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row mb-5 w-full items-start sm:items-center gap-2 sm:gap-0 justify-between">
        <h1 className="text-3xl sm:text-4xl ">DIY Gift Box</h1>
        <Link href="/">
          <button className="ghost">Nastavite s kupnjom</button>
        </Link>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-4">
        {/* Korak 1 */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 shadow-sm">
          <CheckCircle className="text-secondaryColor w-6 h-6 flex-shrink-0" />
          <p className="text-base sm:text-lg">
            Korak 1: Odaberite{" "}
            <Link
              className="text-secondaryColor underline"
              href="/kategorije/pakiranje-poklona/kutije-za-poklone"
            >
              kutiju
            </Link>{" "}
            ili{" "}
            <Link
              className="text-secondaryColor underline"
              href="/kategorije/pakiranje-poklona/vrecice-za-poklone"
            >
              vrećicu
            </Link>
          </p>
        </div>

        {/* Korak 2 */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 shadow-sm">
          <CheckCircle className="text-secondaryColor w-6 h-6 flex-shrink-0" />
          <p className="text-base sm:text-lg">
            Korak 2: Dodajte proizvode u svoju kutiju
          </p>
        </div>

        {/* Korak 3 */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 shadow-sm">
          <CheckCircle className="text-secondaryColor w-6 h-6 flex-shrink-0" />
          <p className="text-base sm:text-lg">
            Korak 3: Pregledajte i dodajte u košaricu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

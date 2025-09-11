import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const buyLinks = [
    {
      text: "Nakit od papira",
      slug: "nakit-od-papira",
    },
    {
      text: "Pokloni",
      slug: "pokloni",
    },
    {
      text: "Pakiranje poklona",
      slug: "pakiranje-poklona",
    },
    {
      text: "Dodaci poklonima",
      slug: "dodaci-poklonima",
    },
    {
      text: "Gift Boxes",
      slug: "gift-boxes",
    },
    {
      text: "Package Design",
      slug: "package-design",
    },
  ];
  const infoLinks = [
    {
      text: "Kontakt",
      slug: "kontakt",
    },
    {
      text: "O nama",
      slug: "onama",
    },
    {
      text: "Politika Privatnosti",
      slug: "politika-privatnosti",
    },
    {
      text: "Kolačići",
      slug: "kolacici",
    },
    {
      text: "Uvjeti Korištenja",
      slug: "uvjeti-koristenja",
    },
  ];

  return (
    <footer className="flex w-full flex-wrap gap-5 px-4 sm:px-8 ">
      <div className="flex-1 min-w-[250px]">
        <h2 className="text-3xl mb-2">Grof&apos;s Jewlery</h2>
        <p className="font-cormorant">
          Izuzetan nakit izrađen za one koji cijene najfinije stvari u životu.
        </p>
      </div>
      <div className="flex-1 min-w-[250px]">
        <h3 className="uppercase text-lg font-semibold mb-2">Kupujte</h3>
        <ul className="flex flex-col gap-2">
          {buyLinks.map((link) => (
            <Link
              href={`/kategorija/${link.slug}`}
              key={link.slug}
              className=" font-cormorant font-regular text-lg text-[#5A5A5A] transition-colors duration-300 hover:text-secondaryColor"
            >
              <li>{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex-1 min-w-[250px]">
        <h3 className="uppercase text-lg font-semibold mb-2">Informacije</h3>
        <ul className="flex flex-col gap-2">
          {infoLinks.map((link) => (
            <Link
              href={`/${link.slug}`}
              key={link.slug}
              className=" font-cormorant font-regular text-lg text-[#5A5A5A] transition-colors duration-300 hover:text-secondaryColor"
            >
              <li>{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex-1 min-w-[250px]">
        <h3 className="uppercase text-lg font-semibold mb-2">Zapratite nas</h3>
        <div className="flex gap-2 items-center mt-2">
          <Link href="www.facebook.com" className="group">
            <Facebook
              color="#5A5A5A"
              className="group-hover:text-secondaryColor "
            />
          </Link>
          <Link href="www.instagram.com" className="group">
            <Instagram
              color="#5A5A5A"
              className="group-hover:text-secondaryColor"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

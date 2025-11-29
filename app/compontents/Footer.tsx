"use client";

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { categories, infoLinks } from "../constants";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="flex w-full flex-wrap gap-5 px-4 sm:px-8 mb-4">
      <div className="flex-1 min-w-[250px]">
        <h2 className="text-3xl mb-2">Grof&apos;s Jewelry</h2>
        <p className="font-cormorant">
          Izuzetan nakit izrađen za one koji cijene najfinije stvari u životu.
        </p>
      </div>

      <div className="flex-1 min-w-[250px]">
        <h3 className="uppercase text-lg font-semibold mb-2">Kupujte</h3>
        <ul className="flex flex-col gap-2">
          {categories.map((link) => (
            <Link
              href={`/kategorije/${link.slug}`}
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
          <Link
            href="https://www.instagram.com/grof_s_jewelry_unique_gifts/"
            className="group"
            target="_blank"
          >
            <Instagram
              color="#5A5A5A"
              className="group-hover:text-secondaryColor"
            />
          </Link>
        </div>
      </div>
      <div className="flex-1 min-w-[250px]">
        <h3 className="uppercase text-lg font-semibold mb-2">
          Informacije o nama
        </h3>

        <div className="font-cormorant">
          <p>
            <strong>Grof&apos;s Jewelry</strong>, obrt za usluge, proizvodnju i
            trgovinu.
          </p>

          <p>Vl. Iva Peroš.</p>

          <p>Zagreb, Kopernikova ulica 112.</p>

          <p>OIB: 19706383007</p>

          <p>grofsjewelry@gmail.com</p>

          <p>Nije u sustavu PDV-a prema čl. 90 Zakona o PDV-u</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

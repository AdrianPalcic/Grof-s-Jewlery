import ButtonMain from "@/app/compontents/ButtonMain";
import { contactData } from "@/app/constants";
import Link from "next/link";
import React from "react";

type Link = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

const SpecialFrom = () => {
  return (
    <div
      id="call-us"
      className="flex-[0.4] shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4"
    >
      <h2 className="text-3xl mb-2">
        Personalizirani projekti & <span className="acc">Veće narudžbe</span>
      </h2>
      <p>
        Planirate vjenčanje, korporativni poklon ili želite custom dizajn? Radi
        bržeg i direktnijeg odgovora, javite nam se putem emaila ili direktno na
        WhatsApp.
      </p>
      <div className="flex flex-col gap-3 mt-4 mb-5">
        {contactData.map((data) => {
          const formatLink = (link: Link) => {
            if (link.title === "Whatsapp") {
              const linkValue = `https://wa.me/${link.value}`;
              return linkValue;
            } else if (link.title === "Telefon") {
              const linkValue = `tel:${link.value}`;
              return linkValue;
            } else {
              const linkValue = `mailto:${link.value}`;
              return linkValue;
            }
          };

          return (
            <div key={data.title} className="flex gap-3 items-center p-3">
              <div className="flex items-center justify-center p-2 text-white bg-secondaryColor rounded-full">
                {data.icon}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p>{data.title}</p>{" "}
                <Link
                  className="font-cinzel text-lg"
                  href={formatLink(data)}
                  target="_blank"
                >
                  {data.value}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link href="mail:grofsjewlery@gmail.com">
        <ButtonMain text="Pošaljite nam poruku" />
      </Link>
      <p className="mt-2">Nastojimo odgovoriti na custom upite unutar 24h</p>
    </div>
  );
};

export default SpecialFrom;

import React from "react";
import CTA from "../compontents/CTA";

export const metadata = {
  title: "Grof's Jewlery | O nama",
  description:
    "Dobrodošli u Grof's Jewlery – otkrijte naš čarobni svijet unikatnih poklona, ručno rađenog nakita i poklon pakiranja.",
  openGraph: {
    title: "Grof's Jewlery | O nama",
    description:
      "Dobrodošli u Grof's Jewlery – otkrijte naš čarobni svijet unikatnih poklona, ručno rađenog nakita i poklon pakiranja.",
    url: "https://grof-s-jewlery.vercel.app/onama",
    siteName: "Grof's Jewlery",
    images: [{ url: "/kontakt.png", width: 1200, height: 630 }],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grof's Jewlery | O nama",
    description:
      "Dobrodošli u Grof's Jewlery – otkrijte naš čarobni svijet unikatnih poklona, ručno rađenog nakita i poklon pakiranja.",
    images: ["/kontakt.png"],
  },
};

const page = () => {
  return (
    <main className="px-4 sm:px-10 mx-auto mt-10 mb-20 ">
      <h1 className="text-3xl sm:text-5xl">O nama</h1>
      <div className="w-full flex items-center justify-center min-h-[300px] h-[300px] sm:h-[500px] mt-5">
        <img
          src="/kontakt.png"
          alt="Ručno rađeni papirnati nakit"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full my-5">
        <p>
          {" "}
          Dobrodošli u naš Grof&apos;s čarobni svijet unikatnih poklona i poklon
          pakiranja u kojem počinjemo divne priče o poklanjanju...Vi nastavljate
          Grof&apos;s priče i prenosite ih dalje... Svaki poklon, komad nakita,
          poklon kutiju ili zahvalnicu kreiramo i ručno izrađujemo iz strasti,
          vođeni zahvalnošću za svaki novi dan koji je pred nama... Grof&apos;s
          priča je priča o prijateljstvu, o zahvalnosti, ljubavi i povezanosti u
          koju radosno uključujemo svakog od Vas Poklanjajmo od srca, <br />{" "}
          ostavljajmo vlastite tragove svakim poklonom koji darujemo i Spread
          love and light,
          <br /> Love,
          <br /> Grof&apos;s Jewelry
        </p>
      </div>
      <CTA text="kontaktirajte nas!" link="kontakt" />
    </main>
  );
};

export default page;

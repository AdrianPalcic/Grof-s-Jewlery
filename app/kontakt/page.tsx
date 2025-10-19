import React from "react";
import Hero from "./components/Hero";
import Form from "./components/Form";
import SpecialFrom from "./components/SpecialFrom";

export const metadata = {
  title: "Grof's Jewlery | Kontakt",
  description:
    "Kontaktirajte Grof's Jewlery – pošaljite upit ili poruku i naš tim će Vam se javiti u najkraćem roku.",
  openGraph: {
    title: "Grof's Jewlery | Kontakt",
    description:
      "Kontaktirajte Grof's Jewlery – pošaljite upit ili poruku i naš tim će Vam se javiti u najkraćem roku.",
    url: "https://grof-s-jewlery.vercel.app/kontakt",
    siteName: "Grof's Jewlery",
    images: [{ url: "/kontakt.png", width: 1200, height: 630 }],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grof's Jewlery | Kontakt",
    description:
      "Kontaktirajte Grof's Jewlery – pošaljite upit ili poruku i naš tim će Vam se javiti u najkraćem roku.",
    images: ["/kontakt.png"],
  },
};

const page = () => {
  return (
    <div className="sm:px-10 px-4">
      <Hero />
      <section id="kontakt-forma" className="mb-20">
        <div className="flex gap-5 md:flex-row flex-col">
          <Form />
          <SpecialFrom />
        </div>
      </section>
    </div>
  );
};

export default page;

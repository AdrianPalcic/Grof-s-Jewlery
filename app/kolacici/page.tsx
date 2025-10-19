import React from "react";

const page = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10">
      <h1 className="text-3xl font-bold mb-6">Politika kolačića</h1>

      <p className="mb-4">
        Naš webshop koristi kolačiće kako bismo poboljšali vaše iskustvo i
        osigurali pravilno funkcioniranje stranice.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Što su kolačići?</h2>
      <p className="mb-4">
        Kolačići su male tekstualne datoteke koje se pohranjuju na vaš uređaj
        kada posjetite web stranicu. Omogućuju nam prepoznavanje vašeg uređaja i
        poboljšanje korisničkog iskustva.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Koje vrste kolačića koristimo
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Neophodni kolačići:</strong> omogućuju osnovne funkcije weba,
          npr. košaricu i login session. Ovi kolačići ne zahtijevaju privolu.
        </li>
        <li>
          <strong>Analitički kolačići:</strong> prate promet i ponašanje
          korisnika radi poboljšanja web stranice. Aktiviraju se samo ako
          korisnik prihvati kolačiće.
        </li>
        <li>
          <strong>Marketing kolačići:</strong> koriste se za personalizaciju
          oglasa i remarketing. Aktiviraju se samo uz privolu korisnika.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Prihvaćanje kolačića
      </h2>
      <p className="mb-4">
        Prilikom prvog posjeta webshopu, prikazat će vam se banner s opcijom
        “Prihvaćam sve”. Klikom na taj gumb prihvaćate korištenje kolačića. Od
        tog trenutka banner se neće ponovno prikazivati jer se vaša odluka
        pohranjuje u pregledniku.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Upravljanje kolačićima
      </h2>
      <p className="mb-4">
        S obzirom da koristimo samo gumb “Prihvaćam sve”, korisnik ne mijenja
        pojedinačne vrste kolačića. Stranica funkcionira samo s obaveznim i
        prihvaćenim kolačićima.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Kontakt</h2>
      <p className="mb-4">
        Ako imate pitanja o našoj politici kolačića, kontaktirajte nas na:
        <br />
        <strong>Email:</strong> grofsjewlery@gmail.com
      </p>

      <p className="text-sm mt-6">Zadnja izmjena: 19.10.2025.</p>
    </section>
  );
};

export default page;

import React from "react";

export const metadata = {
  title: "Grof's Jewelry | Uvjeti korištenja",
  description:
    "Pročitajte uvjete korištenja Grof's Jewelry web trgovine. Saznajte pravila kupnje, odgovornosti i korištenja sadržaja.",
  openGraph: {
    title: "Grof's Jewelry | Uvjeti korištenja",
    description:
      "Pročitajte uvjete korištenja Grof's Jewelry web trgovine. Saznajte pravila kupnje, odgovornosti i korištenja sadržaja.",
    url: "https://grofsjewelry.com/uvjeti-koristenja",
    siteName: "Grof's Jewelry",
    images: [
      {
        url: "/hero-home.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grof's Jewelry | Uvjeti korištenja",
    description:
      "Pročitajte uvjete korištenja Grof's Jewelry web trgovine. Saznajte pravila kupnje, odgovornosti i korištenja sadržaja.",
    images: ["/hero-home.png"],
  },
};

const Page = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10">
      <h1 className="text-3xl font-bold mb-6">Uvjeti korištenja</h1>

      <p className="mb-4">
        Ovi Uvjeti korištenja reguliraju korištenje webshopa Grof&apos;s
        Jewelry. Korištenjem ove stranice prihvaćate sve dolje navedene uvjete.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Opće odredbe</h2>
      <p className="mb-4">
        Webshop Grof&apos;s Jewelry (u nastavku: “webshop”) u vlasništvu je
        obrta Grof&apos;s Jewelry, obrt za usluge, proizvodnju i trgovinu, vl.
        Iva Peroš, sa sjedištem u Zagrebu, Kopernikova ulica 112.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Korištenje webshopa
      </h2>
      <p className="mb-4">
        Webshop se može koristiti za pregled proizvoda, kupnju i komunikaciju s
        prodavateljem. Zabranjeno je korištenje stranice u svrhe koje mogu
        prouzročiti štetu webshopu, vlasniku ili drugim korisnicima.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cijene i plaćanje</h2>
      <p className="mb-4">
        Sve cijene izražene su u eurima (EUR). Webshop nije u sustavu PDV-a
        prema članku 90. Zakona o PDV-u. Plaćanje se obavlja putem dostupnih
        metoda na checkout stranici, a transakcije obrađuje Shopify Payments ili
        drugi integrirani pružatelji usluga plaćanja.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Proces narudžbe i dostava
      </h2>
      <p className="mb-4">
        Narudžba je potvrđena kada primite e-mail potvrde. Dostava se vrši putem
        dostavne službe navedene pri kupnji. Rokovi dostave mogu varirati ovisno
        o lokaciji i dostupnosti proizvoda.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. Povrati i reklamacije
      </h2>
      <p className="mb-4">
        Kupac ima pravo na povrat prema Zakonu o zaštiti potrošača. Detaljna
        politika povrata nalazi se na stranici “Reklamacije i povrati”.
        Proizvodi moraju biti nekorišteni i neoštećeni kako bi se ostvarilo
        pravo povrata, osim u slučaju proizvodne greške.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Odgovornost</h2>
      <p className="mb-4">
        Webshop nastoji pružiti točne i ažurirane informacije o proizvodima, ali
        ne jamči potpunu točnost svih prikazanih podataka. Webshop ne snosi
        odgovornost za eventualne tehničke probleme ili privremenu nedostupnost
        stranice.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        7. Intelektualno vlasništvo
      </h2>
      <p className="mb-4">
        Svi sadržaji na webshopu, uključujući fotografije, tekstove i grafička
        rješenja, zaštićeni su autorskim pravima i ne smiju se koristiti bez
        prethodne pisane suglasnosti vlasnika.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        8. Izmjene uvjeta korištenja
      </h2>
      <p className="mb-4">
        Webshop zadržava pravo izmjene uvjeta korištenja bez prethodne najave.
        Preporučujemo povremenu provjeru ove stranice.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Kontakt</h2>
      <p className="mb-4">
        Za bilo kakva pitanja možete nas kontaktirati na:
        <br />
        <strong>Email:</strong> grofsjewelry@gmail.com
      </p>

      <p className="text-sm mt-6">Zadnja izmjena: 28.11.2025.</p>
    </section>
  );
};

export default Page;

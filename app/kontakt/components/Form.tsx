"use client";

import { sendResendEmail } from "@/lib/resend/resend";
import Link from "next/link";
import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    ime: "",
    email: "",
    poruka: "",
    prihvacamUvjete: false,
  });
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendResendEmail({
        ime: input.ime,
        email: input.email,
        poruka: input.poruka,
      });
      setInput({ ime: "", email: "", poruka: "", prihvacamUvjete: false });
      setMessage("Poruka poslana! Javiti ćemo se u najkraćem roku");
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Došlo je do greške pri slanju poruke.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="classic-form"
      className="shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex-[0.6] p-4"
    >
      <h2 className="text-3xl mb-2">Opći Upiti</h2>
      <p>
        Imate pitanje o dostupnosti, dostavi ili postojećim proizvodima? Javite
        nam se putem obrasca.
      </p>

      <form onSubmit={send} className="flex flex-col gap-3 mt-4" method="POST">
        <label
          htmlFor="ime"
          className="flex flex-col gap-1 font-cormorant text-lg text-textColor font-light"
        >
          Ime i Prezime
          <input
            id="ime"
            name="ime"
            type="text"
            required
            className="inline-block border-[1px] border-solid border-secondaryColor bg-transparent py-2 px-4"
            value={input.ime}
            onChange={handleChange}
          />
        </label>

        <label
          htmlFor="email"
          className="flex flex-col gap-1 font-cormorant text-lg text-textColor font-light"
        >
          Email
          <input
            id="email"
            name="email"
            required
            type="email"
            className="inline-block border-[1px] border-solid border-secondaryColor bg-transparent py-2 px-4"
            value={input.email}
            onChange={handleChange}
          />
        </label>

        <label
          htmlFor="poruka"
          className="flex flex-col gap-1 font-cormorant text-lg text-textColor font-light"
        >
          Poruka
          <textarea
            name="poruka"
            id="poruka"
            required
            className="inline-block border-[1px] border-solid border-secondaryColor bg-transparent py-2 px-4 h-[300px]"
            value={input.poruka}
            onChange={handleChange}
          ></textarea>
        </label>

        <div className="flex gap-1 items-center">
          <input
            type="checkbox"
            name="prihvacamUvjete"
            checked={input.prihvacamUvjete}
            onChange={handleChange}
            required
          />
          <div className="text-[16px]">
            Prihvačam{" "}
            <Link className="text-secondaryColor" href="/uvjeti-koristenja">
              uvjete korištenja
            </Link>{" "}
            i{" "}
            <Link className="text-secondaryColor" href="/politika-privatnosti">
              politiku privatnosti
            </Link>
          </div>
        </div>

        {!message ? (
          <button className="btn w-fit" type="submit">
            {!loading ? "Pošaljite nam poruku" : "Slanje..."}
          </button>
        ) : (
          <div className="w-full px-3 pt-6 flex justify-center items-center">
            <p className="font-bold text-secondaryColor text-2xl">{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;

"use client";

import React, { useEffect, useState } from "react";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 flex flex-col gap-4 relative">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="absolute top-4 left-4 w-12 h-12 object-contain"
        />
        <p className="text-gray-800 text-lg text-center mt-12">
          Ovaj webshop koristi kolačiće kako bi poboljšao vaše iskustvo. Klikom
          na "Prihvaćam sve" pristajete na korištenje kolačića.
        </p>
        <button
          onClick={handleAccept}
          className="bg-secondaryColor hover:opacity-90 text-white font-semibold py-2 px-4 rounded transition mx-auto"
        >
          Prihvaćam sve
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;

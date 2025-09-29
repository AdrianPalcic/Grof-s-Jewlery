"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setIsOpen }) => {
  return (
    <div
      id="modal"
      className="absolute top-[50%] left-[50%] w-[300px] h-[200px] -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center bg-white p-4 gap-4 border rounded shadow-xl"
    >
      <button
        className="absolute top-2 left-2"
        onClick={() => setIsOpen(false)}
      >
        <X />
      </button>
      <h2 className="font-semibold">Ovaj artikl Vam je već u košarici</h2>
      <p className="text-sm">
        U slučaju da želite više primjeraka ovog artikla molimo Vas{" "}
        <Link href="/kontakt" className="text-secondaryColor underline">
          Kontaktirajte nas
        </Link>
      </p>
    </div>
  );
};

export default Modal;

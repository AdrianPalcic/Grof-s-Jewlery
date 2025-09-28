import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/types";
import React from "react";

const CartModal = ({ product }: { product: Product }) => {
  const closeModal = useCartStore((state) => state.closeModal);

  return (
    <div className="absolute top-20 right-[40px]  bg-opacity-50 flex justify-center items-center z-[1000]">
      <div className="bg-white p-4 rounded shadow-lg relative">
        <button className="absolute top-2 right-2" onClick={closeModal}>
          X
        </button>
        <h2>{product.title} je dodan u košaricu!</h2>
      </div>
    </div>
  );
};

export default CartModal;

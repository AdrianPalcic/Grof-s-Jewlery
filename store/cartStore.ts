import { CartState } from "@/types/types";
import { create } from "zustand";

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      // dodaj samo ako item već nije unutra
      const exists = state.cart.some((cartItem) => cartItem.id === item.id);
      if (exists) return state;
      return { cart: [...state.cart, item] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));

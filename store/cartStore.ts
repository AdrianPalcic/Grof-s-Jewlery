import { CartState, Product } from "@/types/types";
import { create } from "zustand";

const loadCartFromStorage = (): Product[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

const saveCartToStorage = (cart: Product[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: loadCartFromStorage(),

  addToCart: (item) =>
    set((state) => {
      const exists = state.cart.some((cartItem) => cartItem.id === item.id);
      if (exists) return state;

      const updatedCart = [...state.cart, item];
      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  clearCart: () => {
    saveCartToStorage([]);
    set({ cart: [] });
  },
}));

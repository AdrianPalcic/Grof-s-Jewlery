import { CartState, Product, GiftBox } from "@/types/types";
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

  modalOpen: false,
  lastAdded: null,

  addToCart: (item: Product | GiftBox) => {
    set((state) => {
      if ("selectedItems" in item) {
        const exists = state.cart.some(
          (cartItem) => "selectedItems" in cartItem && cartItem.id === item.id
        );
        const updatedCart = exists ? state.cart : [...state.cart, item];
        if (!exists) {
          saveCartToStorage(updatedCart);
          get().openModal(item);
        }
        return { cart: updatedCart };
      } else {
        // Običan proizvod
        const exists = state.cart.some((cartItem) => cartItem.id === item.id);
        const updatedCart = exists ? state.cart : [...state.cart, item];
        if (!exists) {
          saveCartToStorage(updatedCart);
          get().openModal(item);
        }
        return { cart: updatedCart };
      }
    });
  },

  removeFromCart: (id: string) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  clearCart: () => {
    saveCartToStorage([]);
    set({ cart: [] });
  },

  openModal: (item: Product | GiftBox) =>
    set({ modalOpen: true, lastAdded: item }),
  closeModal: () => set({ modalOpen: false, lastAdded: null }),
}));

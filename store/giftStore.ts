import { create } from "zustand";
import { Product, GiftBox } from "@/types/types";

interface GiftStoreState {
  baseBox: Product | null;
  selectedItems: Product[];
  wrapColor: string | null;
  personalMessage: string | null;

  setBaseBox: (box: Product) => void;
  addItem: (item: Product) => void;
  removeItem: (itemId: string) => void;
  setWrapColor: (color: string) => void;
  setPersonalMessage: (message: string) => void;
  resetGift: () => void;
}

export const useGiftStore = create<GiftStoreState>((set, get) => ({
  baseBox: null,
  selectedItems: [],
  wrapColor: null,
  personalMessage: null,

  setBaseBox: (box) =>
    set(() => ({
      baseBox: box,
      selectedItems: [],
      wrapColor: null,
      personalMessage: null,
    })),

  addItem: (item) => {
    const exists = get().selectedItems.some((i) => i.id === item.id);
    if (!exists) {
      set((state) => ({
        selectedItems: [...state.selectedItems, item],
      }));
    }
  },

  removeItem: (itemId) =>
    set((state) => ({
      selectedItems: state.selectedItems.filter((i) => i.id !== itemId),
    })),

  setWrapColor: (color) => set({ wrapColor: color }),
  setPersonalMessage: (message) => set({ personalMessage: message }),

  resetGift: () =>
    set({
      baseBox: null,
      selectedItems: [],
      wrapColor: null,
      personalMessage: null,
    }),
}));

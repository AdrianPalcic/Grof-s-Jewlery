import { create } from "zustand";
import { Product } from "@/types/types";

interface GiftStoreState {
  baseBox: Product | null;
  selectedItems: Product[];

  setBaseBox: (box: Product) => void;
  addItem: (item: Product) => void;
  removeItem: (itemId: string) => void;
  resetGift: () => void;
}

const loadGiftFromStorage = (): {
  baseBox: Product | null;
  selectedItems: Product[];
} => {
  if (typeof window === "undefined")
    return { baseBox: null, selectedItems: [] };
  const stored = localStorage.getItem("giftBox");
  return stored ? JSON.parse(stored) : { baseBox: null, selectedItems: [] };
};

const saveGiftToStorage = (state: {
  baseBox: Product | null;
  selectedItems: Product[];
}) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("giftBox", JSON.stringify(state));
};

export const useGiftStore = create<GiftStoreState>((set, get) => ({
  ...loadGiftFromStorage(),

  setBaseBox: (box) =>
    set(() => {
      const newState = { baseBox: box, selectedItems: [] };
      saveGiftToStorage(newState);
      return newState;
    }),

  addItem: (item) => {
    const exists = get().selectedItems.some((i) => i.id === item.id);
    if (!exists) {
      const newState = {
        baseBox: get().baseBox,
        selectedItems: [...get().selectedItems, item],
      };
      saveGiftToStorage(newState);
      set(newState);
    }
  },

  removeItem: (itemId) => {
    const newState = {
      baseBox: get().baseBox,
      selectedItems: get().selectedItems.filter((i) => i.id !== itemId),
    };
    saveGiftToStorage(newState);
    set(newState);
  },

  resetGift: () => {
    const newState = { baseBox: null, selectedItems: [] };
    saveGiftToStorage(newState);
    set(newState);
  },
}));

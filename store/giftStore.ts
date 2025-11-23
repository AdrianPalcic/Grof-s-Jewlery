import { create } from "zustand";
import { Product } from "@/types/types";

interface GiftStoreState {
  baseBox: Product | null;
  selectedItems: Product[];
  modalOpen: boolean;
  lastAdded: Product | null;

  setBaseBox: (box: Product) => void;
  addItem: (item: Product) => void;
  removeItem: (itemId: string) => void;
  resetGift: () => void;
  removeItems: (ids: string[]) => void;

  openModal: (item: Product) => void;
  closeModal: () => void;
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
  modalOpen: false,
  lastAdded: null,

  setBaseBox: (box) =>
    set(() => {
      const newState = { baseBox: box, selectedItems: [] };
      saveGiftToStorage(newState);
      get().openModal(box);

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
      set({ ...newState });
      get().openModal(item);
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

  removeItems: (ids: string[]) => {
    const newState = {
      baseBox: get().baseBox,
      selectedItems: get().selectedItems.filter((i) => !ids.includes(i.id)),
    };
    saveGiftToStorage(newState);
    set(newState);
  },

  resetGift: () => {
    const newState = { baseBox: null, selectedItems: [] };
    saveGiftToStorage(newState);
    set(newState);
  },

  openModal: (item) => set({ modalOpen: true, lastAdded: item }),
  closeModal: () => set({ modalOpen: false, lastAdded: null }),
}));

export type Image = {
  altText: string;
  url: string;
};
export type ProductImageConnection = {
  edges: {
    node: Image;
  }[];
};

export type Collection = {
  description: string;
  id: string;
  handle: string;
  title: string;
  image: Image;
};
export type Product = {
  id: string;
  title: string;
  handle: string;
  description: string;
  featuredImage: Image | null;
  images: ProductImageConnection;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        priceV2: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
};

export type CartState = {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  modalOpen: boolean;
  lastAdded: Product | null;
  openModal: (item: Product) => void;
  closeModal: () => void;
};

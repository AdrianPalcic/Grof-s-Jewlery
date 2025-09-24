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
  variantId: string;
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
};

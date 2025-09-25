import { Product } from "@/types/types";

export function calculateTotal(cart: Product[]): number {
  return cart.reduce((total, product) => {
    const price = parseFloat(product.priceRange.minVariantPrice.amount);
    return total + price;
  }, 0);
}

import { shopifyGraphql } from "./shopify";

export async function createCheckout(
  lineItems: { variantId: string; quantity: number }[]
) {
  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: {
      lines: lineItems.map((item) => ({
        merchandiseId: item.variantId,
        quantity: item.quantity,
      })),
    },
  };

  const data = await shopifyGraphql(query, variables);

  const errors = data.cartCreate.userErrors;
  if (errors.length) {
    console.error("Checkout errors:", errors);
    throw new Error("Checkout failed");
  }

  // checkoutUrl se nalazi direktno na cart objektu
  return data.cartCreate.cart.checkoutUrl;
}

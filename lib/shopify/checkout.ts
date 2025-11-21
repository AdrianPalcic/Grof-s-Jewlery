import { shopifyGraphql } from "./shopify";

export async function createCheckout(
  lineItems: { variantId: string; quantity: number }[],
  note?: string,
  discountCode?: string
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
      discountCodes: discountCode ? [discountCode] : [],
      note: note || "",
    },
  };

  const data = await shopifyGraphql(query, variables);

  const errors = data.cartCreate.userErrors;
  if (errors.length) {
    console.error("Checkout errors:", errors);
    throw new Error("Checkout failed");
  }

  return data.cartCreate.cart.checkoutUrl;
}

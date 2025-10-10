import { useGiftStore } from "@/store/giftStore";
import { createCheckout } from "@/lib/shopify/checkout";

const CheckoutGiftBoxBtn = () => {
  const baseBox = useGiftStore((state) => state.baseBox);
  const selectedItems = useGiftStore((state) => state.selectedItems);

  const handleCheckout = async () => {
    if (!baseBox) return;

    // Kreiraj lineItems
    const lineItems = [
      { variantId: baseBox.variants.edges[0].node.id, quantity: 1 },
      ...selectedItems.map((item) => ({
        variantId: item.variants.edges[0].node.id,
        quantity: 1,
        customAttributes: [{ key: "Custom Gift box", value: "true" }],
      })),
    ];

    try {
      const checkoutUrl = await createCheckout(lineItems);
      window.location.href = checkoutUrl;
    } catch (err) {
      console.error("Checkout failed", err);
    }
  };

  return (
    <button onClick={handleCheckout} className="ghost">
      Checkout
    </button>
  );
};

export default CheckoutGiftBoxBtn;

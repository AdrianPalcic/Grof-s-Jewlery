import { createCheckout } from "@/lib/shopify/checkout";
import { useCartStore } from "@/store/cartStore";

const CheckoutBtn = () => {
  const cart = useCartStore((state) => state.cart);

  const handleCheckout = async () => {
    const lineItems = cart.map((item) => ({
      variantId: item.variants.edges[0].node.id,
      quantity: 1,
    }));

    try {
      const checkout = await createCheckout(lineItems);
      window.location.href = checkout;
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

export default CheckoutBtn;

import { component$, Slot, useStore } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

import { useContextProvider, createContextId } from "@builder.io/qwik";
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export type CartItemProps = {
  name: string;
  price: number;
  quantity: number;
  image: string;
};
interface CartProps {
  data: CartItemProps[];
}

export const CartContext = createContextId<CartProps>("user.cart");
export default component$(() => {
  const cart = useStore<CartProps>({
    data: [],
  });
  useContextProvider(CartContext, cart);
  return (
    <>
      <Header />
      <div class=" bg-secondary pt-10">
        <Slot />
        <Footer />
      </div>
    </>
  );
});

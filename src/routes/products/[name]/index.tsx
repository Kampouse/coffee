import {
  component$,
  useContext,
  $,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CartContext } from "../../layout";
import { getProduct } from "../data";
import * as Lucid from "lucide-qwik";
import type { CartItemProps } from "../../layout";
export default component$(() => {
  const cart = useContext(CartContext);
  const location = useLocation();
  const prod = getProduct(location.params.name);

  const cartItem = useStore<CartItemProps>({
    name: getProduct(location.params.name).name,
    price: 0,
    image: "",
    quantity: 0,
  });
  useTask$((taskContext) => {
    taskContext.track(() => location.params.name);
    const loc = location.params.name;

    const prod = getProduct(loc);

    cartItem.quantity =
      cart.data.find((item) => item.name === prod.name)?.quantity || 0;
  });

  const updateCart = $(() => {
    if (cartItem.quantity === 0) cartItem.quantity = cartItem.quantity + 1 || 1;
    const clientProd = getProduct(location.params.name);
    const index = cart.data.findIndex((item) => item.name === clientProd.name);
    if (index !== -1) {
      cart.data[index].quantity = cartItem.quantity;
    } else {
      cart.data.push({ ...clientProd, quantity: cartItem.quantity });
    }
    //set clientProd to be empty to trigger a rerender
  });

  return (
    <main class="mt-20 flex flex-col  md:my-24 lg:mt-32 lg:flex-row">
      <div class="md:ml-16  ">
        <img
          src={prod.image}
          class="h-[22rem] max-h-[32em] w-full min-w-[20em] self-start rounded-xl  object-fill   shadow-xl md:h-[20em] md:w-[32em] lg:h-[30em] lg:w-[42em]  "
          width={500}
          height={500}
        />
      </div>

      <div class="flex h-full w-full flex-col gap-2 self-center text-center align-bottom text-red-800 lg:ml-0 lg:w-fit lg:py-16">
        <h1 class="pt-1 text-4xl text-red-700 md:pt-2 lg:pt-0">
          {prod.name}
          <span class="text-3xl text-red-800"> {prod.price} $</span>
        </h1>

        <div class=" flex flex-col gap-2   ">
          <select
            onChange$={(e: Event) => {
              if (e.target instanceof HTMLSelectElement) {
                if (cartItem.quantity > 0) {
                  cartItem.quantity = parseInt(
                    (e.target as HTMLSelectElement).value,
                  );
                  updateCart();
                } else {
                  cartItem.quantity = parseInt(
                    (e.target as HTMLSelectElement).value,
                  );
                }
              }
            }}
            class="w-40 self-center rounded-lg border bg-transparent  p-2 pb-2 text-center text-black"
          >
            <option key={0} value={cartItem.quantity}>
              {cartItem.quantity > 0 ? "In Cart: " + cartItem.quantity : "0"}
            </option>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
              <option key={i} value={i}>
                {i === 1 ? "1" : i + ""}
              </option>
            ))}
          </select>
          <button
            onClick$={() => {
              updateCart();
            }}
            class="order-last  mb-2 flex w-40 flex-row justify-evenly  self-center rounded-lg bg-red-500 p-2 pb-2 text-center text-white md:mx-40 "
          >
            <Lucid.ShoppingCartIcon class="" />
          </button>
        </div>

        <h1 class=" flex w-96 justify-center self-center text-center md:ml-8 ">
          {prod.longDescription}
        </h1>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Coffee now",
  meta: [
    {
      name: "description",
      content: "Coffee now",

      media:
        "https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max",
    },
  ],
};

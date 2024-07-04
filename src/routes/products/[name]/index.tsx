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

  //assing to prod if undefined
  const updateCart = $(() => {
    //required to get th bundle to pick up the fn on the client?

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
      <div class="md:ml-16 lg:mx-32 ">
        <img
          src={prod.image}
          class="h-[15em] max-h-[32em] w-full min-w-[20em]  self-start   rounded-xl md:h-[20em] md:w-[32em] lg:h-[30em] lg:w-[42em]  "
          width={500}
          height={500}
        />
      </div>

      <div class="flex h-full w-full flex-col gap-2 self-center text-center align-bottom text-red-800 lg:ml-0 lg:w-fit lg:py-16">
        <h1 class="text-4xl">
          {prod.name}
          <span class="text-2xl text-gray-500"> {prod.price} $</span>
        </h1>

        <div class=" flex flex-col   ">
          <button
            onClick$={() => updateCart()}
            class="self-left order-first mb-2 w-32 self-center rounded-lg bg-red-500 p-2 pb-2 text-white md:mx-40 "
          >
            Add to cart
          </button>
          <div class="flex flex-row  justify-center self-center lg:gap-2">
            <button
              class="  rounded-lg border  border-red-500"
              onClick$={() => {
                if (cartItem.quantity > 0) cartItem.quantity -= 1;
              }}
            >
              <Lucid.MinusIcon class=" text-red-500" />
            </button>

            <span class=" rounded-lg   px-2"> {cartItem.quantity}</span>
            <button
              class=" rounded-lg border border-red-500"
              onClick$={() => {
                cartItem.quantity += 1;
              }}
            >
              <Lucid.PlusIcon class=" text-red-500" />
            </button>
          </div>
        </div>

        <h1 class=" ml-8 flex w-96 justify-center self-center text-center ">
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

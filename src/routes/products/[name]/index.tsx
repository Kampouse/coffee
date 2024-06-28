import { component$, useContext, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CartContext } from "../../layout";
export default component$(() => {
  const cart = useContext(CartContext);
  const location = useLocation();
  const addToCart = $(() => {
    cart.value = [...cart.value, location.params.name];
    console.log(cart.value);
  });
  return (
    <main class="mt-10  grid h-full  grid-flow-row bg-white p-10  md:grid-flow-row lg:h-full  lg:grid-cols-2 lg:p-20">
      <div class="   flex justify-center rounded-xl    p-0 text-center  text-red-800 lg:h-full">
        <img
          src="https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max"
          class="h-full w-full self-center rounded-xl "
          width={500}
          height={500}
        />
      </div>

      <div class=" flex h-fit w-full flex-col gap-2 self-center text-center align-bottom text-red-800 lg:mx-20  lg:w-fit">
        <div class="order-first gap-0">
          <h1 class="text-left  text-4xl">Lorem ipsum dolor sit amet</h1>
          <h1 class="w-full p-2 pt-0 text-left">15 CAD </h1>
        </div>

        <h1 class=" flex  items-end justify-end self-center p-2  lg:w-full ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut
        </h1>
        <button
          onClick$={() => addToCart()}
          class="self-left order-first rounded-lg bg-red-500 p-2 text-white lg:order-last  lg:self-center"
        >
          Add to cart
        </button>
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

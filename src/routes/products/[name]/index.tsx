import { component$, useContext, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CartContext } from "../../layout";
import { getHotContent } from "../data";
export default component$(() => {
  const cart = useContext(CartContext);
  const location = useLocation();

  const prod = getHotContent(location.params.name);
  const addToCart = $(() => {
    cart.value = [...cart.value, location.params.name];
    console.log(cart.value);
  });
  return (
    <main class="mt-20 flex flex-col  md:my-24 lg:mt-32 lg:flex-row">
      <div class="md:ml-16">
        <img
          src={prod.image}
          class="h-[15em] max-h-[32em] w-full min-w-[20em]  self-start   rounded-xl md:h-[20em] md:w-[35em]  lg:max-h-[25em]"
          width={500}
          height={500}
        />
      </div>

      <div class="flex h-full w-full flex-col gap-2 self-center text-center align-bottom text-red-800 lg:ml-0 lg:w-fit lg:py-16">
        <div class="order-first gap-0">
          <h1 class=" texte-center  py-2 text-4xl">{prod.name}</h1>
          <h1 class="w-full p-2 pt-0 text-center ">{prod.price} $</h1>
        </div>

        <h1 class=" flex  items-end justify-end self-center p-2 text-left md:w-96 lg:w-full  lg:px-32 ">
          {prod.description}
        </h1>
        <button
          onClick$={() => addToCart()}
          class="self-left order-first rounded-lg bg-red-500 p-2 text-white md:mx-40 lg:order-last  lg:self-center"
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

import { component$ } from "@builder.io/qwik";
import { useLocation, } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

  const location = useLocation();
  return (
    <main class="grid   lg:h-[80.6vh] h-full lg:grid-cols-2  grid-flow-row bg-white  p-10 lg:p-20">
      <div class="justify-center lg:h-full  h-[40vh] rounded-xl bg-gray-100  text-center text-red-800">
        <h1 class="  mt-4 text-4xl">{location.params.name}</h1>
      </div>
      <div class=" lg:mx-20 flex flex-col gap-2 w-full self-center text-center align-bottom text-red-800 lg:h-fit lg:w-fit  ">
        <h1 class=" flex w-full p-2 justify-end h-full self-center items-end ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </h1>
        <button class="self-center rounded-lg bg-red-500 p-2  text-white">
          Click Me to know more
        </button>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "best coffee you can buy",
  meta: [
    {
      name: "description",
      content: "smooth coffee is good",
      media: "https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max",
    },
  ],
};

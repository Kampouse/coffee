import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "../components/Header";






export const Land = component$(() => {
  return (
    <div
      class="py-[10vh] flex  rounded-lg          bg-no-repeat  text-center lg:w-1/2 lg:mx-[30em] lg:h-screen bg-center  bg-cover h-screen"
      style="background-image: url('https://images.nightcafe.studio/jobs/1ZX8ePTwLG5wLhSWp1zT/1ZX8ePTwLG5wLhSWp1zT--1--ntggf.jpg?tr=w-1080,c-at_max');">
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed  ">
        <div class="flex h-full items-center justify-center">
          <div class="text-white mx-5">
            <div class="backdrop-blur-sm bg-white/5 rounded-3xl px-4 pt-2 pb-1  my-4">
              <h2 class=" text-4xl font-semibold    ">The only coffee you will ever want</h2>
              <h4 class="mb-1 text-xl font-semibold  underline ">Maybe</h4>
            </div>
            <a
              href="#about"
              type="a"
              class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              What we stand for
            </a>
          </div>
        </div>
      </div>
    </div>

  );
});

export default component$(() => {
  return (
    <main class="bg-[#4E784A] scroll-smooth">
      <Header />
      <Land />
      <section id="about" class="bg-[#4E784 A]">
        <div class="container mx-auto px-4 py-12">
          <div class="flex flex-col items-center justify-center">
            <h2 class="text-4xl font-semibold text-white">About Us</h2>
          </div>
        </div>
      </section>

    </main>
  );
});

export const head: DocumentHead = {
  title: "best coffee you can buy ",
  meta: [
    {
      name: "description",
      content: "smooth coffee is good",
    },
  ],
};

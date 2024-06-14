import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "../components/Header";






export const Land = component$(() => {
  return (
    <div
      class="py-[10vh] flex  rounded-lg          bg-no-repeat  text-center lg:w-1/2 lg:mx-[30em] lg:h-screen bg-center  bg-cover h-screen"
      style="background-image: url('https://images.nightcafe.studio/jobs/1ZX8ePTwLG5wLhSWp1zT/1ZX8ePTwLG5wLhSWp1zT--1--ntggf.jpg?tr=w-1080,c-at_max');">
      <div
        class="flex lg:ml-36 text-center">
        <div class="flex h-full items-center justify-center">
          <div class="text-white mx-5">
            <div class=" bg-white/5 rounded-3xl px-4 pt-2 pb-1  my-4">
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


export const Mission = component$(() => {
  return (
    <section id="about" class="bg-white flex bg-no-repeat  text-center lg:w-1/2 lg:mx-[30em]  bg-center  bg-cover h-fit">
      <div class="container mx-auto my-4">
        <div class="flex flex-col items-center justify-center bg-white">
          <h2 class="text-4xl font-semibold text-[#1f4d37]">Our mission</h2>
          <p class="text-lg text-[#1f4d37] mx-5 ">
            Our mission is to transform the way the world enjoys coffee.
            We believe in a coffee experience that transcends the ordinary,
            where each cup tells a story of sustainability, empowerment, and exceptional flavour.
          </p>
        </div>
      </div>
    </section>
  );
});

export const Flower = component$(() => {
  return (
    <div >
      <img class=" flex  bg-no-repeat  text-center lg:w-1/2 lg:mx-[30em] lg:h-[25em]  w-screen bg-cover h-[15em]" src="https://images.nightcafe.studio/jobs/HOZ8zjm8Vnr8dmtfoB37/HOZ8zjm8Vnr8dmtfoB37--1--cudfk.jpg?tr=w-1600,c-at_max" alt="coffee" />
    </div>
  );
});


export const News = component$(() => {
  return (
    <div class="   items-center  bg-no-repeat  text-center bg-white text-green-100 lg:w-1/2 lg:mx-[30em] lg:h-fit  w-screen bg-cover h-fit">
      <h1 class="text-center text-[#1f4d37] p-5 pb-1 text-2xl" >  Latest News</h1>
      <div class="flex lg:flex-row flex-col bg-white content-center items-center ">
        <a class="p-8  border border-[#1f4d37] m-4 my-0   rounded-2xl "
          href="#">
          <img src="https://loremflickr.com/800/600/girl" class=" rounded-lg overflow-hidden border" />
          <div class="mt-2 bg-white">
            <h4 class="font-bold text-xl">Exercises</h4>
            <p class="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
            </p>
            <div class="mt-5">

            </div>
          </div>
        </a>
        <a class="p-8  border border-[#1f4d37] m-4 my-3   rounded-2xl "
          href="#">
          <img src="https://loremflickr.com/800/600/girl" class=" rounded-lg overflow-hidden border" />
          <div class="mt-2 bg-white">
            <h4 class="font-bold text-xl">Exercises</h4>
            <p class="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
            </p>
            <div class="mt-5">

            </div>
          </div>
        </a>




      </div>
    </div>
  );
});






export const Footer = component$(() => {
  return (
    <div class="   items-center  bg-no-repeat  text-center bg-white text-green-100 lg:w-1/2 lg:mx-[30em] lg:h-fit  w-screen bg-cover h-fit p-5">
      <button class="bg-[#1f4d37] text-white p-2 rounded-lg"> Buy the stuff</button>

    </div>
  );
});







export default component$(() => {
  return (
    <main class="bg-[#cbe7c3] scroll-smooth">
      <Header />
      <Land />
      <Mission />
      <Flower />
      <News />
      <Footer />
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

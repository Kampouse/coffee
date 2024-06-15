import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Header from "../components/Header";
import * as Lucid from "lucide-qwik";
const bg2 =
  "background-image: url( ' https://media.discordapp.net/attachments/1247779779378413720/1251259488871387157/IMG_9437.jpg?ex=666dedb5&is=666c9c35&hm=348c1fa0828c4491092807353de7690950a7d82a581689018bbbed587e42cd19&=&format=webp&width=525&height=350')";

export const Land = component$(() => {
  return (
    <div
      class="flex h-[50em]  justify-center  rounded-lg bg-cover  bg-center bg-no-repeat   py-[10vh]  text-center  "
      style={bg2}
    >
      <div class="flex text-center lg:items-center">
        <div class="flex h-full items-center justify-center">
          <div class="mx-5 text-white">
            <div class=" my-4 rounded-3xl bg-white/5 px-4 pb-1  pt-2">
              <h2 class=" text-4xl font-semibold    ">
                The only coffee you will ever want
              </h2>
              <h4 class="mb-1 text-xl font-semibold  underline ">Maybe</h4>
            </div>
            <Link
              type="a"
              class=" cursor-pointer rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              check our stocks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export const Mission = component$(() => {
  return (
    <section
      id="about"
      class="flex h-fit  bg-white bg-cover bg-center  bg-no-repeat py-10 text-center  "
    >
      <div class="container mx-auto my-4">
        <div class="flex flex-col items-center justify-center bg-white">
          <h2 class="text-4xl font-semibold text-[#1f4d37]">Our mission</h2>
          <p class=" text-lg text-[#1f4d37] ">
            Our mission is to transform the way the world enjoys coffee. We
            believe in a coffee experience that transcends the ordinary, where
            each cup tells a story of sustainability, empowerment, and
            exceptional flavour.
          </p>
        </div>
      </div>
    </section>
  );
});

export const Flower = component$(() => {
  return (
    <div class="flex justify-center">
      <img
        class=" flex    h-[20em]  w-screen  bg-no-repeat lg:w-1/2"
        src="https://images.nightcafe.studio/jobs/HOZ8zjm8Vnr8dmtfoB37/HOZ8zjm8Vnr8dmtfoB37--1--cudfk.jpg?tr=w-1600,c-at_max"
        alt="coffee"
      />
    </div>
  );
});

export const News = component$(() => {
  return (
    <div class="   h-fit   items-center justify-center bg-white bg-cover bg-no-repeat text-center text-green-100 lg:h-fit  ">
      <div class="flex  flex-col items-center justify-center bg-white">
        <h1 class="p-5 pb-1 text-center text-2xl text-[#1f4d37]">
          {" "}
          Latest News
        </h1>
        <div class="flex flex-col content-center items-center justify-center bg-white lg:w-1/2 lg:flex-row ">
          <a
            class="m-4  my-3 rounded-2xl border border-[#1f4d37]   p-8 "
            href="#"
          >
            <img
              src="https://loremflickr.com/800/600/girl"
              class=" overflow-hidden rounded-lg border"
            />
            <div class="mt-2 bg-white">
              <h4 class="text-xl font-bold">Exercises</h4>
              <p class="mt-2 text-gray-600">
                Create Exercises for any subject with the topics you and your
                students care about.
              </p>
              <div class="mt-5"></div>
            </div>
          </a>

          <a
            class="m-4  my-3 rounded-2xl border border-[#1f4d37]   p-8 "
            href="#"
          >
            <img
              src="https://loremflickr.com/800/600/girl"
              class=" overflow-hidden rounded-lg border"
            />
            <div class="mt-2 bg-white">
              <h4 class="text-xl font-bold">Exercises</h4>
              <p class="mt-2 text-gray-600">
                Create Exercises for any subject with the topics you and your
                students care about.
              </p>
              <div class="mt-5"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});

export const Footed = component$(() => {
  return (
    <div class=" flex-col bg-primary py-3">
      <div class="flex  w-screen  justify-center  bg-primary bg-no-repeat  p-5 pb-0 text-center   text-green-100 lg:mx-[30em] lg:w-1/2"></div>

      <div class="mb-5 ml-5  grid  grid-cols-4 gap-5">
        <div class="flex  ">
          <div class="justify-top  ml-5   flex flex-col ">
            <div class="flex   flex-row     ">
              <a
                href="https://x.com/jemartel98"
                aria-label="twitter"
                target="_blank"
                class="flex flex-col justify-start gap-2 p-2 hover:underline lg:flex-row"
              >
                <Lucid.TwitterIcon />
              </a>
            </div>
            <div class="flex  flex-row content-center justify-center">
              <a
                arial-label="linkedin"
                href="https://x.com/buymeacoffee"
                target="_blank"
                class="flex flex-col gap-2 p-2 text-lg hover:underline  lg:flex-row"
              >
                <Lucid.LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col ">
          <h1 class="mb-2 text-2xl"> Contact</h1>
          <h1 class="text-sm">info@jemarte.dev</h1>
          <h1> 111-111-111</h1>
        </div>
        <div class="mx-5 flex flex-col">
          <h1 class="mb-2 text-2xl"> Find us</h1>
          <h1 class="text-sm"> somwhere on the street </h1>
          <h1> Montreal</h1>
        </div>
        <div class="flex flex-col">
          <h1 class="mb-2 text-2xl"> Legals</h1>
          <h1> privacy policy</h1>
          <h1> term & condition </h1>
        </div>
      </div>
    </div>
  );
});

export const Footer = component$(() => {
  return (
    <div class="   flex  h-fit   items-center justify-center bg-white bg-cover bg-no-repeat p-5 text-center  text-green-100  lg:h-fit">
      <button class="rounded-lg bg-[#1f4d37] p-2 text-white">
        {" "}
        Buy the stuff
      </button>
    </div>
  );
});

export default component$(() => {
  return (
    <main class="scroll-smooth bg-[#cbe7c3]">
      <Header />
      <Land />
      <Mission />
      <Flower />
      <News />
      <Footer />
      <Footed />
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

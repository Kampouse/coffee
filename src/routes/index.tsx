import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "../components/Header";
import *  as Lucid from "lucide-qwik"
const bg2 = "background-image: url( ' https://media.discordapp.net/attachments/1247779779378413720/1251259488871387157/IMG_9437.jpg?ex=666dedb5&is=666c9c35&hm=348c1fa0828c4491092807353de7690950a7d82a581689018bbbed587e42cd19&=&format=webp&width=525&height=350')";


export const Land = component$(() => {
  return (
    <div
      class="py-[10vh] flex  rounded-lg          bg-no-repeat  text-center lg:w-1/2 lg:mx-[30em]  bg-center  bg-cover  h-[50em]"
      style={bg2}>
      <div
        class="flex lg:ml-36 text-center">
        <div class="flex h-full items-center justify-center">
          <div class="text-white mx-5">
            <div class=" bg-white/5 rounded-3xl px-4 pt-2 pb-1  my-4">
              <h2 class=" text-4xl font-semibold    ">The only coffee you will ever want</h2>
              <h4 class="mb-1 text-xl font-semibold  underline ">Maybe</h4>
            </div>
            <a
              type="a"
              class=" cursor-pointer rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              check our stocks
            </a>
          </div>
        </div>
      </div>
    </div>

  );
});


export const Mission = component$(() => {
  return (
    <section id="about" class="bg-white flex bg-no-repeat  text-center lg:w-1/2 lg:mx-[30em]  py-10 bg-center  bg-cover h-fit">
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






export const Footed = component$(() => {
  return (
    <div class=" flex-col bg-primary py-3">
      <div class="flex  bg-no-repeat  justify-center  text-center bg-primary  text-green-100 lg:w-1/2 lg:mx-[30em]   w-screen pb-0 p-5">


      </div>

      <div class="grid grid-cols-4  ml-5  mb-5 gap-5">
        <div class="flex  ">
          <div class="flex  flex-col   justify-top ml-5 ">
            <div class="flex   flex-row     ">
              <a href="https://x.com/jemartel98" aria-label="twitter" target="_blank" class="p-2 flex gap-2 lg:flex-row justify-start flex-col hover:underline">
                <Lucid.TwitterIcon />
              </a>
            </div>
            <div class="flex  flex-row justify-center content-center">
              <a arial-label="linkedin" href="https://x.com/buymeacoffee" target="_blank" class="p-2 text-lg flex lg:flex-row flex-col gap-2  hover:underline">
                <Lucid.LinkedinIcon />
              </a>
            </div>
          </div>


        </div>
        <div class="flex flex-col ">
          <h1 class="text-2xl mb-2"> Contact</h1>
          <h1 class="text-sm">info@jemarte.dev</h1>
          <h1> 111-111-111</h1>
        </div>
        <div class="flex flex-col mx-5">
          <h1 class="text-2xl mb-2"> Find us</h1>
          <h1 class="text-sm"> somwhere on the street </h1>
          <h1> Montreal</h1>
        </div>
        <div class="flex flex-col">
          <h1 class="text-2xl mb-2"> Legals</h1>
          <h1> privacy policy</h1>
          <h1> term & condition </h1>

        </div>

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

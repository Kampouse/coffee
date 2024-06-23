import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Icon from "../assets/img/Animated-Icon.svg?jsx";
import GreenLine from "../assets/img/greenline.svg?jsx";
import * as Lucid from "lucide-qwik";

export const Land = component$(() => {
  return (
    <div class="  flex h-[30rem] bg-main bg-cover   bg-center object-cover lg:h-[50rem] ">
      <div class="flex w-full flex-col items-center   justify-center">
        <Icon class="h-40 w-40 " />
        <h1 class="text-center text-3xl font-semibold tracking-[0.187em] text-white ">
          {" "}
          10% off your favourite Latte
        </h1>
        <h5 class=" font-mali text-background_1 py-3 text-center text-2xl font-semibold ">
          Every Tuesday
        </h5>
        <Link
          class="bg-secondary mt-4 rounded-lg b p-3 text-xl tracking-wider "
          href="/products"
        >
          See our Selection
        </Link>
      </div>
    </div>
  );
});

export const Featured = component$(() => {
  const food = ["Match", "latte", "Cappuccino", "Espresso", "Americano"]
  return (
    <section
      id="about"
      class="font-mali flex flex-col   bg-white bg-cover bg-center  bg-no-repeat  p-5 lg:px-20 px-12 h-fit">
      <div class="grid grid-cols-2 w-full py-10 ">
        <div class="flex flex-col  w-full">
          <h1 class="text-secondary  text-3xl font-bold lg:w-1/2 md:w-1/2 w-[12em]  "> Check out our summer selections </h1>
          <GreenLine class="   ml-24    lg:hidden     " />
        </div>

        <div class=" lg:flex flex-row  justify-end hidden lg:visible md:visible  ">
          <GreenLine />
          <h1 class="  text-primary    text-3xl text-left  font-light "> Curated just for YOU </h1>
        </div>
      </div>
      <div class="flex flex-wrap  ">
        {food.map((item) => {
          return (
            <div key={item} class="flex flex-col content-center justify-evenly text-center lg:px-0 m-5   ">
              <img
                width={750}
                height={600}
                class="lg:h-72  lg:w-60 h-80 w-96"
                src="https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max"
                alt="coffee"
              />
              <h1 class=" text-center text-black text-2xl"> {item}</h1>
            </div>
          )
        })
        }
      </div>
      <div>
      </div>
    </section>
  );
});

export const Description = component$(() => {
  return (
    <div id="#desc" class="flex  justify-center  bg-second bg-cover flex-col   ">
      <div class="flex flex-col lg:p-8 px-10 py-3 my-20 gap-3   lg:w-full ">
        <h1 class="text-center text-[24px] lg:w-[25em] break-all self-center  ">
          {" "}
          Welcome to "Coffee Now” where convenience meets quality. Founded by Jean-Philippe and Anna, our coffee shop offers a seamless experience: simply click to order online, then swing by to pick up your favourite brew.
          {" "}
        </h1>
        <Link href="/products" class="bg-secondary rounded-lg text-white w-40  p-3  self-center"> See our Selection


        </Link>
      </div>
    </div>
  );
});

export const Custom = component$(() => {
  return (
    <div id="#custom" class="   h-fit flex  flex-col     bg-white bg-cover bg-no-repeat  p-10 lg:pl-16 text-green-100 lg:h-fit  ">
      <div class="lg:py-5 ">
        <h1 class="text-black text-3xl font-bold font-mali">Customizing your drink is </h1>
        <h1 class=" text-secondary text-3xl font-bold font-mali">as easy as 1 2 3</h1>
      </div>
      <div class="flex lg:flex-row flex-col  lg:gap-72 pl-8 lg:pl-72">
        <div class="flex  flex-row lg:flex-col">
          <h1 class="text-8xl flex flex-row text-secondary w-40 pt-12 "> 1  <p class="p-5 pl-2 pt-0 self-end text-lg justify-end text-secondary   ">Choose the sugar level</p> </h1>
          <h1 class="text-secondary text-2xl"></h1>
          <Lucid.CoffeeIcon class="h-20 w-20  lg:place-self-center self-center pt-5 lg:pt-0" />

        </div>
        <div class="flex  flex-row lg:flex-col">
          <h1 class="text-8xl flex flex-row text-secondary w-40 pt-12 "> 2  <p class="p-5 pl-2 pt-0 self-end text-lg justify-end text-secondary   ">Choose the sugar level</p> </h1>
          <h1 class="text-secondary text-2xl"></h1>
          <Lucid.CoffeeIcon class="h-20 w-20  lg:place-self-center self-center pt-5 lg:pt-0" />

        </div>
        <div class="flex  flex-row lg:flex-col">
          <h1 class="text-8xl flex flex-row text-secondary w-40 pt-12 "> 3  <p class="p-5 pl-2 pt-0 self-end text-lg justify-end text-secondary   ">Choose the sugar level</p> </h1>
          <h1 class="text-secondary text-2xl"></h1>
          <Lucid.CoffeeIcon class="h-20 w-20  lg:place-self-center self-center pt-5 lg:pt-0" />

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
    <div class="flex h-fit items-center justify-center bg-white bg-cover bg-no-repeat p-5 text-center  text-green-100  lg:h-fit">
      <Link
        href="/products"
        about="products pages"
        class="rounded-lg bg-[#1f4d37] p-2 text-white"
      >
        {" "}
        Buy the stuff
      </Link>
    </div>
  );
});

export default component$(() => {
  return (
    <main class="scroll-smooth bg-[#cbe7c3]">

      <Land />

      <Featured />
      <Description />
      <Custom />
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
      media:
        "https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max",
    },
  ],
};

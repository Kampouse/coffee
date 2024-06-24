import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Icon from "../assets/img/Animated-Icon.svg?jsx";
import GreenLine from "../assets/img/greenline.svg?jsx";
import * as Lucid from "lucide-qwik";

import Step1 from "../assets/img/step1.png?jsx";
import Step2 from "../assets/img/step2.png?jsx";
import Step3 from "../assets/img/step3.png?jsx";

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
          class="bg-secondary b mt-4 rounded-lg p-3 text-xl tracking-wider "
          href="/products"
        >
          See our Selection
        </Link>
      </div>
    </div>
  );
});

export const Featured = component$(() => {
  const food = [
    {
      src: "../src/assets/img/herbal.png",
      alt: "Refreshing Herbal Tea",
    },
    {
      src: "../src/assets/img/smoothie.png",
      alt: "Chocolate Smoothie",
    },
    {
      src: "../src/assets/img/bubble.png",
      alt: "Bubble Tea",
    },
    {
      src: "../src/assets/img/cha.png",
      alt: "Cha Nom Thai Tea",
    },
    {
      src: "../src/assets/img/matcha.png",
      alt: "Cold Matcha with Milk",
    },
  ];

  return (
    <section
      id="about"
      class="font-mali flex h-fit   flex-col bg-white bg-cover  bg-center  bg-no-repeat p-5 px-12 lg:px-20"
    >
      <div class="grid w-full grid-cols-2 py-10 ">
        <div class="flex w-full  flex-col">
          <h1 class="text-secondary  w-[12em] text-3xl font-bold md:w-1/2 lg:w-1/2  ">
            {" "}
            Check out our summer selections{" "}
          </h1>
          <GreenLine class="   ml-24    lg:hidden     " />
        </div>

        <div class=" hidden flex-row  justify-end md:visible lg:visible lg:flex  ">
          <GreenLine />
          <h1 class="  text-primary    text-left text-3xl  font-light ">
            {" "}
            Curated just for YOU{" "}
          </h1>
        </div>
      </div>
      <div class="flex flex-wrap lg:grid lg:grid-cols-5  ">
        {food.map((item) => {
          return (
            <div
              key={item.alt}
              class="m-5 flex flex-col content-center justify-evenly text-center lg:px-0   "
            >
              <img
                width={750}
                height={600}
                class="h-80  w-96 lg:h-72 lg:w-60"
                src={item.src}
                alt={item.alt}
              />
              <h1 class=" text-center text-2xl text-black"> {item.alt}</h1>
            </div>
          );
        })}
      </div>
      <div></div>
    </section>
  );
});

export const Description = component$(() => {
  return (
    <div
      id="#desc"
      class="bg-second  flex  flex-col justify-center bg-cover   "
    >
      <div class="my-20 flex flex-col gap-3 px-10 py-3 lg:w-full   lg:p-8 ">
        <h1 class="self-center break-all text-center text-[24px] lg:w-[25em]  ">
          {" "}
          Welcome to "Coffee Now” where convenience meets quality. Founded by
          Jean-Philippe and Anna, our coffee shop offers a seamless experience:
          simply click to order online, then swing by to pick up your favourite
          brew.{" "}
        </h1>
        <Link
          href="/products"
          class="bg-secondary w-40 self-center rounded-lg  p-3  text-white"
        >
          {" "}
          See our Selection
        </Link>
      </div>
    </div>
  );
});

export const Custom = component$(() => {
  return (
    <div
      id="#custom"
      class="   flex h-fit  flex-col     bg-white bg-cover bg-no-repeat  p-10 text-green-100 lg:h-fit  "
    >
      <div class="lg:py-5 ">
        <h1 class="font-mali text-3xl font-bold text-black">
          Customizing your drink is{" "}
        </h1>
        <h1 class=" text-secondary font-mali text-3xl font-bold">
          as easy as 1 2 3
        </h1>
      </div>
      <div class="flex flex-col pl-8  lg:flex-row lg:gap-60 ">
        <div class="flex  flex-row lg:flex-col">
          <div>
            <h1 class="text-secondary flex  flex-row pt-12 text-8xl ">
              {" "}
              1{" "}
              <p class="text-secondary  w-48  justify-end self-end p-5 pl-2 pt-0 text-lg   ">
                Choose the sugar level
              </p>{" "}
            </h1>
          </div>
          <h1 class="text-secondary text-2xl"></h1>
          <Step1 class=" self-center pt-5 lg:place-self-center lg:pt-0" />
        </div>
        <div class="flex  flex-row lg:flex-col">
          <h1 class="text-secondary flex w-48 flex-row pt-12 text-8xl ">
            {" "}
            2{" "}
            <p class="text-secondary break-word justify-end self-end p-5 pl-2 pt-0 text-center text-lg   ">
              Choose the toppings
            </p>{" "}
          </h1>
          <Step2 class="  self-center pt-5 lg:place-self-center lg:pt-0" />
        </div>
        <div class="flex  flex-row lg:flex-col">
          <h1 class="text-secondary flex w-48 flex-row pt-12 text-8xl ">
            {" "}
            3{" "}
            <p class="text-secondary justify-end self-end p-5 pl-2 pt-0 text-lg   ">
              Choose the cup size
            </p>{" "}
          </h1>
          <h1 class="text-secondary text-2xl"></h1>
          <Step3 class="  self-center pt-5 lg:place-self-center lg:pt-0" />
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

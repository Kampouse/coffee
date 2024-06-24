import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Icon from "../assets/img/Animated-Icon.svg?jsx";
import GreenLine from "../assets/img/greenline.svg?jsx";
import * as Lucid from "lucide-qwik";

import Step1 from "../assets/img/step1.png?jsx";
import CoffeBG from "../assets/img/coffenobg.png?jsx";
import Step2 from "../assets/img/step2.png?jsx";
import Step3 from "../assets/img/step3.png?jsx";
import Bubble from "../assets/img/bubble.png?jsx";
import Matcha from "../assets/img/matcha.png?jsx";
import Herbal from "../assets/img/herbal.png?jsx";
import Smoothie from "../assets/img/smoothie.png?jsx";
import Cha from "../assets/img/cha.png?jsx";

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
      src: Herbal,
      alt: "Refreshing Herbal Tea",
    },
    {
      src: Smoothie,
      alt: "Chocolate Smoothie",
    },
    {
      src: Bubble,
      alt: "Bubble Tea",
    },
    {
      src: Cha,
      alt: "Cha Nom Thai Tea",
    },
    {
      src: Matcha,
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
              <item.src />
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
        <h1 class="self-center break-words text-center text-[24px] lg:w-[25em]  ">
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
  const steps = [
    {
      src: Step1,
      alt: "1",
      text: "Choose your sugar level",
    },
    {
      src: Step2,
      alt: "2",
      text: "Choose your toppings",
    },
    {
      src: Step3,
      alt: "3",
      text: "Choose the cup size",
    },
  ];

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
        {steps.map((item) => {
          return (
            <div
              key={item.alt}
              class="flex flex-col  justify-center lg:flex-col"
            >
              <div>
                <h1 class="text-secondary flex  flex-row justify-center pt-12 text-8xl ">
                  {" "}
                  {item.alt}{" "}
                  <p class="text-secondary  w-48  justify-end self-end p-5 pl-2 pt-0 text-lg   ">
                    {item.text}
                  </p>{" "}
                </h1>
              </div>
              <item.src class=" self-center pt-5 lg:place-self-center lg:pt-0" />
            </div>
          );
        })}
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

const Comment = component$(() => {
  return (
    <div class="bg-secondary flex h-fit flex-col  items-center justify-center gap-2 self-center  bg-no-repeat p-5  text-center   lg:h-fit">
      <div class="grid    lg:grid-cols-2 lg:gap-24  lg:px-52 ">
        <div class="w-full lg:self-end">
          <h1 class="font-mali pt-8 text-center text-2xl text-white lg:text-left">
            {" "}
            From Beans to Bliss: Why I Love Coffee Now
          </h1>
          <div class="flex flex-col  self-center p-8 pb-4 lg:flex-row">
            <Lucid.QuoteIcon
              color="#BFDFB7"
              class="  h-8 w-16 rotate-180 text-white"
            />
            <h2 class="flex w-96 flex-col gap-5 text-center text-xl lg:flex-row">
              Every cup at Coffee Now is a masterpiece in itself, crafted with
              precision and passion by their talented baristas. Whether it's a
              velvety smooth latte adorned with delicate latte art or a bold
              espresso that packs a punch, each sip is a testament to their
              commitment to quality.
            </h2>

            <Lucid.QuoteIcon
              color="#BFDFB7"
              class=" h-8    w-16 rotate-180 scale-[-1]  self-end text-white"
            />
          </div>
          <div class="flex flex-row justify-center gap-5">
            {" "}
            <div class="flex flex-col  content-center gap-2 self-center ">
              <img
                width={100}
                height={100}
                class="self-center  rounded-full"
                src="https://randomuser.me/api/portraits/men/23.jpg"
              />
            </div>
            <div class="self-center">
              <h1 class="font-mali text-background_2 self-center text-xl">
                {" "}
                - Jean-philippe
              </h1>
              <h2 class="font-mali self-center text-xl text-white">
                {" "}
                Developper
              </h2>
            </div>
          </div>
        </div>
        <CoffeBG class=" flex    lg:h-[500px] lg:w-[400px]" />
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
      <Comment />
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

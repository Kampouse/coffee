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
import OnMap from "../assets/img/map.png?jsx";

export const Land = component$(() => {
  return (
    <div class="  flex h-[30rem] bg-main bg-cover   bg-center object-cover lg:h-[50rem] ">
      <div class="flex w-full flex-col items-center   justify-center">
        <Icon class="h-40 w-40 " />
        <h1 class="text-center text-3xl font-semibold tracking-[0.187em] text-white ">
          {" "}
          10% off your favourite Latte
        </h1>
        <h5 class=" py-3 text-center font-mali text-2xl font-semibold text-background_1 ">
          Every Tuesday
        </h5>
        <Link
          class="b mt-4 rounded-lg bg-secondary p-3 text-xl tracking-wider "
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
      class="flex h-fit flex-col   bg-white bg-cover bg-center  bg-no-repeat  p-5 font-mali md:px-12 lg:px-20"
    >
      <div class="grid w-full grid-cols-2 py-10 ">
        <div class="flex w-full  flex-col">
          <h1 class="w-[12em]  text-3xl font-bold text-secondary md:w-1/2 lg:w-1/2  ">
            {" "}
            Check out our summer selections{" "}
          </h1>
          <GreenLine class="   ml-24    lg:hidden     " />
        </div>

        <div class=" hidden flex-row  justify-end md:visible lg:visible lg:flex  ">
          <GreenLine />
          <h1 class="  text-left    text-3xl font-light  text-primary ">
            {" "}
            Curated just for YOU{" "}
          </h1>
        </div>
      </div>
      <div class="flex flex-col  md:grid md:grid-cols-3 lg:grid lg:grid-cols-5  ">
        {food.map((item) => {
          return (
            <div key={item.alt} class="my-2 flex flex-col">
              <item.src class="h-64 w-64 self-center rounded-lg" />
              <h1 class=" self-center  py-4 text-2xl text-black">
                {" "}
                {item.alt}
              </h1>
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
      class="flex  flex-col  justify-center bg-second bg-cover   "
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
          class="w-40 self-center rounded-lg bg-secondary  p-3  text-white"
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
      id="#customorder"
      class="   flex h-fit  flex-col     bg-white bg-cover bg-no-repeat  p-10 text-green-100 lg:h-fit  "
    >
      <div class="lg:py-5 ">
        <h1 class="font-mali text-3xl font-bold text-black">
          Customizing your drink is{" "}
        </h1>
        <h1 class=" font-mali text-3xl font-bold text-secondary">
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
                <h1 class="flex flex-row  justify-center pt-12 text-8xl text-secondary ">
                  {" "}
                  {item.alt}{" "}
                  <p class="w-48  justify-end  self-end p-5 pl-2 pt-0 text-lg text-secondary   ">
                    {item.text}
                  </p>{" "}
                </h1>
              </div>
              <item.src class="  self-center pt-5 lg:place-self-center lg:pt-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
});

const Location = component$(() => {
  return (
    <div
      id="location"
      class="flex h-fit flex-col items-center  justify-center gap-2 self-center bg-white  bg-no-repeat p-5  text-center   lg:h-fit"
    >
      <div class="grid    lg:grid-cols-2 lg:gap-24  lg:px-52 ">
        <div class="w-full lg:self-center">
          <h1 class=" flex flex-row gap-3 pl-8 text-center font-mali  text-2xl text-primary  ">
            <Lucid.MapPinIcon color="#175B43" class=" self-center " />
            Store Location
          </h1>
          <div class="flex flex-col  self-center p-8 pb-4 pt-4 lg:flex-row">
            <OnMap />
          </div>
        </div>
        <div class="flex flex-col gap-2 self-center pt-12">
          <h1 class="font-normal text-black "> Downtown Montreal </h1>
          <h1 class="font-medium text-background_1">
            {" "}
            2471 Notre-Dame St. W, Montreal, Quebec H3J 1N6{" "}
          </h1>
          <h1 class="font-medium text-black">
            {" "}
            Our coffee shop is nestled in the heart of downtown Montreal, where
            the city's vibrant energy surrounds us. It's the perfect spot to
            unwind and enjoy exceptional coffee, whether you're beginning your
            day or seeking a break from the city's hustle and bustle. Come visit
            us and experience our cozy corner in downtown Montreal!{" "}
          </h1>
          <Link
            href="/products"
            class="mt-2 cursor-pointer self-center  rounded-lg bg-secondary p-2 "
          >
            {" "}
            Order now{" "}
          </Link>
        </div>
      </div>
    </div>
  );
});

const Comment = component$(() => {
  return (
    <div class="flex h-fit flex-col items-center  justify-center gap-2 self-center bg-secondary  bg-no-repeat text-center  md:p-5   lg:h-fit">
      <div class="grid    lg:grid-cols-2 lg:gap-24  lg:px-52 ">
        <div class="w-full lg:self-end">
          <h1 class=" pt-8 text-center   font-mali text-2xl text-white">
            {" "}
            From Beans to Bliss: Why I Love Coffee Now
          </h1>
          <div class="flex flex-col  self-center pb-4 md:p-8 lg:flex-row">
            <Lucid.QuoteIcon color="#BFDFB7" class="  h-8 w-16   text-white" />
            <h2 class="flex w-96 flex-col gap-5 text-center text-xl lg:flex-row">
              Every cup at Coffee Now is a masterpiece in itself, crafted with
              precision and passion by their talented baristas. Whether it's a
              velvety smooth latte adorned with delicate latte art or a bold
              espresso that packs a punch, each sip is a testament to their
              commitment to quality.
            </h2>

            <Lucid.QuoteIcon
              color="#BFDFB7"
              class=" h-8    w-16   self-end text-white"
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
              <h1 class="self-center font-mali text-xl text-background_2">
                {" "}
                - Jean-philippe
              </h1>
              <h2 class="self-center font-mali text-xl text-white">
                {" "}
                Developper
              </h2>
            </div>
          </div>
        </div>
        <CoffeBG class=" flex   w-96 lg:h-[500px] lg:w-[400px]" />
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
      <Location />
    </main>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "coffee now",
    meta: [
      {
        property: "og:image",
        content:
          "https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max",
      },
      {
        property: "og:description",
        content:
          "Coffee Now is a coffee shop that offers a wide range of coffee drinks, from classic espressos to seasonal lattes. Our coffee is sourced from the best coffee farms around the world and roasted to perfection. We take pride in serving the best coffee in town, and our baristas are dedicated to crafting the perfect cup for every customer. Visit us today and experience the magic of Coffee Now!",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "600",
      },
      {
        property: "og:image:alt",
        content: "leafs",
      },
      {
        property: "og:site_name",
        content: "coffee now",
      },
      {
        property: "og:title",
        content: "coffee now - the best coffee in town",
      },
      {
        property: "og:url",
        content: "https://coffeenow.com",
      },
    ],
  };
};

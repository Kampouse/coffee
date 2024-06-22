import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Icon from "../assets/img/Animated-Icon.svg?jsx";
import * as Lucid from "lucide-qwik";

export const Land = component$(() => {
  return (
    <div class="  flex h-[30rem] bg-main bg-cover   bg-center object-cover lg:h-[49rem] ">
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
          class="bg-secondary mt-4 rounded-lg p-3 text-xl tracking-wider "
          href="/products"
        >
          See our Selection
        </Link>
      </div>
    </div>
  );
});

export const Featured = component$(() => {
  return (
    <section
      id="about"
      class="font-mali flex h-fit bg-white bg-cover bg-center  bg-no-repeat py-10 text-center  "
    >
      <h1 class=" text-primary "> Check out ?? our summer selections</h1>
    </section>
  );
});

export const Flower = component$(() => {
  return (
    <div class="flex h-[15em] justify-center lg:h-[30em]">
      <h1 class="m-2 mt-12 w-screen text-center text-4xl font-semibold text-black lg:m-56 lg:w-1/2">
        {" "}
        the perfect coffee must be ...{" "}
      </h1>
      <img
        width={800}
        height={600}
        class=" flex   h-full w-52 bg-center bg-repeat-x lg:w-[100%]"
        src="https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max"
        alt="coffee"
      />
    </div>
  );
});

export const News = component$(() => {
  return (
    <div class="   h-fit   items-center justify-center bg-white bg-cover bg-no-repeat text-center text-green-100 lg:h-fit  ">
      <div class="flex  flex-col items-center justify-center bg-white">
        <h1 class="p-10 pb-1  text-center text-2xl text-[#1f4d37]">
          {" "}
          Latest News
        </h1>
        <div class="flex flex-col content-center items-center justify-center bg-white lg:w-1/2 lg:flex-row ">
          <a
            class="m-4  my-3 rounded-2xl border border-[#1f4d37]   p-8 "
            href="#"
          >
            <img
              height={600}
              width={800}
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
              width={800}
              height={600}
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
      media:
        "https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max",
    },
  ],
};

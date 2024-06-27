import { component$ } from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, useNavigate } from "@builder.io/qwik-city";

interface ProductProps {
  title: string, subtitle: string, price: string



}
export const head: DocumentHead = {
  title: "Coffee Now - Products",
  meta: [
    {
      name: "description",
      content: "smooth coffee is good",
      media:
        "https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max",
    },
  ],
};






export const ProductCard = component$<ProductProps>(({ title = "title", subtitle = "subtitle", price = "hello" }) => {

  const navigate = useNavigate();
  return (
    <div class="cursor-pointer">
      <div onClick$={() => navigate("/products/" + title)} class="  h-64 content-center flex justify-center bg-background_2 rounded-lg">
        <img width={335} height={256} src="https://images.nightcafe.studio/jobs/o18Jn35jZ4jbm5aRdEhr/o18Jn35jZ4jbm5aRdEhr--1--3bobm.jpg?tr=w-1600,c-at_max" class=" w-full" />
      </div>
      <div class="px-2 text-black">
        <div class="flex flex-row w-full justify-between mt-2">
          <Link href={"/products/" + title} class=" text-2xl font-mali font-medium leading-6"> {title} </Link>
          <h1 class="text-end self-end pr-5  text-secondary"> {price} </h1>
        </div>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
});
export const Tables = component$(() => {
  return (
    <div>
      <div class=" my-5 lg:mx-64 mx-5 lg:grid lg:grid-cols-3 gap-4">
        <ProductCard title="coffee" subtitle="good" price="10$" />
        <ProductCard title="merch" subtitle="subtitle" price="10$" />
        <ProductCard title="merch" subtitle="subtitle" price="10$" />
      </div >
    </div>
  );
});

interface SectionsProps {
  title: string, contents: string[]
}
export const Sections = component$<SectionsProps>(({ title, contents }) => {
  return (
    <section class="flex flex-col gap-3  ">
      <details class=" flex flex-col">
        <summary style=" display: block; list-style: none;" class="bg-white cursor-pointer  font-medium text-black text-lg  ">  {title} </summary >
        {contents.map((content) => {
          return <Link href={"/products/" + content} key={content} class="bg-white text-black text-md font-light cursor-pointer"> {content} </Link  >
        })}
      </details >
    </section>
  );
});

export default component$(() => {

  //type of hot drinks



  const content = ["Espresso", "Latte", "Cappuccino", "Mocha", "Macchiato"]



  return (
    <main class="lg:flex flex-col  h-fit  pt-16  bg-white ">
      <div class="flex flex-row">
        <div class="h-full bg-white lg:pl-12 lg:pt-12 lg:w-96">
          <div class=" hidden lg:flex lg:flex-col gap-3 font-mali">
            <div>
              <Sections title="Hot Drinks" contents={content} />
              <Sections title="Cold drinks" contents={content} />
            </div  >

            <div>
              <h1 class="bg-white text-black text-lg font-bold font-mali"> Food</h1>
              <h1 class="bg-white text-black text-md">SOON </h1>
            </div>
            <div class="flex flex-col">
              <h1 class="bg-white text-black text-md font-bold font-mali"> Coffee beans</h1>
              <Link href="/products/ligh-roast" class="bg-white text-black  text-md">Light Roast</Link>
              <Link href="/products/dark-roast" class="bg-white text-black  text-md">Dark  Roast</Link>
              <Link href="/products/no-roast" class="bg-white text-black  text-md">No Roast</Link>
            </div >
          </div>
        </div>
        <div>
          <h1 class="text-black text-left  font-mali ml-5 lg:mx-72 mt-8 text-3xl "> Top Favourites </h1>
          <div class="mb-16">
            <Tables />
            <Tables />
          </div>
        </div>
      </div>
    </main>
  );
});

import { component$ } from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { hot, cold, food, beans } from "./data";
export interface ProductProps {
  name: string;
  description: string;
  longDescription: string | undefined;
  price: number;
  image: string;
}
const content = [hot, beans, food, cold].flat();
//shuffle the content array

//take 9 random products from the content array
const Producto = content.slice(0, 9);
export const head: DocumentHead = {
  title: "Coffee Now - Products",
  meta: [
    {
      name: "description",
      content: "best coffee in town",
      media:
        "https://images.nightcafe.studio/jobs/Vkp6pDElnf3hXn1ncRRt/Vkp6pDElnf3hXn1ncRRt--1--387d3_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max",
    },
  ],
};

export const ProductCard = component$<ProductProps>(
  ({
    name = "title",
    description = "subtitle",
    price = "hello",
    image = "https://images.nightcafe.studio/jobs/o18Jn35jZ4jbm5aRdEhr/o18Jn35jZ4jbm5aRdEhr--1--3bobm.jpg?tr=w-1600,c-at_max",
  }) => {
    return (
      <div class="w-full">
        <Link href={"/products/" + name} class="">
          <img
            width={500}
            height={500}
            src={image}
            class="   h-[22rem] w-full cursor-pointer rounded-lg  border   md:h-[15em] lg:h-[15em]"
          />
          <div class="p-2 text-black   ">
            <div class="flex flex-row justify-start gap-2  ">
              <div class=" cursor-pointer font-mali text-2xl font-medium leading-6 ">
                {" "}
                {name}{" "}
              </div>
              <h1 class="self-start pt-1 text-black"> {price}$</h1>
            </div>

            <h2 class="text-left">{description.slice(0, 50)}</h2>
          </div>
        </Link>
      </div>
    );
  },
);

interface TablesProps {
  products: ProductProps[];
}

export const Tables = component$<TablesProps>(({ products }) => {
  return (
    <div>
      <div class="  my-5   md:grid md:grid-cols-3 md:gap-3 lg:grid lg:grid-cols-3 lg:gap-5">
        {products.map((e) => (
          <ProductCard key={e.name} {...e} />
        ))}
      </div>
    </div>
  );
});

interface SectionsProps {
  title: string;
  contents: string[];
}
export const Sections = component$<SectionsProps>(({ title, contents }) => {
  return (
    <section class="flex flex-col gap-3">
      <details open={true} class=" flex flex-col">
        <summary
          style=" display: block; list-style: none;"
          class="cursor-pointer bg-white text-3xl  font-bold text-black md:text-left  md:text-lg  "
        >
          {" "}
          {title}{" "}
        </summary>
        {contents.map((content) => {
          return (
            <Link
              href={"/products/" + encodeURI(content)}
              key={content}
              class=" md:text-md bg-white px-14 text-xl font-light text-black decoration-wavy decoration-2 hover:underline md:px-0  md:text-left  "
              reload={false}
            >
              {" "}
              {content}{" "}
            </Link>
          );
        })}
      </details>
    </section>
  );
});

export default component$(() => {
  return (
    <main class="h-fit flex-col bg-white md:flex    md:px-0 md:py-14 lg:py-24 ">
      <div class="flex flex-col lg:flex-row">
        <div class="order-last  h-full place-content-end self-center bg-white lg:order-first  lg:self-start lg:pl-12 lg:pt-12"></div>
        <div class="w-fit">
          <h1 class=" mt-8 text-center font-mali text-3xl text-black lg:mx-40  ">
            {" "}
            Most loved{" "}
          </h1>
          <div class="md:mb-16 md:px-8">
            <Tables products={Producto.slice(0, 3)} />
            <Tables products={Producto.slice(4, 9)} />
            <Tables products={Producto.slice(10, 12)} />
          </div>
        </div>
      </div>
    </main>
  );
});

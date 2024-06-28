import { component$ } from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, useNavigate } from "@builder.io/qwik-city";

interface ProductProps {
  title: string;
  subtitle: string;
  price: string;
  image: string | undefined;
}
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
    title = "title",
    subtitle = "subtitle",
    price = "hello",
    image = "https://images.nightcafe.studio/jobs/o18Jn35jZ4jbm5aRdEhr/o18Jn35jZ4jbm5aRdEhr--1--3bobm.jpg?tr=w-1600,c-at_max",
  }) => {
    const navigate = useNavigate();
    return (
      <div class="w-full">
        <div onClick$={() => navigate("/products/" + title)} class="">
          <img
            width={500}
            height={500}
            src={image}
            class=" h-full w-full max-w-[350px]  cursor-pointer"
          />
        </div>
        <div class="px-2 text-black">
          <div class="mt-2 flex w-full flex-row justify-between">
            <Link
              href={"/products/" + title}
              class=" cursor-pointer font-mali text-2xl font-medium leading-6"
            >
              {" "}
              {title}{" "}
            </Link>
            <h1 class="self-end pr-5 text-end  text-secondary"> {price} </h1>
          </div>
          <h2>{subtitle}</h2>
        </div>
      </div>
    );
  },
);

interface TablesProps {
  products: {
    title: string;
    subtitle: string;
    price: string;
    image: string | undefined;
  }[];
}

export const Tables = component$<TablesProps>(({ products }) => {
  return (
    <div>
      <div class="  my-5   lg:grid lg:grid-cols-3 lg:gap-5">
        {products.map((e) => (
          <ProductCard key={e.title} {...e} />
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
    <section class="flex flex-col gap-3  ">
      <details open={true} class=" flex flex-col">
        <summary
          style=" display: block; list-style: none;"
          class="cursor-pointer bg-white text-3xl  font-bold text-black lg:text-left  lg:text-lg  "
        >
          {" "}
          {title}{" "}
        </summary>
        {contents.map((content) => {
          return (
            <Link
              href={"/products/" + encodeURI(content)}
              key={content}
              class=" lg:text-md bg-white px-14 text-xl font-light text-black decoration-wavy decoration-2 hover:underline lg:px-0  lg:text-left  "
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
  const img = undefined;
  const products = [
    {
      title: "Dark Coffee",
      subtitle: "chocolate",
      price: "4.5$",
      image: img,
    },
    {
      title: "hoodie",
      subtitle: "freshly made ",
      price: "45$",
      image: img,
    },
    {
      title: "coffee beans",
      subtitle: "100 grams packing",
      price: "15$",
      image: img,
    },
  ];

  const product2 = [
    {
      title: "Light Coffee",
      subtitle: "buttery",
      price: "6.5$",
      image: img,
    },
    {
      title: "Matcha",
      subtitle: "the best",
      price: "7.5$",
      image: img,
    },
    {
      title: "coffee plant",
      subtitle: "small plant",
      price: "15$",
      image: img,
    },
  ];

  return (
    <main class="h-fit flex-col bg-white py-24    lg:flex lg:px-0 ">
      <div class="flex flex-col lg:flex-row">
        <div class="order-last  h-full place-content-end self-center bg-white lg:order-first  lg:self-start lg:pl-12 lg:pt-12"></div>
        <div>
          <h1 class=" mt-8 text-center font-mali text-3xl text-black lg:mx-72 lg:text-left ">
            {" "}
            Most loved{" "}
          </h1>
          <div class="px-16 lg:mb-16">
            <Tables products={products} />
            <Tables products={product2} />
          </div>
        </div>
      </div>
    </main>
  );
});

import { component$ } from "@builder.io/qwik";

export const ProductCard = component$(() => {
  return (
    <div class="p-32  lg:p-36 h-1/2   border  rounded border-primary">
      <h1 class="text-center">Card of Coffee</h1>

    </div>
  );
});



export const Tables = component$(() => {
  return (
    <div class=" bg-white  justify-center flex text-black  md:flex-col lg:flex-row flex-col  lg:gap-5  md:gap-2 py-12 px-12 gap-4 lg:px-32  lg:py-12">
      <ProductCard />
      <ProductCard />
      <ProductCard />

    </div >
  );
});



export default component$(() => {
  return (
    <main class=" mt-5 ">
      <Tables />
      <div class="py-40 h-[32.8em] content-center  bg-red-300">

        <h1 class=" text-center ">Featured products ????</h1>
      </div>


    </main>
  );
});

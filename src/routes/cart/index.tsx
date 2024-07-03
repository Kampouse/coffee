import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <main class=" my-4 flex  h-screen flex-row justify-center gap-20 bg-white p-8 pb-32 pt-16">
      <div class=" h-full w-[40em] rounded border-2 border-secondary px-32 py-4">
        <h1 class=" text-center text-2xl text-black">You Cart</h1>
      </div>
      <div class=" mx-16  w-[20em] rounded  border-2 border-secondary py-4 text-2xl ">
        <h1 class=" text-center text-2xl text-black"> buy a something </h1>
      </div>
    </main>
  );
});

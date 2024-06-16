import { component$ } from "@builder.io/qwik";


export const Tables = component$(() => {
  return (
    <div class=" bg-white  justify-center flex text-black lg:flex-row flex-col lg:gap-5 lg:p-32 lg:py-12">
      <div class="border rounded-xl border-main p-32 m-5  mb-1 lg:m-0 lg:p-48">
        <h1>Card of Coffee</h1>
      </div>
      <div class="border rounded-xl border-main p-32 m-5  mb-1 lg:m-0 lg:p-48">
        <h1>Card of Coffee</h1>
      </div>
      <div class="border rounded-xl border-main p-32 m-5 mb-1 lg:m-0 lg:p-48">
        <h1>Card of Coffee</h1>
      </div>

    </div >
  );
});



export default component$(() => {
  return (
    <main class=" bg-gray-300 mt-5">
      <Tables />
      <h1>Home</h1>


    </main>
  );
});

import { component$, Slot } from "@builder.io/qwik";
import { Sections } from ".";
import { cold, food, hot, beans } from "./data";
export default component$(() => {
  return (
    <>
      <div class="flex flex-col bg-white  px-2 text-center md:flex-col lg:flex-row lg:px-0 lg:text-left ">
        <div class="order-last mx-16 ml-2  gap-3 px-5  font-mali lg:order-first lg:flex  lg:flex-col lg:py-32">
          <Sections title="Hot Drinks" contents={hot} />
          <Sections title="Cold drinks" contents={cold} />
          <Sections title="Food" contents={food} />
          <Sections title="Beans" contents={beans} />
        </div>
        <div class="mx-5">
          <Slot />
        </div>
      </div>
    </>
  );
});

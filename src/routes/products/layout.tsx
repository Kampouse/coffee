import { component$, Slot } from "@builder.io/qwik";
import { Sections } from ".";
import { cold, food, hot, beans } from "./data";

export default component$(() => {
  const hotstring = hot.map((item) => item.name);
  const coldstring = cold.map((item) => item.name);
  const foodstring = food.map((item) => item.name);
  const beansstring = beans.map((item) => item.name);

  return (
    <>
      <div class="flex flex-col bg-white  px-2 text-center  md:flex-row md:px-0 md:text-left  ">
        <div class="order-last mx-0 ml-2 gap-3 px-5  font-mali md:order-first  md:my-20    md:flex md:flex-col  lg:my-0 lg:py-32">
          <Sections title="Hot Drinks" contents={hotstring} />
          <Sections title="Cold drinks" contents={coldstring} />
          <Sections title="Food" contents={foodstring} />
          <Sections title="Beans" contents={beansstring} />
        </div>
        <div class="mx-1">
          <Slot />
        </div>
      </div>
    </>
  );
});

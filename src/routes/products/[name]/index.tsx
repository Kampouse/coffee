import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  return (
    <main class="grid   h-[80vh] grid-cols-2  bg-white  p-20">
      <div class="justify-center rounded-xl bg-gray-100  text-center text-red-800">
        <h1 class="  mt-4 text-4xl">{location.params.name}</h1>
      </div>
      <div class=" mx-20 flex flex-col gap-2  self-center text-center align-bottom text-red-800">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h1>
        <button class="self-center rounded-lg bg-red-500 p-2  text-white">
          Click Me to know more
        </button>
      </div>
    </main>
  );
});

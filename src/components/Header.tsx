
import { component$ } from "@builder.io/qwik";


export default component$(() => {
  return (
    <header class="bg-primary h-15 p-5 grid fixed  grid-cols-2 w-screen ">
      <div class="flex justify px-5">
        <h1 class="content-nd">Logo</h1>
      </div>
      <div>
        <div class=" hidden md:visible
        lg:flex justify-end px-5 gap-12 lg:visible">
          <h1 class="content-nd">Logo</h1>
          <h1 class="content-nd">Logo</h1>
          <h1 class="content-nd">Logo</h1>
          <h1 class="content-nd">Logo</h1>
        </div>
        <div class="flex justify-end px-5 md:hidden lg:hidden">
          <h1 class="content-nd">drop down thing</h1>
        </div>
      </div>
    </header>
  );
});

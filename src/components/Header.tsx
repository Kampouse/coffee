import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class="h-15 fixed grid w-screen grid-cols-2  bg-primary p-5 ">
      <div class="justify flex px-5">
        <Link href="/" class=" content-nd cursor-pointer">
          Logo
        </Link>
      </div>
      <div>
        <div
          class=" hidden justify-end
        gap-12 px-5 md:visible lg:visible lg:flex"
        >
          <Link href="/products" class="content-nd cursor-pointer">
            {" "}
            Products{" "}
          </Link>
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

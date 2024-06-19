import { component$, useContext } from "@builder.io/qwik";
import { CartContext } from "~/routes/layout";
import * as lucid from "lucide-qwik"

import { Link } from "@builder.io/qwik-city";
export default component$(() => {

  const cart = useContext(CartContext);
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
          <div class="conntent-nd flex flex-row gap-2 ">
            <lucid.ShoppingCartIcon />
            <h1 class="flex">  {cart.value.length}</h1>
          </div>
          <div class="content-nd flex flex-row gap-2">
            <lucid.UserIcon />
            Profile</div>
        </div>
        <div class="flex justify-end px-5 md:hidden lg:hidden">
          <h1 class="content-nd">drop down thing</h1>
        </div>
      </div>
    </header>
  );
});

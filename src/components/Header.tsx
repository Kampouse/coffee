import { component$, useContext } from "@builder.io/qwik";
import { CartContext } from "~/routes/layout";
import * as lucid from "lucide-qwik";
import Logod from "../assets/img/CoffeIcon.svg?jsx";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
  const cart = useContext(CartContext);
  return (
    <header class="h-15 fixed grid w-screen grid-cols-3 bg-secondary   shadow-sm ">
      <div class=" flex px-5 ">
        <div class="rounded-lg border   border-secondary p-2 transition  ease-linear hover:bg-scondary_hover">
          <Link href="/" class=" content-nd cursor-pointer ">
            <Logod class="h-[4.5em] w-[4.5em]  " />
          </Link>
        </div>
      </div>
      <div class="flex content-center items-center justify-center">
        <div class="flex justify-end   px-5 md:flex ">
          <Link
            href="/products"
            class="content-nd cursor-pointer rounded-lg   border border-secondary p-3 transition ease-linear   hover:bg-scondary_hover "
          >
            {" "}
            Menu{" "}
          </Link>
          <Link
            href="/#location"
            class="content-nd cursor-pointer rounded-lg   border border-secondary p-3 transition ease-linear   hover:bg-scondary_hover "
          >
            {" "}
            Location{" "}
          </Link>
        </div>
      </div>
      <div class="flex content-center items-center justify-end gap-5  px-5 md:flex lg:flex">
        <Link
          text="cart"
          href="/cart"
          class=" content-nd flex cursor-pointer flex-row gap-2 rounded-lg   border border-secondary p-3 transition ease-linear   hover:bg-scondary_hover "
        >
          {" "}
          <lucid.ShoppingCartIcon />
          <h1 class="flex"> {cart.data.length}</h1>{" "}
        </Link>
      </div>
    </header>
  );
});

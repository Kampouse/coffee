import { component$, useContext } from "@builder.io/qwik";
import { CartContext } from "~/routes/layout";
import * as lucid from "lucide-qwik"
import Logod from "../assets/img/CoffeIcon.svg?jsx"
import { Link } from "@builder.io/qwik-city";
export default component$(() => {

  const cart = useContext(CartContext);
  return (
    <header class="h-15 fixed grid w-screen grid-cols-3  bg-[#175B43] p-[0.330rem] ">
      <div class=" flex px-5">
        <Link href="/" class=" content-nd cursor-pointer">
          <Logod class="h-[4.5em] w-[3em]" />
        </Link>
      </div>
      <div class="flex content-center justify-center items-center">
        <div
          class="flex justify-end px-5  md:flex lg:flex gap-5"
        >
          <Link href="/products" class="content-nd cursor-pointer">
            {" "}
            Menu
            {" "}
          </Link>
          <Link href="/products" class="content-nd cursor-pointer">
            {" "}
            Location{" "}
          </Link>
        </div>
      </div>
      <div
        class="flex content-center justify-end items-center px-5  md:flex lg:flex gap-5"
      >
        <div class="conntent-nd flex flex-row gap-2 px-4 ">
          <lucid.ShoppingCartIcon />
          <h1 class="flex">  {cart.value.length}</h1>
        </div>
      </div>
    </header>
  );
});

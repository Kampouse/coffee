import { component$, useContext } from "@builder.io/qwik";
import { CartContext } from "~/routes/layout";
import * as lucid from "lucide-qwik"
import Logod from "../assets/img/CoffeIcon.svg?jsx"
import { Link } from "@builder.io/qwik-city";
export default component$(() => {

  const cart = useContext(CartContext);
  return (
    <header class="h-15 fixed grid w-screen grid-cols-3  bg-secondary  p-[0.330rem] ">

      <div class=" flex px-5 ">

        <div class="p-2 hover:bg-scondary_hover   transition ease-linear border-secondary  border rounded-lg">
          <Link href="/" class=" content-nd cursor-pointer ">
            <Logod class="h-[4.5em] w-[4.5em]  " />

          </Link>

        </div>
      </div>
      <div class="flex content-center justify-center items-center">
        <div
          class="flex justify-end px-5  md:flex lg:flex gap-5 "
        >
          <Link href="/products" class="content-nd cursor-pointer hover:bg-scondary_hover   transition ease-linear p-3 border rounded-lg   border-secondary ">
            {" "}
            Menu
            {" "}
          </Link>
          <Link href="/products" class="content-nd cursor-pointer hover:bg-scondary_hover   transition ease-linear p-3 border rounded-lg   border-secondary ">
            {" "}
            Location
            {" "}
          </Link>
        </div>
      </div>
      <div
        class="flex content-center justify-end items-center px-5  md:flex lg:flex gap-5"
      >

        <button class=" flex flex-row content-nd gap-2 cursor-pointer hover:bg-scondary_hover   transition ease-linear p-3 border rounded-lg   border-secondary ">
          {" "}

          <lucid.ShoppingCartIcon />
          <h1 class="flex">  {cart.value.length}</h1>



          {" "}
        </button>



      </div>
    </header>
  );
});

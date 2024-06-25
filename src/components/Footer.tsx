import { component$ } from "@builder.io/qwik";
import { InstagramIcon, FacebookIcon } from "lucide-qwik";
import { Link } from "@builder.io/qwik-city";
import Logo from "../assets/img/CoffeIcon.svg?jsx"
export default component$(() => {
  return (
    <div class=" flex flex-col lg:flex-row  bg-primary lg:gap-32 py-3">
      <div class="  justify-center lg:self-start md:self-start self-center  gap-24  p-5 ">
        <Link
          href="/products"
          aria-label="products"
          class="flex self-center flex-col gap-3 w-32 "
        >
          <Logo class="self-center content-center" />
          <button class="bg-background_1 rounded-lg  p-2 ">Menu</button>
        </Link>
      </div>
      <div class="lg:pl-32 pl-10 flex lg:flex-row flex-col lg:gap-32 ">
        <div class="p-1 content-center">
          <h1 class=" text-left text-background_1 text-lg ">Location</h1>
          <h1 class="">2471 Notre-Dame St. W, Montreal, Quebec H3J 1N6</h1>
        </div>
        <div class="p-1 content-center">

          <h1 class="text-background_1   text-lg w-52">Phone number</h1>
          <h1 class="">418 123 123</h1>
        </div>
        <div class="p-1 lg:mt-16  flex-row gap-2 content-center ">

          <h1 class="text-background_1">
            follow us on
          </h1>
          <div class=" flex  content-center flex-start lg:self-center">

            <InstagramIcon class="w-6 h-6 m-2 self-center" />

            <FacebookIcon class="w-6 h-6 m-2 self-center" />
          </div>
        </div>
      </div>
    </div>
  );
});

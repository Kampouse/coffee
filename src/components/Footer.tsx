import { component$ } from "@builder.io/qwik";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "lucide-qwik";
import { Link } from "@builder.io/qwik-city";
import Logo from "../assets/img/CoffeIcon.svg?jsx";
export default component$(() => {
  return (
    <div class=" flex flex-col bg-primary  py-3 lg:flex-row lg:gap-32">
      <div class="  justify-center gap-24 self-center p-5  md:self-start  lg:self-start ">
        <Link
          href="/products"
          aria-label="products"
          class="flex w-32 flex-col gap-3 self-center "
        >
          <Logo class="content-center self-center" />
          <button class="rounded-lg bg-background_1  p-2 ">Menu</button>
        </Link>
      </div>
      <div class="flex flex-col pl-10 lg:flex-row lg:gap-32 lg:pl-32 ">
        <div class="content-center p-1">
          <div>
            <h1 class=" text-left text-lg text-background_1 ">Location</h1>
            <h1 class="">2471 Notre-Dame St. W, Montreal, Quebec H3J 1N6</h1>
          </div>
          <div>
            <h1 class=" text-left text-lg text-background_1 ">Busness hours</h1>
            <h1 class="">Mon - Fri : 6 am - 10pm</h1>

            <h1 class=" ">Sat - Sun: 8 am - 5pm</h1>
          </div>
        </div>
        <div class="content-center p-1">
          <h1 class="w-52   text-lg text-background_1">Phone number</h1>
          <h1 class="">418 123 123</h1>
        </div>
        <div class="flex-row gap-2  p-1 lg:mt-16  ">
          <h1 class="text-background_1">follow us on</h1>
          <div class=" flex-start   flex lg:self-center">
            <InstagramIcon class="m-2 h-6 w-6 self-center" />

            <FacebookIcon class="m-2 h-6 w-6 self-center" />
            <a href="https://linkedin.com/in/jemartel">
              <LinkedinIcon class="m-2 h-6 w-6 self-center" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

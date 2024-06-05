import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "../components/Header"
import custom from "./custom.css?inline"



const Imagersold = component$(() => {
  useStyles$(custom)
  return (
    <div class="grid lg:grid-cols-2 ">
      <img src="https://framerusercontent.com/images/6mGtL40CnJKWh5rpQ8s8mhGsk.jpg?scale-down-to=1024" alt="coffee" />
      <div>
        <div class="grid grid-cols-1 justify-items-center p-32">
          coffee
        </div>
        <div class="grid grid-cols-1 justify-items-center p-32 bg-primary">
          coffee
        </div>
      </div>
    </div>)


});









const Imagers = component$(() => {
  useStyles$(custom)
  return (
    <div class="carousel-container">
      <div class="carousel-item">
        <img src="image1.jpg" alt="Image 1" />
      </div>
      <div class="carousel-item">
        <img src="image2.jpg" alt="Image 2" />
      </div>
      <div class="carousel-item">
        <img src="image3.jpg" alt="Image 3" />
      </div>
    </div>


  )


});






export default component$(() => {
  return (
    <main>
      <Header />
      <Imagers />
    </main>
  );
});

export const head: DocumentHead = {
  title: "best coffee you can buy ",
  meta: [
    {
      name: "description",
      content: "smooth coffee is good",
    },
  ],
};

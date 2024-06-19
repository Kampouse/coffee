import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
export const ProductCard = component$((props: { title: string }) => {

  const navigate = useNavigate();


  return (
    <div onClick$={() => navigate("/products/" + props.title)}>
      <div class=" flex align-middle  justify-center lg:h-full h-44   border  lg:rounded  rounded-2xl  border-primary">
        <Link href={"/products/" + props.title} class=" self-center text-center"> {props.title} </Link>

      </div>
    </div>

  );
});



export const Tables = component$(() => {
  return (
    <div class=" bg-white   py-2 justify-center lg:grid  flex lg:grid-cols-3  text-black  md:flex-col lg:flex-row flex-col  lg:gap-5  md:gap-2    gap-4 px-4 lg:px-32 lg:py-5   ">
      <ProductCard title="coffee" />
      <ProductCard title="merch" />
      <ProductCard title="card" />
    </div >
  );
});

export default component$(() => {
  return (
    <main class="lg:grid lg:grid-rows-3  bg-white ">


      <div class=" lg:h-[25em] h-[20em]  content-center  bg-red-300">

        <h1 class=" text-center ">Featured products ????</h1>
      </div>


      <Tables />
      <Tables />

    </main>
  );
});

import { component$, useContext, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import * as Lucid from "lucide-qwik";
import { CartContext } from "../layout";
import type { CartItemProps } from "../layout";

const CartItem = component$<CartItemProps>((props) => {
  const cart = useContext(CartContext);
  const deleteItem = $(() => {
    cart.data = cart.data.filter((item) => item.name !== props.name);
  });
  const addItem = $(() => {
    cart.data = cart.data.map((item) => {
      if (item.name === props.name) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  });
  const removeItem = $(() => {
    cart.data = cart.data.map((item) => {
      if (item.name === props.name && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  });




  return (
    <div class="grid grid-cols-[80px_1fr_80px] items-center gap-4">
      <img
        src={props.image}
        alt={props.name}
        width="80"
        height="80"
        class="rounded-md object-cover"
        style="aspect-ratio: 80 / 80; object-fit: cover;"
      />
      <div class="grid gap-1">
        <h3 class="font-semibold">{props.name}</h3>
        <div class=" text-right">
          <div class="flex flex-row justify-end gap-2">
            <button onClick$={addItem} class="rounded-lg border border-gray-400 p-1 text-gray-800">
              {" "}
              <Lucid.PlusIcon />
            </button >
            <h1 class="p-1">{props.quantity}</h1>
            <button onClick$={removeItem} class="rounded-lg border border-gray-400 p-1 text-gray-800">
              {" "}
              <Lucid.MinusIcon />
            </button >
            <button onClick$={deleteItem} class="rounded-lg border border-gray-400 p-1 text-red-500">
              {" "}
              <Lucid.TrashIcon />
            </button >

          </div>
        </div>
        <p class="text-muted-foreground">
          {props.price} x {props.quantity}
        </p>
      </div>
      <div class="text-right font-semibold">
        {props.price * props.quantity}$
      </div>
    </div>
  );
});
export default component$(() => {
  const cart = useContext(CartContext);

  return (
    <div class="h-screen lg:mt-32 ">
      <div class=" mx-auto my-4 h-fit w-full max-w-4xl rounded-xl  border bg-white px-4  py-12 text-black md:px-6">
        <h1 class="mb-6 py-2 text-2xl font-bold">Your Cart</h1>
        <div class={"min-h-[12em]"}>
          <div class="grid gap-6 ">
            {cart.data.map((item) => {
              return <CartItem key={item.name} {...item} />;
            })}
          </div>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          class="bg-border my-6 h-[1px] w-full shrink-0"
        ></div>
        <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div class="text-2xl font-bold">Total: $123.94</div>

          <div class="flex gap-2">
            <Link
              href="/products"
              class="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Continue Shopping
            </Link>
            <button class=" ring-offset-background focus-visible:ring-ring text-primary-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-500/90  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

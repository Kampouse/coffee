import { component$, useContext, $, useSignal } from "@builder.io/qwik";
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
  // maybe we can use a computed value here
  return (
    <div class="grid grid-cols-[80px_1fr_80px] items-center   gap-1 rounded-md border bg-[#fafafa] p-2">
      <img
        src={props.image}
        alt={props.name}
        width="80"
        height="80"
        class=" rounded-lg border object-cover"
        style="aspect-ratio: 80 / 80; object-fit: cover;"
      />
      <div class="grid gap-1 px-2 ">
        <h3 class="font-semibold">{props.name}</h3>
        <div class=" text-right">
          <div class="flex flex-row justify-end gap-2">
            <h1 class="p-1">{props.quantity}</h1>
            <button
              onClick$={removeItem}
              class="rounded-lg border border-gray-400 p-1 text-gray-800"
            >
              {" "}
              <Lucid.MinusIcon />
            </button>
            <button
              onClick$={addItem}
              class="rounded-lg border border-gray-400 p-1 text-gray-800"
            >
              {" "}
              <Lucid.PlusIcon />
            </button>

            <button
              onClick$={deleteItem}
              class="rounded-lg border border-gray-400 p-1 text-red-500"
            >
              {" "}
              <Lucid.TrashIcon />
            </button>
          </div>
        </div>
        <p class="text-muted-foreground">
          {props.price}$ x {props.quantity}
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
  const totalPrice = cart.data.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const clicked = useSignal(false);
  return (
    <div class="my-32 h-full md:my-24 lg:my-32 lg:mb-[12.3rem]  ">
      <div class=" mx-auto my-4 h-fit w-full max-w-4xl rounded-xl  border bg-white px-4  py-8 text-black md:px-6">
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
          <div class="text-2xl font-bold">Total: {totalPrice} $</div>

          <div class="flex gap-2">
            <Link
              href="/products"
              class="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Continue Shopping
            </Link>
            <button
              onClick$={() => (clicked.value = !clicked.value)}
              class=" ring-offset-background focus-visible:ring-ring text-primary-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-500/90  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Proceed to Checkout
              {clicked.value ? <Lucid.CheckIcon /> : <Lucid.ArrowRightIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

import { component$, Slot } from '@builder.io/qwik';
import { Popover } from '@qwik-ui/headless';
export default component$(() => {
  return (
    <Popover.Root gutter={5}>
      <Popover.Trigger class="popover-trigger"><Slot /></Popover.Trigger  >
      {/* popover background-color gets overrided */}
      <Popover.Panel class="[&[popover]]: [&[popover]]:border-white [&[popover]]:bg-white [&[popover]]:shadow-lg
        [&[popover]]: [&[popover]]:h-96   [&[popover]]:border [&[popover]]:rounded-lg  [&[popover]]:text-foreground">
        Popover
      </Popover.Panel>
    </Popover.Root >
  );
});

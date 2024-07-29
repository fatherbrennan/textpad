import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header class="absolute top-0 h-header w-full border-b-4 border-double bg-paper">
      <h1 class="flex h-full items-center justify-center text-lg underline">Textpad</h1>
    </header>
  );
});

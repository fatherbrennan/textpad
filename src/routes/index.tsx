import { $, component$, useSignal } from '@builder.io/qwik';

import type { PropsOf, QRL } from '@builder.io/qwik';

export default component$(() => {
  const v = useSignal('');
  const isCopying = useSignal(false);
  const textarea = 'textpad';

  const copy: QRL<() => Promise<void>> = $(async () => {
    try {
      isCopying.value = true;
      await navigator.clipboard.writeText(v.value);
      setTimeout(() => (isCopying.value = false), 1000);
    } catch (error) {
      console.log(error);
    }
  });

  const transform: QRL<(value: string) => void> = $((value: string) => {
    v.value = value.replace(/\n/g, ' ');
  });

  const onInput: QRL<PropsOf<'textarea'>['onInput$']> = $(async (_event, { value }) => {
    await transform(value);
  });

  const onPaste: QRL<PropsOf<'textarea'>['onPaste$']> = $(async (_event, { value }) => {
    await transform(value);
    await copy();
  });

  return (
    <div class="flex h-full flex-grow flex-col">
      <div class="flex flex-row-reverse pb-2 text-ink">
        <button type="button" class="rounded-sm p-1 outline-black hover:bg-[#ededeb]" onClick$={copy} title={`Cop${isCopying.value ? 'ied' : 'y'} to cliboard`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <path d={`M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2${isCopying.value ? 'm0 9l2 2l4-4' : ''}`} />
            </g>
          </svg>
        </button>
      </div>
      <textarea
        name={textarea}
        id={textarea}
        title={textarea}
        class="h-full w-full resize-none rounded-sm bg-[#fdfdfc] p-2 outline-black"
        placeholder="Lorem, ipsum..."
        fetchPriority="high"
        value={v.value}
        onInput$={onInput}
        onPaste$={onPaste}
      ></textarea>
    </div>
  );
});

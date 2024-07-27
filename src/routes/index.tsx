import { $, component$, useSignal } from '@builder.io/qwik';

import type { PropsOf, QRL } from '@builder.io/qwik';

export default component$(() => {
  const v = useSignal('');
  const text = 'text';

  const onInput: QRL<PropsOf<'textarea'>['onInput$']> = $((_event, { value }) => {
    v.value = value.replace(/\n/g, ' ');
  });

  return (
    <textarea
      name={text}
      id={text}
      title={text}
      class="flex h-full w-full flex-grow"
      placeholder="Lorem, ipsum..."
      fetchPriority="high"
      value={v.value}
      onInput$={onInput}
    ></textarea>
  );
});

<script lang="ts">
  import { page } from '$app/stores';

</script>

<svelte:head>
  <meta name="description" content={$page.error?.message} />
  <title>{$page.status} · Peter Knight</title>
</svelte:head>

<!-- TITLE SNIPPET -->
{#snippet titleError()}
<div class="flex flex-col">
  
  <div class="font-bold text-zinc-700 tracking-tighter font-title text-5xl sm:text-3xl">
    {$page.error?.message.toUpperCase()}
  </div>
  <div class="items-center text-amber-300 flex gap-4">
    <div class="font-bold tracking-tighter font-title text-8xl">
      {$page.status}
    </div>
  </div>
  <a
      href="/"
      class="flex
    bg-amber-300 hover:bg-white w-fit my-20 gap-2 font-bold tracking-tighter transition-all active:scale-95 items-center text-3xl px-2 py-0.5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        class="w-8"
        viewBox="0 0 16 16"
        ><path
          fill="currentColor"
          d="M14 6h-1.7c-.2 0-.4-.1-.6-.2l-1.3-1.3c-.2-.3-.6-.5-1.1-.5H9c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7l-.2.3h-2c-1.1 0-2.3.5-3 1.5l-.6.8c-.4.4-.2 1 .2 1.3c.4.2.9.1 1.2-.3l.5-.7Q4.55 6 5.3 6h.8l-.7 1.6c-.3.6-.4 1.2-.4 1.9v2c0 .3-.2.5-.5.5H2c-.6 0-1 .4-1 1s.4 1 1 1h3.5c.8 0 1.5-.7 1.5-1.5V10l3.8 4.5c.6.9 1.7 1.5 2.8 1.5h.9L9.1 9.3c-.3-.4-.2-.8 0-1.3l.6-1.5l.7.8c.4.4 1 .7 1.6.7h2c.6 0 1-.4 1-1s-.4-1-1-1"
        /></svg
      >
      <p>Exit to Home</p>
    </a>
</div>

{/snippet}

<!-- PAGE TITLE -->
<section
  class="pt-8 px-4 lg:px-28 xl:px-52 2xl:px-72 flex justify-between items-baseline gap-10 flex-col xl:flex-row pb-[8rem]"
>
  {@render titleError()}
</section>
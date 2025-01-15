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
    <hgroup>
      <p
        class="selection:text-black selection:bg-zinc-700 font-bold text-zinc-700 tracking-tighter font-title text-5xl sm:text-3xl"
      >
        {$page.error?.message.toUpperCase()}
      </p>
      <h1
        class="selection:text-black selection:bg-green-300 font-bold tracking-tighter font-title text-8xl items-center text-green-300 flex gap-4"
      >
        {$page.status}
      </h1>
    </hgroup>
    <a
      href="/"
      class="flex select-none
    bg-green-300 hover:bg-white w-fit my-20 gap-2 font-bold tracking-tighter transition-all active:scale-95 items-center text-3xl px-2 py-0.5"
    >
      <img
        src="assets/symbols/exit_man_running_black.svg"
        alt="Black symbol of a man running, representing an exit sign."
        class="w-8"
      />
      Exit to Home
    </a>
  </div>
{/snippet}

<!-- PAGE TITLE -->
<main
  class="pt-8 px-4 lg:px-28 xl:px-52 2xl:px-72 flex justify-between items-baseline gap-10 flex-col xl:flex-row pb-[8rem]"
>
  {@render titleError()}
</main>

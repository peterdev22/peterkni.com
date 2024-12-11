<script lang="ts">
  import { page } from '$app/stores';

</script>

<svelte:head>
  <meta name="description" content={$page.error?.message} />
  <title>{$page.status} · Peter Knight</title>
</svelte:head>

<section class="my-20 px-10 lg:px-28 xl:px-52 2xl:px-72 flex justify-between">
  <div>
    <h1
      class="text-yellow-300 font-semibold text-8xl -rotate-1 underline underline-offset-[1rem]"
    >
      {$page.status}
    </h1>
    <p class="text-white font-medium text-2xl mt-10">
      {$page.error?.message}
    </p>
  </div>
  <div class="w-[65rem]"></div>
</section>

<section class="my-20 px-10 lg:px-28 xl:px-52 2xl:px-72">
  <div class="flex gap-8 text-black font-semibold text-3xl items-center">
    <a
      href="/"
      class="bg-yellow-300 hover:bg-yellow-400 px-3 py-1 transition-all rounded-2xl active:scale-95"
      >Go Home</a
    >
    
    <p class="text-lg text-zinc-600 font-medium italic">
      (peterkni.com)
    </p>
  </div>
</section>
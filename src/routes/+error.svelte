<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  // shuffle text animation
  const letters = 'abcdefghijklmnopqrstuvwxyz~/1234567890';
  let interval: any;
  let title: any;

  onMount(() => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      title.innerText = title.innerText
        .split('')
        .map((letter: any, index: any) => {
          if (index < iteration) {
            return title.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 31)];
        })
        .join('');

      if (iteration >= title.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 35);
  });
</script>

<svelte:head>
  <meta name="description" content={$page.error?.message} />
  <title>Peter Knight - {$page.status}</title>
</svelte:head>

<div class="flex flex-col md:flex-row animate-zoomFadeIn">
  <div class="basis-3/12" />

  <div class="basis-6/12 mx-7 xl:basis-4/12">
    <h1
      class="text-maroon text-5xl font-jetbrains font-bold mt-10 md:mt-60"
      data-value="{$page.status} error"
      bind:this={title}
    >
      {$page.status} error
    </h1>
    <h2 class="text-subtext-1 text-xl font-body font-bold my-6">
      {$page.error?.message}
    </h2>
    <br />

    <div class="py-2">
      <a
        href="/"
        class="transition-all duration-500 ease-in-out text-overlay-1 font-body text-lg font-semibold animate-zoomFadeIn hover:text-mauve hover:ml-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 16 16"
          class="inline-block align-text-bottom translate-y-1 mr-1.5"
          ><path
            fill="currentColor"
            fill-rule="evenodd"
            d="m2.87 7.75l1.97 1.97a.75.75 0 1 1-1.06 1.06L.53 7.53L0 7l.53-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06L2.87 6.25h9.88a3.25 3.25 0 0 1 0 6.5h-2a.75.75 0 0 1 0-1.5h2a1.75 1.75 0 1 0 0-3.5z"
            clip-rule="evenodd"
          /></svg
        >
        Go Home
      </a>
    </div>
  </div>

  <div class="basis-3/12" />
</div>

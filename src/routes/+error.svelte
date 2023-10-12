<script lang="ts">
  /* modules & data */
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  /* shuffleText of title on page load */
  const letters = "abcdefghijklmnopqrstuvwxyz~/1234567890";
  let interval: any;
  let title: any;

  onMount(() => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      title.innerText = title.innerText
        .split("")
        .map((letter: any, index: any) => {
          if (index < iteration) {
            return title.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 31)];
        })
        .join("");

      if (iteration >= title.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 35);
  });
</script>

<svelte:head>
  <meta name="description" content={$page.error?.message} />
  <title>Peter // {$page.status}</title>
</svelte:head>

<div class="flex flex-col md:flex-row animate-zoomFadeIn">
  <div class="basis-3/12" />

  <div class="basis-6/12 mx-7 xl:basis-4/12">
    <h1
      class="text-maroon text-5xl font-body font-bold mt-10 md:mt-60"
      data-value="{$page.status} error"
      bind:this={title}
    >
      {$page.status} error
    </h1>
    <h2 class="text-subtext-1 text-xl font-body font-bold my-6"
    >{$page.error?.message}</h2>
    <br />

    <li class="py-2">
      <a href="/" class="transition-all duration-500 ease-in-out text-overlay-1 font-body text-lg font-medium animate-zoomFadeIn hover:text-mauve hover:ml-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 512 512"
          class="inline-block align-text-bottom translate-y-1"
        >
          <path
            fill="currentColor"
            d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
          />
          <path
            fill="currentColor"
            d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"
          />
        </svg>
        Home
      </a>
    </li>
    <li class="py-2">
      <a href="https://youtu.be/dQw4w9WgXcQ" class="transition-all duration-500 ease-in-out text-overlay-1 font-body text-lg font-medium animate-zoomFadeIn hover:text-mauve hover:ml-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 256 256"
          class="inline-block align-text-bottom translate-y-1"
        >
          <path
            fill="currentColor"
            d="M144 180a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm92-52A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108Zm-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84Zm-84-64c-24.26 0-44 17.94-44 40v4a12 12 0 0 0 24 0v-4c0-8.82 9-16 20-16s20 7.18 20 16s-9 16-20 16a12 12 0 0 0-12 12v8a12 12 0 0 0 23.73 2.56C158.31 137.88 172 122.37 172 104c0-22.06-19.74-40-44-40Z"
          />
        </svg>
        ???
      </a>
    </li>

  </div>

  <div class="basis-3/12" />
</div>


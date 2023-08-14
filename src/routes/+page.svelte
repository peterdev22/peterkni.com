<!-- ---------------- SCRIPT -------------------- -->
<script lang="ts">
  import { personalProjects, schoolProjects } from "$lib/projectData";
  import Card from "./Card.svelte";
  import { onMount } from "svelte";

  /* shuffleText of title on page load */
  const letters = "abcdefghijklmnopqrstuvwxyz~/";
  let interval: any;
  let title: any;

  onMount(() => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      title.innerText = title.innerText
        .split("")
        .map((letter: any, index: number) => {
          if (index < iteration) {
            return title.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 21)];
        })
        .join("");

      if (iteration >= title.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 35);
  });

</script>

<!-- ---------------- HEAD -------------------- -->
<svelte:head>
  <meta
    name="description"
    content="A portfolio containing all public projects created by Peter."
  />
  <title>Peter // Home</title>
</svelte:head>

<div class="flex flex-col md:flex-row bg-crust">
  <div class="basis-2/12"></div>
  <div class="basis-4/12 mx-7">
    <h1 data-value="~/peters-website" bind:this={title} class="text-subtext-1 font-body text-3xl font-bold my-6 md:mt-60 animate-zoomFadeIn">~/peters-website</h1>

    <a href="https://github.com/peterdev22" class="text-overlay-0 font-body text-lg font-semibold flex flex-row gap-2 animate-zoomFadeIn hover:text-yellow">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.5em"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
      <p>
        GitHub
      </p>
    </a>

    <div class="animate-zoomFadeInDelay">
      <h2 class="text-maroon font-body font-bold text-2xl mt-10">Personal Projects</h2>
      {#each personalProjects as project, i (project.id)}
        <Card {...project} />
      {/each}

      <h2 class="text-green font-body font-bold text-2xl mt-10">School Shenanigans</h2>
      {#each schoolProjects as project, i (project.id)}
        <Card {...project} />
      {/each}
    </div>
  </div>
  <div class="basis-2/12"></div>
</div>


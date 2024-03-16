<!-- ---------------- SCRIPT -------------------- -->
<script lang="ts">
  import { programmingProjects, cadProjects, roboticsProjects, miscProjects } from '$lib/projectData';
  import Card from './Card.svelte';
  import { onMount } from 'svelte';

  /* shuffleText of title on page load */
  const letters = 'abcdefghijklmnopqrstuvwxyz~/';
  let interval: any;
  let title: any;

  let selectedView = 0;

  onMount(() => {

    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      title.innerText = title.innerText
        .split('')
        .map((letter: any, index: number) => {
          if (index < iteration) {
            return title.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 21)];
        })
        .join('');

      if (iteration >= title.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 35);
  });

  function changeSelectedView(view: number) {
    selectedView = view;
  }
</script>

<!-- ---------------- HEAD -------------------- -->
<svelte:head>
  <meta
    name="description"
    content="A portfolio containing all public projects created by Peter."
  />
  <title>Peter // Home</title>
</svelte:head>

<!-- ---------------- BODY -------------------- -->
<div class="flex flex-col sm:flex-row">
  <div class="basis-1/12 md:basis-2/12 lg:basis-3/12 xl:basis-2/12" />
  <div class="mx-7 basis-10/12 md:basis-8/12 lg:basis-6/12 xl:basis-8/12">

    <div class="animate-zoomFadeIn">
      <h1
        data-value="~/peters-website"
        bind:this={title}
        class="text-subtext-1 font-body text-3xl font-bold my-6 sm:mt-40"
      >
        ~/peters-website
      </h1>
    </div>

    <div class="text-overlay-0 font-body font-bold text-md animate-zoomFadeInDelay">
      See projects related to...
    </div>

    <div class="flex gap-10 mt-4 mb-16 animate-zoomFadeInDelay">
      <button class="{selectedView == 0 ? 'text-blue' : 'text-overlay-1'} font-body font-bold text-xl hover:text-text transition-all duration-300 ease-in-out"
      on:click={() => changeSelectedView(0)}>
        Computer Aided Design
    </button>
      <button class="{selectedView == 1 ? 'text-red' : 'text-overlay-1'} font-body font-bold text-xl hover:text-text transition-all duration-300 ease-in-out"
      on:click={() => changeSelectedView(1)}>
        Programming
  </button>
      <button class="{selectedView == 2 ? 'text-green' : 'text-overlay-1'} font-body font-bold text-xl hover:text-text transition-all duration-300 ease-in-out"
      on:click={() => changeSelectedView(2)}>
        Robotics
    </button>
  <button class="{selectedView == 3 ? 'text-pink' : 'text-overlay-1'} font-body font-bold text-xl hover:text-text transition-all duration-300 ease-in-out"
  on:click={() => changeSelectedView(3)}>
    Misc.
  </button>
    </div>

    <!-- <div class="animate-zoomFadeInDelay ">
      <h2 class="text-maroon font-body font-bold text-2xl mt-10">
        Personal Projects
      </h2>
      {#each personalProjects as project, i (project.id)}
        <Card {...project} />
      {/each}

      <h2 class="text-green font-body font-bold text-2xl mt-10">
        School Shenanigans
      </h2>
      {#each schoolProjects as project, i (project.id)}
        <Card {...project} />
      {/each}
    </div> -->
    
  </div>
  <div class="basis-1/12 md:basis-2/12 lg:basis-3/12 xl:basis-2/12" />
</div>


<div class="flex flex-col sm:flex-row">
  <div class="basis-1/12 md:basis-2/12 lg:basis-3/12 xl:basis-2/12" />
  <div class="mx-7 basis-10/12 md:basis-8/12 lg:basis-9/12 xl:basis-10/12 animate-zoomFadeInDelay">


    {#if selectedView == 0}
      <div class="flex gap-10">
        {#each cadProjects as project, i (project.id)}
        <Card {...project} />
      {/each}
      </div>
    {/if}
    {#if selectedView == 1}
      <div class="flex gap-10">
        {#each programmingProjects as project, i (project.id)}
        <Card {...project} />
      {/each}
      </div>
    {/if}
    {#if selectedView == 2}
      <div class="flex gap-10">
        {#each roboticsProjects as project, i (project.id)}
        <Card {...project} />
      {/each}
      </div>
    {/if}
    {#if selectedView == 3}
      <div class="flex gap-10">
        {#each miscProjects as project, i (project.id)}
        <Card {...project} />
      {/each}
      </div>
    {/if}
    
  </div>
  <div class="basis-1/12 md:basis-2/12 lg:basis-0/12 xl:basis-0/12" />
</div>


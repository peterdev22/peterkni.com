<script lang="ts">
  import { onMount } from 'svelte';
  import { cadProjects } from '$lib/data/projectData';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  // page theme data
  let theme: any = {
    colour: 'blue',
    title: 'Computer Aided Design',
    titleMini: 'CAD',
    description: 'CAD Projects by Peter Knight. This page contains a few of my most recent major CAD projects; view more about them by following the links provided on each card.',
    icon: 'M21.22 6.894a3.7 3.7 0 0 0-1.4-1.37l-6-3.31a3.83 3.83 0 0 0-3.63 0l-6 3.31a3.7 3.7 0 0 0-1.4 1.37a3.74 3.74 0 0 0-.52 1.9v6.41a3.79 3.79 0 0 0 1.92 3.27l6 3.3a3.74 3.74 0 0 0 3.63 0l6-3.31a3.72 3.72 0 0 0 1.91-3.26v-6.36a3.64 3.64 0 0 0-.51-1.95m-1 8.31a2.2 2.2 0 0 1-1.14 1.95l-6 3.31q-.158.089-.33.14v-8.18l7.3-4.39c.092.242.136.5.13.76z',
  };

  // screen width check
  let sm = false;

  onMount(() => {
    const checkScreenWidth = () => {
      sm = window.innerWidth <= 1024;
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  });
</script>

<!-- PAGE METADATA -->
<svelte:head>
  <meta name="description" content="{theme.description}" />
  <title>{theme.titleMini} · Peter Knight</title>
</svelte:head>

<!-- TITLE SNIPPET -->
{#snippet title(theme: any)}
<div class="flex flex-col">
  <div class="font-bold text-zinc-700 tracking-tighter font-title text-5xl sm:text-3xl">
    ALL PROJECTS
  </div>
  <div class="items-center {theme.colour == 'green'
            ? 'text-green-300'
            : theme.colour == 'blue'
              ? 'text-blue-300'
              : theme.colour == 'red'
                ? 'text-red-400'
                : theme.colour == 'yellow'
                  ? 'text-yellow-300'
                  : ''} flex gap-4">
    <div class="font-bold tracking-tighter font-title text-5xl sm:text-7xl">
      {#if !sm}
        {theme.title.toUpperCase()}
      {:else if theme.titleMini !== '' && sm}
        {theme.titleMini.toUpperCase()}
      {:else}
        {theme.title.toUpperCase()}
      {/if}
    </div>
  </div>
</div>

{/snippet}

<!-- PAGE TITLE -->
<section
  class="pt-8 px-4 lg:px-28 xl:px-52 2xl:px-72 flex justify-between items-baseline gap-10 flex-col xl:flex-row"
>
  {@render title(theme)}
</section>

<!-- PROJECT LIST -->
<section class="py-6 sm:py-12 px-4 lg:px-28 xl:px-52 2xl:px-72 flex flex-col gap-20">
  {#each cadProjects as project}
    <ProjectCard {project} {theme} />
  {/each}
</section>

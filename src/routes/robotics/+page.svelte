<script lang="ts">
  import { onMount } from 'svelte';
  import { roboticsProjects } from '$lib/data/projectData';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  // page theme data
  let theme = {
    colour: 'red',
    title: 'ROBOTICS',
    titleMini: '',
    description: 'Peter Knight\'s VEX Robotics projects. I am apart of the VEX Robotics team at my school, team 75477M Frij, and have been for the past 3 years. I have been involved in the design, engineering, and programming of the robots.',
    icon: 'M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5',
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
  <title>{theme.title} · Peter Knight</title>
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
        {theme.title}
      {:else if theme.titleMini !== '' && sm}
        {theme.titleMini}
      {:else}
        {theme.title}
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
  {#each roboticsProjects as project}
    <ProjectCard {project} {theme} />
  {/each}
</section>

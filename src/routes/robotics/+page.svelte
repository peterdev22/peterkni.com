<script lang="ts">
  import { onMount } from 'svelte';
  import { roboticsProjects } from '$lib/data/projectData';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  // page theme data
  let theme = {
    colour: 'red',
    title: 'Robotics',
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
  <title>{theme.titleMini !== '' ? theme.titleMini : theme.title} · Peter Knight</title>
</svelte:head>

<!-- TITLE SNIPPET -->
{#snippet title(theme: any)}
  <div
    class="items-center {theme.colour == 'green'
      ? 'text-green-300'
      : theme.colour == 'blue'
        ? 'text-blue-300'
        : theme.colour == 'red'
          ? 'text-red-400'
          : theme.colour == 'yellow'
            ? 'text-yellow-300'
            : ''} flex gap-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4rem"
      height="auto"
      viewBox="0 0 24 24"><path fill="currentColor" d={theme.icon} /></svg
    >
    <div class="font-semibold text-5xl sm:text-7xl">
      {#if !sm}
        {theme.title}
      {:else if theme.titleMini !== '' && sm}
        {theme.titleMini}
      {:else}
        {theme.title}
      {/if}
    </div>
  </div>
  <div
    class="items-center text-zinc-700 flex gap-2 bg-zinc-950 px-4 py-1 rounded-xl outline-1 outline-zinc-900 outline flex-shrink-0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="auto"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M6.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 7.414V19a1 1 0 1 1-2 0V7.414L3.707 9.707a1 1 0 0 1-1.414-1.414zM16 16.586V5a1 1 0 1 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414z"
      /></svg
    >
    <div class="font-semibold text-xl">Most Recent</div>
  </div>
{/snippet}

<!-- PAGE TITLE -->
<section
  class="pt-8 px-4 lg:px-28 xl:px-52 2xl:px-72 flex justify-between items-baseline gap-10 flex-col xl:flex-row"
>
  {@render title(theme)}
</section>

<!-- PROJECT LIST -->
<section class="py-6 sm:py-12 px-4 lg:px-28 xl:px-52 2xl:px-72 flex flex-col gap-12">
  {#each roboticsProjects as project}
    <ProjectCard {project} {theme} />
  {/each}
</section>

<script lang="ts">
  import { programmingProjects } from '$lib/data/projectData';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { onMount } from 'svelte';

  // page theme data
  let theme = {
    colour: 'yellow',
    title: 'Programming',
    titleMini: 'Code',
    description: 'Programming Projects by Peter Knight. This page contains a few of my most recent major programming projects; view more about them by following the links provided on each card.',
    icon: 'M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513s-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75',
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
    class="items-center text-zinc-700 flex gap-2 bg-zinc-950 px-4 py-1 rounded-xl outline-1 outline-zinc-900 outline"
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
  {#each programmingProjects as project}
    <ProjectCard {project} {theme} />
  {/each}
</section>

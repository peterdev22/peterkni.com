<script lang="ts">
  import { onMount } from 'svelte';
  import { programmingProjects } from '$lib/data/projectData';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  // page theme data
  let theme = {
    colour: 'yellow',
    title: 'Programming',
    titleMini: '',
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
  <title>{theme.title} · Peter Knight</title>
</svelte:head>

<!-- TITLE SNIPPET -->
{#snippet title(theme: any)}
<div class="flex flex-col">
  <a
      href="/"
      class="hidden lg:flex
    bg-green-300 hover:bg-white w-fit z-10 -mt-28 mb-20 gap-2 font-bold tracking-tighter transition-all active:scale-95 items-center text-3xl px-2 py-0.5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        class="w-8"
        viewBox="0 0 16 16"
        ><path
          fill="currentColor"
          d="M14 6h-1.7c-.2 0-.4-.1-.6-.2l-1.3-1.3c-.2-.3-.6-.5-1.1-.5H9c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7l-.2.3h-2c-1.1 0-2.3.5-3 1.5l-.6.8c-.4.4-.2 1 .2 1.3c.4.2.9.1 1.2-.3l.5-.7Q4.55 6 5.3 6h.8l-.7 1.6c-.3.6-.4 1.2-.4 1.9v2c0 .3-.2.5-.5.5H2c-.6 0-1 .4-1 1s.4 1 1 1h3.5c.8 0 1.5-.7 1.5-1.5V10l3.8 4.5c.6.9 1.7 1.5 2.8 1.5h.9L9.1 9.3c-.3-.4-.2-.8 0-1.3l.6-1.5l.7.8c.4.4 1 .7 1.6.7h2c.6 0 1-.4 1-1s-.4-1-1-1"
        /></svg
      >
      <p>Exit</p>
    </a>
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
  {#each programmingProjects as project}
    <ProjectCard {project} {theme} />
  {/each}
</section>

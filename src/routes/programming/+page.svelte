<script lang="ts">
  import { onMount } from 'svelte';
  import { programmingProjects } from '$lib/data/projectData';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  // page theme data
  let theme = {
    colour: 'yellow',
    title: 'Programming',
    titleMini: '',
    description: 'All of my programming projects. View the code of my website and documentation for my software and configurations here. I primarily use SvelteKit, TypeScript, and Tailwind CSS for web development.',
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
  <title>{theme.title} - Peter Knight</title>

  <meta property="og:title" content="{theme.title} - Peter Knight" />
  <meta property="og:url" content="https://peterkni.com/{theme.title.toLowerCase()}" />
</svelte:head>

<!-- TITLE SNIPPET -->
{#snippet title(theme: any)}
  <div class="flex flex-col">
    <a
      href="/"
      class="select-none hidden lg:flex
    bg-green-300 hover:bg-white group w-fit z-10 -mt-28 mb-20 gap-2 font-bold tracking-tighter transition-all active:scale-95 items-center text-3xl px-2 py-0.5"
    >
      <img
        src="/assets/symbols/exit_man_running_black.svg"
        alt="Black symbol of a man running, representing an exit sign."
        class="w-8 text-black font-normal truncate italic text-xs"
      />
      Exit
    </a>
    <hgroup>
      <p
        class="font-bold text-zinc-700 tracking-tighter font-title text-5xl sm:text-3xl selection:text-black selection:bg-zinc-700"
      >
        ALL PROJECTS
      </p>
      <h1
        class="items-center font-bold tracking-tighter font-title text-5xl sm:text-7xl {theme.colour ==
        'green'
          ? 'text-green-300 selection:bg-green-300'
          : theme.colour == 'blue'
            ? 'text-blue-300 selection:bg-blue-300'
            : theme.colour == 'red'
              ? 'text-red-400 selection:bg-red-400'
              : theme.colour == 'yellow'
                ? 'text-yellow-300 selection:bg-yellow-300'
                : ''} flex gap-4 selection:text-black"
      >
        {#if !sm}
          {theme.title.toUpperCase()}
        {:else if theme.titleMini !== '' && sm}
          {theme.titleMini.toUpperCase()}
        {:else}
          {theme.title.toUpperCase()}
        {/if}
      </h1>
    </hgroup>
  </div>
{/snippet}

<!-- PAGE TITLE -->
<section
  class="pt-8 px-4 lg:px-28 xl:px-52 2xl:px-72 flex justify-between items-baseline gap-10 flex-col xl:flex-row"
>
  {@render title(theme)}
</section>

<!-- PROJECT LIST -->
<main class="py-6 sm:py-12 px-4 lg:px-28 xl:px-52 2xl:px-72 flex flex-col gap-20">
  {#each programmingProjects as project}
    <ProjectCard {project} {theme} />
  {/each}
</main>

<script lang="ts">
  import { onMount } from 'svelte';
  import { programmingProjects } from '$lib/data/projectData';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  // page theme data
  let theme = {
    colour: 'yellow',
    title: 'Programming',
    titleMini: '',
    description:
      'All of my programming projects. View the code of my website and documentation for my software and configurations here. I primarily use SvelteKit, TypeScript, and Tailwind CSS for web development.',
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
  <!-- Standard metadata -->
  <meta name="description" content={theme.description} />
  <title>{theme.title} - Peter Knight</title>

  <!-- Open Graph (Website preview image) -->
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Hey I'm Peter. I enjoy CAD and 3D printing, and I currently compete in the VEX Robotics Competition. Explore my portfolio of various projects I have worked on."
  />
  <meta property="og:title" content="{theme.title} - Peter Knight" />
  <meta
    property="og:url"
    content="https://peterkni.com/{theme.title.toLowerCase()}"
  />
  <meta
    property="og:image"
    content="https://peterkni.com/assets/branding/pk_og_programming.png"
  />
  <meta
    property="og:image:alt"
    content="Black rectangle with a yellow top and right border, with the text 'Programming', 'Peter Knight' and 'Portfolio' on the bottom right and a stylised pair of white initials 'pk' on the left."
  />
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
<main
  class="py-6 sm:py-12 px-4 lg:px-28 xl:px-52 2xl:px-72 flex flex-col gap-20"
>
  {#each programmingProjects as project}
    <ProjectCard {project} {theme} />
  {/each}
</main>

<!-- SWITCHER -->
<section
  class="mt-14 sm:mt-8 px-4 lg:px-28 xl:px-52 2xl:px-72 flex gap-4 text-lg flex-col sm:flex-row sm:justify-between tracking-tight"
>
  <a
    href="/robotics"
    class="select-none items-center justify-between text-center font-bold hover:bg-white active:scale-95 py-2 lg:py-1 px-4 flex gap-2 text-black transition-all w-full sm:w-fit bg-green-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      class="w-5 hidden sm:block"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="m15.965 1.6l.035.034l-8.832 8.855H24v3.556H7.166L16 22.9l-.035.034h-5.319L0 12.268L10.647 1.601z"
      /></svg
    >
    Robotics
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      class="w-5 block sm:hidden"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="m15.965 1.6l.035.034l-8.832 8.855H24v3.556H7.166L16 22.9l-.035.034h-5.319L0 12.268L10.647 1.601z"
      /></svg
    >
  </a>
  <a
    href="/cad"
    class="select-none items-center justify-between text-center font-bold hover:bg-white active:scale-95 py-2 lg:py-1 px-4 flex gap-2 text-black transition-all w-full sm:w-fit bg-green-300"
  >
    Computer-aided Design
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      class="w-5"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M8.034 22.933L8 22.899l10.608-10.634L8 1.632l.034-.034h5.319L24 12.264L13.353 22.931z"
      /><path fill="currentColor" d="M0 10.488h18.666v3.555H0z" /></svg
    >
  </a>
</section>
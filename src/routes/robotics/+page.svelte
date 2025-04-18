<script lang="ts">
  import { onMount } from 'svelte';
  import { roboticsProjects } from '$lib/data/projectData';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  // page theme data
  let theme = {
    colour: 'red',
    title: 'Robotics',
    titleMini: '',
    description:
      'Information about my team, 75477M Frij, which has competed in the VEX Robotics Competition from 2022 to 2025. I have been involved in the design, building, programming, and documentation of the robot.',
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
    content="https://peterkni.com/assets/branding/pk_og_robotics.png"
  />
  <meta
    property="og:image:alt"
    content="Black rectangle with a red top and right border, with the text 'Robotics', 'Peter Knight' and 'Portfolio' on the bottom right and a stylised pair of white initials 'pk' on the left."
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
  {#each roboticsProjects as project}
    <ProjectCard {project} {theme} />
  {/each}
</main>

<!-- SWITCHER -->
<section
  class="mt-14 sm:mt-8 px-4 lg:px-28 xl:px-52 2xl:px-72 flex gap-4 text-lg flex-col sm:flex-row sm:justify-between tracking-tight"
>
  <a
    href="/cad"
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
    Computer-aided Design
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
    href="/programming"
    class="select-none items-center justify-between text-center font-bold hover:bg-white active:scale-95 py-2 lg:py-1 px-4 flex gap-2 text-black transition-all w-full sm:w-fit bg-green-300"
  >
    Programming
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

<script lang="ts">
  import { onMount } from 'svelte';
  import { cadProjects } from '$lib/data/projectData';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import ItemPreview from '$lib/components/ItemPreview.svelte';

  // page theme data
  let theme: any = {
    colour: 'blue',
    title: 'Computer-aided Design',
    titleMini: 'CAD',
    description:
      'All of my computer-aided design (CAD) projects. View my 3D models, renders, and videos for various industrial design projects. I primarily use Autodesk Fusion for CAD work and Blender for 3D rendering.',
    icon: 'M21.22 6.894a3.7 3.7 0 0 0-1.4-1.37l-6-3.31a3.83 3.83 0 0 0-3.63 0l-6 3.31a3.7 3.7 0 0 0-1.4 1.37a3.74 3.74 0 0 0-.52 1.9v6.41a3.79 3.79 0 0 0 1.92 3.27l6 3.3a3.74 3.74 0 0 0 3.63 0l6-3.31a3.72 3.72 0 0 0 1.91-3.26v-6.36a3.64 3.64 0 0 0-.51-1.95m-1 8.31a2.2 2.2 0 0 1-1.14 1.95l-6 3.31q-.158.089-.33.14v-8.18l7.3-4.39c.092.242.136.5.13.76z',
  };

  // screen width check
  let sm = $state(false);

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

    // item preview
  let isPreviewOpen: boolean = $state(false);
  let previewData = $state({});

  // prevent scrolling while preview is open
  $effect(() => {
    if (isPreviewOpen) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.add("touch-none");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.remove("touch-none");
    }
  });
</script>

<!-- PAGE METADATA -->
<svelte:head>
  <!-- Standard metadata -->
  <meta name="description" content={theme.description} />
  <title>{theme.titleMini} - Peter Knight</title>

  <!-- Open Graph (Website preview image) -->
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Hey I'm Peter. I enjoy CAD and 3D printing, and I currently compete in the VEX Robotics Competition. Explore my portfolio of various projects I have worked on."
  />
  <meta property="og:title" content="{theme.title} - Peter Knight" />
  <meta
    property="og:url"
    content="https://peterkni.com/{theme.titleMini.toLowerCase()}"
  />
  <meta
    property="og:image"
    content="https://peterkni.com/assets/branding/pk_og_cad.png"
  />
  <meta
    property="og:image:alt"
    content="Black rectangle with a blue top and right border, with the text 'Computer-aided Design', 'Peter Knight' and 'Portfolio' on the bottom right and a stylised pair of white initials 'pk' on the left."
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

<!-- ITEM PREVIEW (VIDEO/CAD MODEL)-->
{#if isPreviewOpen}
  <ItemPreview bind:isPreviewOpen bind:previewData />
{/if}

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
  {#each cadProjects as project}
    <ProjectCard {project} {theme} bind:isPreviewOpen bind:previewData />
  {/each}
</main>

<!-- SWITCHER -->
<!-- todo: replace inline svgs with <img> elements for consistency -->
<section
  class="mt-14 sm:mt-8 px-4 lg:px-28 xl:px-52 2xl:px-72 flex gap-4 text-lg flex-col sm:flex-row sm:justify-between tracking-tight"
>
  <a
    href="/programming"
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
    Programming
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
    href="/robotics"
    class="select-none items-center justify-between text-center font-bold hover:bg-white active:scale-95 py-2 lg:py-1 px-4 flex gap-2 text-black transition-all w-full sm:w-fit bg-green-300"
  >
    Robotics
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
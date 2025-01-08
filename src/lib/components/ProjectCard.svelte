<script lang="ts">
  import { PUBLIC_CF_IMAGES } from '$env/static/public';
  import { onMount } from 'svelte';

  let { project, theme } = $props();
  let tagMaxWidth = $state(false);

  // check screen width for tag display
  onMount(() => {
    const checkScreenWidth = () => {
      tagMaxWidth = window.innerWidth <= 1800;
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  });

  // handle local vs cloudflare pages image paths
  function getImagePath(
    section: string,
    filename: string,
    width: string,
    quality: string,
  ) {
    const productionBuild = PUBLIC_CF_IMAGES;

    if (productionBuild == 'true') {
      return `/cdn-cgi/image/format=auto,width=${width},quality=${quality}/assets/projects/${section}/${filename}`;
    } else {
      return `/assets/projects/${section}/${filename}`;
    }
  }
</script>

<div
  class="w-full relative bg-zinc-950 bg-opacity-50 text-white border-2 {theme.colour ==
  'green'
    ? 'border-green-300 '
    : theme.colour == 'blue'
      ? 'border-blue-300 '
      : theme.colour == 'red'
        ? 'border-red-400 '
        : theme.colour == 'yellow'
          ? 'border-yellow-300 '
          : ''} flex justify-between 2xl:h-[28rem] lg:flex-row flex-col border-b-zinc-900 border-l-zinc-900"
>
  <!-- TEXT SECTION -->
  <div class="flex flex-col mx-8 mt-6 mb-8">
    <!-- CARD TITLE -->
    <div class="flex items-center">
      <div class="text-4xl sm:text-5xl 2xl:text-4xl font-bold tracking-tight">
        {project.name}
      </div>
    </div>

    <!-- CARD DESCRIPTION -->
    <div class=" text-lg font-medium my-3 mb-8 text-white">
      {project.description}
    </div>

    <!-- BUTTONS -->
    <div
      class="flex flex-col gap-6 lg:gap-4 text-xl md:text-lg xl:text-md my-4 text-center font-bold sm:w-fit text-black 2xl:flex-row"
    >
      {#each project.buttons as button}
        <a
          href={button.url}
          target="_blank"
          class="py-2 lg:py-1 px-4 {theme.colour == 'green'
            ? 'bg-green-300 hover:bg-white'
            : theme.colour == 'blue'
              ? 'bg-blue-300 hover:bg-white'
              : theme.colour == 'red'
                ? 'bg-red-400 hover:bg-white'
                : theme.colour == 'yellow'
                  ? 'bg-yellow-300 hover:bg-white'
                  : ''}  transition-all active:scale-95"
        >
          <div class="flex items-center justify-center gap-2">
            <p class="line-clamp-1">
              {button.name}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="100%"
              class=""
              viewBox="0 0 16 16"
              ><path
                fill="currentColor"
                d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 0 1 1.5 0v1.5A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2h1.5a.75.75 0 0 1 0 1.5zM8 2.75A.75.75 0 0 1 8.75 2h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V4.561l-3.22 3.22A.75.75 0 1 1 8.22 6.72l3.22-3.22H8.75A.75.75 0 0 1 8 2.75"
              /></svg
            >
          </div>
        </a>
      {/each}
    </div>

    <!-- TAGS & DATE -->
    <div class="mt-auto items-center gap-4 hidden 2xl:flex">
      <div
        class="flex gap-4 text-md font-semibold
      {theme.colour == 'green'
          ? 'text-green-300 '
          : theme.colour == 'blue'
            ? 'text-blue-300 '
            : theme.colour == 'red'
              ? 'text-red-400 '
              : theme.colour == 'yellow'
                ? 'text-yellow-300 '
                : ''}
      "
      >
        {#each project.tags.slice(0, tagMaxWidth ? 2 : project.tags.length) as tag}
          <div
            class="px-2 py-0.5 border border-dashed {theme.colour == 'green'
              ? 'border-green-300 '
              : theme.colour == 'blue'
                ? 'border-blue-300 '
                : theme.colour == 'red'
                  ? 'border-red-400 '
                  : theme.colour == 'yellow'
                    ? 'border-yellow-300 '
                    : ''}"
          >
            {tag}
          </div>
        {/each}
      </div>
      {#if project.date}
        <div
          class="px-2 py-0.5 border font-semibold border-dashed border-zinc-700 text-zinc-500"
        >
          {project.date}
        </div>
      {/if}
    </div>
  </div>

  <!-- IMAGE SECTION -->
  <div class="p-8 lg:w-1/2 overflow-hidden flex-shrink-0">
    <img
      src={getImagePath(project.section, project.filename, '1920', '90')}
      alt={project.alt}
      class="h-full w-full object-cover"
    />
  </div>
</div>

<script lang="ts">
  import { PUBLIC_CF_IMAGES } from '$env/static/public';
  import { onMount } from 'svelte';

  let {
    project,
    theme,
    isPreviewOpen = $bindable(),
    previewData = $bindable(),
    previewFor = $bindable(),
  } = $props();
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
      return `/cdn-cgi/image/format=auto,onerror=redirect,width=${width},quality=${quality}/assets/projects/${section}/${filename}`;
    } else {
      return `/assets/projects/${section}/${filename}`;
    }
  }
</script>

<section
  id={project.name.replace(/\s+/g, '').toLowerCase()}
  class="selection:text-black scroll-mt-0 lg:scroll-mt-40 w-full relative bg-zinc-950 bg-opacity-50 text-white border-2 {theme.colour ==
  'green'
    ? 'border-green-300 selection:bg-green-300'
    : theme.colour == 'blue'
      ? 'border-blue-300 selection:bg-blue-300 '
      : theme.colour == 'red'
        ? 'border-red-400 selection:bg-red-400 '
        : theme.colour == 'yellow'
          ? 'border-yellow-300 selection:bg-yellow-300 '
          : ''} flex justify-between 2xl:h-[28rem] lg:flex-row flex-col border-b-zinc-900 border-l-zinc-900"
>
  <!-- TEXT SECTION -->
  <article class="flex flex-col mx-8 mt-6 mb-8">
    <!-- CARD TITLE -->
    <h2
      class="flex items-center text-4xl sm:text-5xl 2xl:text-4xl font-black tracking-tight"
    >
      {project.name}
    </h2>

    <!-- CARD DESCRIPTION -->
    <p class=" text-lg my-3 mb-8 font-medium tracking-tight text-white">
      {project.description}
    </p>

    <!-- BUTTONS -->
    <div
      class="select-none flex flex-col gap-6 lg:gap-4 text-xl md:text-lg xl:text-md my-4 text-center font-bold sm:w-fit text-black 2xl:flex-row"
    >
      {#each project.buttons as button}
        {#if button.url.startsWith('preview:')}
          <button
            onclick={() => {
              isPreviewOpen = !isPreviewOpen;
              previewData = project.previews[button.url.split(':')[1]];
              previewFor = project.name;
            }}
            class="py-2 lg:py-1 px-4 cursor-pointer {theme.colour == 'green'
              ? 'bg-green-300 hover:bg-white'
              : theme.colour == 'blue'
                ? 'bg-blue-300 hover:bg-white'
                : theme.colour == 'red'
                  ? 'bg-red-400 hover:bg-white'
                  : theme.colour == 'yellow'
                    ? 'bg-yellow-300 hover:bg-white'
                    : ''}  transition-all active:scale-95"
          >
            <div class="flex items-center justify-center gap-2 line-clamp-1">
              {button.name}
            </div>
          </button>
        {:else if button.url.startsWith('/') != true}
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
            <div class="flex items-center justify-center gap-2 line-clamp-1">
              {button.name}
              <img
                src="/assets/symbols/external_link_black.svg"
                alt="Black symbol of a rounded hollow box with an arrow inside pointing to the top right, representing an external link."
                class="w-5 text-black font-normal truncate italic text-xs"
              />
            </div>
          </a>
        {/if}
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
          <p
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
          </p>
        {/each}
      </div>
      {#if project.date}
        <p
          class="px-2 py-0.5 border font-semibold border-dashed border-zinc-700 text-zinc-500"
        >
          {project.date}
        </p>
      {/if}
    </div>
  </article>

  <!-- IMAGE SECTION -->
  <figure class="m-8 lg:w-1/2 overflow-hidden shrink-0">
    <img
      src={getImagePath(project.section, project.filename, '1920', '90')}
      alt={project.alt}
      class="h-full w-full object-cover text-zinc-700 text-lg italic ring-zinc-900 ring-inset ring-2 flex items-center text-center justify-center min-h-60 lg:min-h-full"
    />
    <figcaption
      class="w-fit text-xs sm:text-sm italic text-black px-2 py-0.5 tracking-tight font-semibold mt-2 lg:absolute lg:-translate-y-8 {theme.colour ==
      'green'
        ? 'bg-green-300 '
        : theme.colour == 'blue'
          ? 'bg-blue-300 '
          : theme.colour == 'red'
            ? 'bg-red-400 '
            : theme.colour == 'yellow'
              ? 'bg-yellow-300 '
              : ''}"
    >
      {project.caption}
    </figcaption>
  </figure>
</section>

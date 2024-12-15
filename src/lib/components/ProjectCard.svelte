<script>
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
</script>

<div
  class="w-full bg-zinc-950 text-white outline-1 outline-zinc-900 outline flex justify-between rounded-3xl 2xl:h-[28rem] lg:flex-row flex-col"
>
  <!-- TEXT SECTION -->
  <div class="flex flex-col m-6 text-white">
    <!-- CARD TITLE -->
    <div class="flex justify-between items-center">
      <div class="text-4xl sm:text-5xl 2xl:text-6xl font-semibold text-white">
        {project.name}
      </div>
    </div>

    <!-- CARD DESCRIPTION -->
    <div class=" text-xl font-medium my-6 text-zinc-500">
      {project.description}
    </div>

    <!-- BUTTONS -->
    <div
      class="flex flex-col gap-6 lg:gap-4 text-xl md:text-lg xl:text-md my-4 text-center font-semibold sm:w-fit text-black 2xl:flex-row"
    >
      {#each project.buttons as button}
        <a
          href={button.url}
          target="_blank"
          class="py-2 lg:py-1 px-4 {theme.colour == 'green'
            ? 'bg-green-300 hover:bg-green-400'
            : theme.colour == 'blue'
              ? 'bg-blue-300 hover:bg-blue-400'
              : theme.colour == 'red'
                ? 'bg-red-400 hover:bg-red-500'
                : theme.colour == 'yellow'
                  ? 'bg-yellow-300 hover:bg-yellow-400'
                  : ''} rounded-2xl lg:rounded-xl transition-all active:scale-95"
        >
          <div class="flex items-center justify-center gap-2 ">
            <p class="line-clamp-1">
              {button.name}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="auto"
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
    <div class="justify-between mt-auto items-center hidden 2xl:flex">
      <div class="flex gap-4 text-md font-medium text-zinc-500">
        {#each project.tags.slice(0, tagMaxWidth ? 2 : project.tags.length) as tag}
          <div class="bg-zinc-900 px-2 py-1 rounded-lg">
            {tag}
          </div>
        {/each}
      </div>
      {#if project.date}
        <div class="text-sm text-zinc-500">{project.date}</div>
      {/if}
    </div>
  </div>

  <!-- IMAGE SECTION -->
  <div class="rounded-2xl m-5 lg:w-1/2 overflow-hidden flex-shrink-0">
    <img
      src="/cdn-cgi/image/format=auto,width=1920,quality=100/assets/projects/{project.section}/{project.filename}"
      alt={project.alt}
      class="h-full w-full object-cover"
    />
  </div>
</div>

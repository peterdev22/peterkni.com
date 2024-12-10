<script lang="ts">
  import { roboticsProjects } from '$lib/data/projectData';
</script>

<svelte:head>
  <meta name="description" content="" />
  <title>Robotics · Peter Knight</title>
</svelte:head>

<!-- PAGE TITLE -->
<section
  class="pt-8 px-10 lg:px-28 xl:px-72 gap-4 items-center text-red-300 flex"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4rem"
    height="auto"
    viewBox="0 0 24 24"
    ><path
      fill="currentColor"
      d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"
    /></svg
  >
  <div class="font-semibold text-7xl">Robotics</div>
</section>

<!-- PROJECT LIST -->
<section class="py-12 px-10 lg:px-28 xl:px-72 flex flex-col gap-12">
  {#each roboticsProjects as project}
    <div
      class="w-full bg-zinc-950 text-white outline-1 outline-zinc-900 outline flex justify-between rounded-3xl h-[28rem]"
    >
      <!-- TEXT SECTION -->
      <div class="flex flex-col m-6 bg-zinc-950 text-white">
        <!-- CARD TITLE -->
        <div class="flex justify-between items-center">
          <div class=" text-6xl font-semibold text-white">
            {project.name}
          </div>
        </div>

        <!-- CARD DESCRIPTION -->
        <div class=" text-xl font-medium my-6 text-zinc-500">
          {project.description}
        </div>

        <!-- BUTTONS -->
        <div
          class="flex gap-4 text-md my-4 text-center font-semibold text-black"
        >
          {#each project.buttons as button}
            <a
              href={button.url}
              target="_blank"
              class="py-1 px-4 bg-red-300 rounded-xl hover:bg-red-400 transition-all active:scale-95"
            >
              <div>{button.name} →</div>
            </a>
          {/each}
        </div>
      </div>

      <!-- IMAGE SECTION -->
      <div class="rounded-2xl m-5 w-1/2 overflow-hidden flex-shrink-0">
        <img
          src="assets/projects/{project.section}/{project.filename}"
          alt={project.alt}
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  {/each}
</section>

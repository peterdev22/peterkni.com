<script lang="ts">
  import { cadProjects } from '$lib/data/projectData';
</script>

<!-- PAGE TITLE -->
<section
  class="pt-8 px-10 lg:px-28 xl:px-72 gap-8 flex justify-between items-center"
>
  <div class="text-blue-300 font-semibold text-7xl">Computer Aided Design</div>
</section>

<!-- PROJECT LIST -->
<section class="py-12 px-10 lg:px-28 xl:px-72 flex flex-col gap-12">
  {#each cadProjects as project}
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
        <div class="flex gap-4 text-md my-4 text-center font-semibold text-black">
          {#each project.buttons as button}
            <a
              href={button.url}
              class="py-1 px-4 bg-blue-300 rounded-xl hover:bg-blue-400 transition-all active:scale-95"
            >
              <div>{button.name} →</div>
            </a>
          {/each}
        </div>

      </div>

      <!-- IMAGE SECTION -->
      <div class="rounded-2xl m-6 w-1/2 overflow-hidden flex-shrink-0">
        <img
          src="assets/projects/{project.section}/{project.filename}"
          alt={project.alt}
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  {/each}
</section>

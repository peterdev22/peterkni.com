<script lang="ts">
  import { programmingProjects } from '$lib/data/projectData';
</script>

<svelte:head>
  <meta name="description" content="" />
  <title>Programming · Peter Knight</title>
</svelte:head>

<!-- PAGE TITLE -->
<section
  class="pt-8 px-10 lg:px-28 xl:px-72 gap-4 items-center text-yellow-300 flex"
>
<svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="auto" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513s-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75" clip-rule="evenodd"/></svg>
  
<div class="font-semibold text-7xl">Programming</div>
</section>

<!-- PROJECT LIST -->
<section class="py-12 px-10 lg:px-28 xl:px-72 flex flex-col gap-12">
  {#each programmingProjects as project}
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
              class="py-1 px-4 bg-yellow-300 rounded-xl hover:bg-yellow-400 transition-all active:scale-95"
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

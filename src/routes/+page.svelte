<script lang="ts">
  // data used in the featured projects section
  import { printoFeature } from '$lib/data/slideshowData';
  import { cadProjects } from '$lib/data/projectData';

  // slideshow component
  import Slideshow from '$lib/components/Slideshow.svelte';

</script>

<!-- PAGE METADATA -->
<svelte:head>
  <meta
    name="description"
    content="Peter Knight's portfolio of computer aided design (CAD), VEX robotics, 3D renders and programming projects. View source code, videos, CAD models and renders created by Peter in various different projects."
  />
  <title>Peter Knight · CAD, Robotics & Programming</title>
</svelte:head>

<!-- TITLE & INTRO -->
<section class="mb-12 px-10 lg:px-28 xl:px-52 2xl:px-72 flex flex-col lg:flex-row justify-between">
  <div>
    <h1
      class="text-yellow-300 font-semibold text-6xl sm:text-7xl lg:text-8xl -rotate-1 underline underline-offset-[1rem]"
    >
      Welcome !
    </h1>
    <p class="text-white font-medium text-xl sm:text-2xl mt-10">
      Hey, I'm Peter. On my wesbite you'll find some of my projects relating to
      CAD, Robotics and Programming.
    </p>
  </div>
  <div class="w-[55rem]"></div>
</section>

<!-- BUTTONS -->
<section class="mt-10 px-10 lg:px-28 xl:px-52 2xl:px-72">
  <h2 class="text-xl text-zinc-600 font-semibold mb-6">Go to projects:</h2>
  <div class="flex flex-col md:flex-row gap-8 text-black font-semibold text-3xl items-center">
    <a
      href="/cad"
      class="bg-blue-300 hover:bg-blue-400 px-3 py-1 transition-all rounded-2xl active:scale-95 shrink-0"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block mr-2 mb-[0.25rem]"
        width="2rem"
        height="auto"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M21.22 6.894a3.7 3.7 0 0 0-1.4-1.37l-6-3.31a3.83 3.83 0 0 0-3.63 0l-6 3.31a3.7 3.7 0 0 0-1.4 1.37a3.74 3.74 0 0 0-.52 1.9v6.41a3.79 3.79 0 0 0 1.92 3.27l6 3.3a3.74 3.74 0 0 0 3.63 0l6-3.31a3.72 3.72 0 0 0 1.91-3.26v-6.36a3.64 3.64 0 0 0-.51-1.95m-1 8.31a2.2 2.2 0 0 1-1.14 1.95l-6 3.31q-.158.089-.33.14v-8.18l7.3-4.39c.092.242.136.5.13.76z"
        /></svg
      >CAD</a
    >
    <a
      href="/robotics"
      class="bg-red-400 hover:bg-red-500 px-3 py-1 transition-all rounded-2xl active:scale-95 shrink-0"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block mr-2 mb-[0.25rem]"
        width="2rem"
        height="auto"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"
        /></svg
      >Robotics</a
    >
    <a
      href="/programming"
      class="bg-yellow-300 hover:bg-yellow-400 px-3 py-1 transition-all rounded-2xl active:scale-95 shrink-0"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block mr-2 mb-[0.25rem]"
        width="2rem"
        height="auto"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513s-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75"
        /></svg
      >Programming</a
    >
    <h2 class="text-lg text-zinc-600 font-medium italic hidden xl:block">
      Or keep scrolling to view some of my favourites.
    </h2>
  </div>
</section>

<!-- DIVIDER -->
<section class="flex justify-center text-zinc-800 text-6xl mt-16">
  · · ·
</section>

<!-- FEATURED PROJECTS HEADING -->
<h2
  class="mx-5 lg:mx-28 xl:mx-52 2xl:mx-64 mt-10 text-zinc-600 flex gap-2 items-center py-4 border-b-4 border-dashed border-zinc-900"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-[2rem] sm:w-[3.8rem] "
    viewBox="0 0 24 24"
    ><path
      fill="currentColor"
      d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
    /></svg
  >
  <div class=" font-semibold text-3xl sm:text-5xl lg:text-6xl">Featured Projects</div>
</h2>

<!-- FEATURED: PRINTO -->
<section
  class="bg-gradient-to-tr border border-1 border-zinc-900 bg-zinc-950 py-6 my-16"
>
  <div class="mb-6 px-10 lg:px-28 xl:px-52 2xl:px-80 flex flex-col sm:flex-row gap-6 sm:gap-12 items-center">
    <h3 class="font-semibold text-5xl text-white">Printo</h3>
    <p class="font-medium text-xl text-white mb-4 sm:mb-0">
      The 3D printer designed for home users.
    </p>
  </div>
  <div class="overflow-x-clip">
    <Slideshow images={printoFeature} />
  </div>
  <div class="flex flex-col sm:flex-row mx-auto w-fit text-center items-center justify-center mt-6 gap-4 sm:gap-6">
    {#each cadProjects[0].buttons as button}
      <a
        href={button.url}
        target="_blank"
        class="bg-blue-300 hover:bg-blue-400 text-xl font-semibold px-3 py-1 mt-2 sm:mt-0 transition-all rounded-xl active:scale-95"
        >{button.name}<svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="auto"
          class="inline-block mb-[0.2rem] ml-1"
          viewBox="0 0 16 16"
          ><path
            fill="currentColor"
            d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 0 1 1.5 0v1.5A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2h1.5a.75.75 0 0 1 0 1.5zM8 2.75A.75.75 0 0 1 8.75 2h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V4.561l-3.22 3.22A.75.75 0 1 1 8.22 6.72l3.22-3.22H8.75A.75.75 0 0 1 8 2.75"
          /></svg
        ></a
      >
    {/each}
  </div>
</section>

<!-- FEATURED: TOOTHBRUSH -->
<section
  class="bg-gradient-to-tr border border-1 border-zinc-900 bg-zinc-950 py-6 my-16"
>
  <div class="mb-6 px-10 lg:px-28 xl:px-52 2xl:px-80 flex flex-col sm:flex-row gap-6 sm:gap-12 items-center">
    <h3 class="font-semibold text-5xl text-white">Toothbrush Evaluation</h3>
    <p class="font-medium text-xl text-white mb-4 sm:mb-0">
      Practicing my CAD and rendering skills in preparation for the final
      project.
    </p>
  </div>
  <div class="flex gap-10 justify-center h-96 overflow-x-clip p-6 sm:p-0 -my-6 sm:my-0">
    <img
      class="rounded-3xl object-cover h-full"
      src="/cdn-cgi/image/format=auto,width=1080,quality=100/assets/projects/cad/toothbrush.jpg" 
      alt="Toothbrush CAD model">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
      class="rounded-3xl hidden md:block"
      controls
      controlsList="nodownload"
      poster="/cdn-cgi/image/format=auto,width=1080,quality=100/assets/projects/cad/st1_cover.jpeg"
      src="/assets/projects/cad/st1.mp4"
    >
    </video>
    <!-- svelte-ignore a11y_media_has_caption -->
    <!-- <video
      class="rounded-3xl"
      controls
      controlsList="nodownload"
      poster="/assets/projects/cad/st2_cover.jpeg"
      src="/assets/projects/cad/st2.mp4"
    >
    </video> -->
    <!-- <img
      class="rounded-3xl"
      src="assets/featured/explode_8bit.png"
      alt="Toothbrush CAD model"> -->
  </div>
  <div class="flex flex-col sm:flex-row mx-auto w-fit text-center items-center justify-center mt-6 gap-4 sm:gap-6">
    {#each cadProjects[1].buttons as button}
      <a
        href={button.url}
        target="_blank"
        class="bg-blue-300 hover:bg-blue-400 text-xl font-semibold px-3 py-1 mt-2 sm:mt-0 transition-all rounded-xl active:scale-95"
        >{button.name}<svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="auto"
          class="inline-block mb-[0.2rem] ml-1"
          viewBox="0 0 16 16"
          ><path
            fill="currentColor"
            d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 0 1 1.5 0v1.5A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2h1.5a.75.75 0 0 1 0 1.5zM8 2.75A.75.75 0 0 1 8.75 2h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V4.561l-3.22 3.22A.75.75 0 1 1 8.22 6.72l3.22-3.22H8.75A.75.75 0 0 1 8 2.75"
          /></svg
        ></a
      >
    {/each}
  </div>
</section>

<!-- ADD MORE SOON -->
 
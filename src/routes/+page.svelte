<script lang="ts">
  import { PUBLIC_CF_IMAGES } from '$env/static/public';
  import { printoFeature } from '$lib/data/slideshowData';
  import {
    cadProjects,
    roboticsProjects,
    programmingProjects,
  } from '$lib/data/projectData';

  // slideshow component
  import Slideshow from '$lib/components/Slideshow.svelte';

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

<!-- PAGE METADATA -->
<svelte:head>
  <meta
    name="description"
    content="Peter Knight's portfolio of computer aided design (CAD), VEX robotics, 3D renders and programming projects. View source code, videos, CAD models and renders created by Peter in various different projects."
  />
  <title>Peter Knight · CAD, Robotics & Programming</title>
</svelte:head>

<!-- PROJECT SECTION SNIPPET -->
{#snippet projectSection(type: any, filterIn: Array<number>)}
  {#each type.filter( (project: any) => filterIn.includes(project.id), ) as project}
    <article class="flex flex-col">
      <hgroup>
        <h3 class="text-2xl text-white font-black tracking-tight">
          {project.name}
        </h3>
        <p class="text-white font-medium tracking-tight">
          {project.summary}
        </p>
      </hgroup>

      <div
        class="flex justify-between sm:items-center sm:flex-row flex-col sm:gap-0 gap-2 sm:mb-0 mb-4"
      >
        <div
          class="flex gap-4 {project.section == 'misc'
            ? 'text-green-300'
            : project.section == 'cad'
              ? 'text-blue-300'
              : project.section == 'robotics'
                ? 'text-red-400'
                : project.section == 'programming'
                  ? 'text-yellow-300'
                  : ''} font-semibold my-2"
        >
          {#each project.tags as tag}
            <p
              class="border {project.section == 'misc'
                ? 'border-green-300'
                : project.section == 'cad'
                  ? 'border-blue-300'
                  : project.section == 'robotics'
                    ? 'border-red-400'
                    : project.section == 'programming'
                      ? 'border-yellow-300'
                      : ''} px-2 border-dashed"
            >
              {tag}
            </p>
          {/each}
        </div>
        <div class="flex gap-4 sm:gap-1">
          {#each project.buttons as button}
            <a
              href={button.url}
              target="_blank"
              class="text-center justify-center gap-1 {project.section == 'misc'
                ? 'bg-green-300'
                : project.section == 'cad'
                  ? 'bg-blue-300'
                  : project.section == 'robotics'
                    ? 'bg-red-400'
                    : project.section == 'programming'
                      ? 'bg-yellow-300'
                      : ''} text-lg sm:text-base flex items-center active:scale-95 transition-all w-full px-2 sm:w-auto sm:py-0 py-1 font-bold hover:bg-white text-black"
            >
              <div>{button.name}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.1rem"
                height="100%"
                class=""
                viewBox="0 0 16 16"
                ><path
                  fill="currentColor"
                  d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 0 1 1.5 0v1.5A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2h1.5a.75.75 0 0 1 0 1.5zM8 2.75A.75.75 0 0 1 8.75 2h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V4.561l-3.22 3.22A.75.75 0 1 1 8.22 6.72l3.22-3.22H8.75A.75.75 0 0 1 8 2.75"
                /></svg
              >
            </a>
          {/each}
        </div>
      </div>

      <div
        class="w-12 h-0.5 {project.section == 'misc'
          ? 'bg-green-300'
          : project.section == 'cad'
            ? 'bg-blue-300'
            : project.section == 'robotics'
              ? 'bg-red-400'
              : project.section == 'programming'
                ? 'bg-yellow-300'
                : ''} my-4 sm:my-2"
      ></div>
    </article>
  {/each}
{/snippet}

<!-- FEATURED SLIDESHOW -->
<section class="pb-16">
  <div class="overflow-x-clip">
    <Slideshow images={printoFeature} />
  </div>
</section>

<!-- PROJECT SECTIONS -->
<main
  class="mb-12 px-4 lg:px-28 xl:px-52 2xl:px-72 flex flex-col lg:flex-row gap-12 justify-center"
>
  <div class="flex flex-col gap-12 lg:w-[40rem]">
    <section
      class="w-full relative bg-zinc-950 bg-opacity-50 text-white border-2 border-b-zinc-900 border-l-zinc-900 border-green-300 flex justify-between lg:flex-row flex-col"
    >
      <div class="flex gap-2 flex-col m-4">
        <h2
          class="text-green-300 tracking-tight font-title font-bold text-4xl mb-6"
        >
          ABOUT
        </h2>
        <div class="flex flex-col">
          <p class="text-white font-medium tracking-tight max-w-[40rem]">
            Hello, I'm Peter. I enjoy designing functional objects with CAD and
            3D printing in my spare time. On this website you will find various
            projects I have worked on.
          </p>
          <div class="w-12 h-0.5 bg-green-300 my-4"></div>
          <a
            href="https://github.com/peterdev22"
            target="_blank"
            class="items-center font-bold mt-4 hover:bg-white active:scale-95 px-2 text-black transition-all flex gap-1 w-24 lg:w-fit bg-green-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              class="h-5"
              viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              /></svg
            >
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </section>

    <section
      class="relative bg-zinc-950 bg-opacity-50 text-white border-2 border-b-zinc-900 border-l-zinc-900 border-blue-300 flex justify-between lg:flex-row flex-col"
    >
      <div class="flex gap-2 flex-col p-4 w-full">
        <h2
          class="text-blue-300 tracking-tight font-title font-bold text-4xl mb-4"
        >
          COMPUTER AIDED DESIGN
        </h2>

        {@render projectSection(cadProjects, [1, 3, 4])}

        <hr class="border-zinc-600 my-3 border" />

        {@render projectSection(cadProjects, [2, 5])}

        <a
          href="/cad"
          class="bg-blue-300 px-2 active:scale-95 text-black mt-4 hover:bg-white transition-all font-semibold w-fit"
          >View all CAD projects</a
        >
      </div>
    </section>
  </div>

  <div class="flex flex-col gap-12 lg:w-[40rem]">
    <section
      class="relative bg-zinc-950 bg-opacity-50 text-white border-2 border-b-zinc-900 border-l-zinc-900 border-red-400 flex justify-between lg:flex-row flex-col"
    >
      <div class="flex gap-2 flex-col p-4 w-full">
        <h2
          class="text-red-400 tracking-tight font-title font-bold text-4xl mb-6"
        >
          ROBOTICS
        </h2>

        {@render projectSection(roboticsProjects, [1, 2])}

        <a
          href="/robotics"
          class="bg-red-400 px-2 text-black active:scale-95 mt-4 hover:bg-white transition-all font-semibold w-fit"
          >View all robotics projects</a
        >
      </div>
    </section>

    <section
      class="relative bg-zinc-950 bg-opacity-50 text-white border-2 border-b-zinc-900 border-l-zinc-900 border-yellow-300 flex justify-between lg:flex-row flex-col"
    >
      <div class="flex gap-2 flex-col p-4 w-full">
        <h2
          class="text-yellow-300 tracking-tight font-title font-bold text-4xl mb-6"
        >
          PROGRAMMING
        </h2>

        {@render projectSection(programmingProjects, [1, 2])}

        <hr class="border-zinc-600 my-3 border" />

        {@render projectSection(programmingProjects, [3])}

        <a
          href="/programming"
          class="bg-yellow-300 px-2 active:scale-95 text-black mt-4 hover:bg-white transition-all font-semibold w-fit"
          >View all programming projects</a
        >
      </div>
    </section>
  </div>
</main>

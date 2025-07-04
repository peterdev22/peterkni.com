<script lang="ts">
  import { PUBLIC_CF_IMAGES } from '$env/static/public';
  import { printoFeature } from '$lib/data/slideshowData';
  import {
    cadProjects,
    roboticsProjects,
    programmingProjects,
  } from '$lib/data/projectData';

  // components
  import Slideshow from '$lib/components/Slideshow.svelte';
  import ItemPreview from '$lib/components/ItemPreview.svelte';

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

  // item preview
  let isPreviewOpen: boolean = $state(false);
  let previewFor: string = $state('');
  let previewData = $state({});

  // prevent scrolling while preview is open
  $effect(() => {
    if (isPreviewOpen) {
      document.body.classList.add('overflow-y-hidden');
      document.body.classList.add('touch-none');
    } else {
      document.body.classList.remove('overflow-y-hidden');
      document.body.classList.remove('touch-none');
    }
  });
</script>

<!-- PAGE METADATA -->
<svelte:head>
  <!-- Standard metadata -->
  <meta
    name="description"
    content="Peter Knight. I enjoy CAD modeling and 3D printing, and I currently compete in the VEX Robotics Competition. Explore my portfolio of various CAD, robotics, and programming projects I have worked on."
  />
  <title>Peter Knight</title>

  <!-- Google Structured Data -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Peter Knight",
      "url": "https://peterkni.com/"
    }
  </script>

  <!-- Open Graph (Website preview image) -->
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Hey I'm Peter. I enjoy CAD and 3D printing, and I currently compete in the VEX Robotics Competition. Explore my portfolio of various projects I have worked on."
  />
  <meta property="og:title" content="Peter Knight" />
  <meta property="og:url" content="https://peterkni.com/" />
  <meta
    property="og:image"
    content="https://peterkni.com/assets/branding/pk_og.png"
  />
  <meta
    property="og:image:alt"
    content="Black rectangle with a green top and right border, with the text 'Peter Knight' and 'Portfolio' on the bottom right and a stylised pair of white initials 'pk' on the left."
  />
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
            {#if button.url.startsWith('/')}
              <!-- dont show external link icon, and target _blank if it is local -->
              <a
                href={button.url}
                class="select-none text-center justify-center gap-1 {project.section ==
                'misc'
                  ? 'bg-green-300'
                  : project.section == 'cad'
                    ? 'bg-blue-300'
                    : project.section == 'robotics'
                      ? 'bg-red-400'
                      : project.section == 'programming'
                        ? 'bg-yellow-300'
                        : ''} text-lg sm:text-base flex items-center active:scale-95 transition-all w-full px-2 sm:w-auto sm:py-0 py-1 font-bold hover:bg-white text-black"
              >
                {button.name}
              </a>
            {:else if button.url.startsWith('preview:')}
              <button
                onclick={() => {
                  isPreviewOpen = !isPreviewOpen;
                  previewData = project.previews[button.url.split(':')[1]];
                  previewFor = project.name;
                }}
                class="select-none cursor-pointer text-center justify-center gap-1 {project.section ==
                'misc'
                  ? 'bg-green-300'
                  : project.section == 'cad'
                    ? 'bg-blue-300'
                    : project.section == 'robotics'
                      ? 'bg-red-400'
                      : project.section == 'programming'
                        ? 'bg-yellow-300'
                        : ''} text-lg sm:text-base flex items-center active:scale-95 transition-all w-full px-2 sm:w-auto sm:py-0 py-1 font-bold hover:bg-white text-black"
              >
                {button.name}
              </button>
            {:else}
              <a
                href={button.url}
                target="_blank"
                class="select-none text-center justify-center gap-1 {project.section ==
                'misc'
                  ? 'bg-green-300'
                  : project.section == 'cad'
                    ? 'bg-blue-300'
                    : project.section == 'robotics'
                      ? 'bg-red-400'
                      : project.section == 'programming'
                        ? 'bg-yellow-300'
                        : ''} text-lg sm:text-base flex items-center active:scale-95 transition-all w-full px-2 sm:w-auto sm:py-0 py-1 font-bold hover:bg-white text-black"
              >
                {button.name}
                <img
                  src="/assets/symbols/external_link_black.svg"
                  alt="Black symbol of a rounded hollow box with an arrow inside pointing to the top right, representing an external link."
                  class="w-4 text-black font-normal truncate italic text-xs"
                />
              </a>
            {/if}
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

<!-- ITEM PREVIEW (VIDEO/CAD MODEL)-->
{#if isPreviewOpen}
  <ItemPreview bind:isPreviewOpen preview={previewData}  projectName={previewFor}/>
{/if}

<!-- FEATURED SLIDESHOW -->
<section class="pb-16">
  <div class="overflow-x-clip">
    <Slideshow images={printoFeature} />
  </div>
</section>

<!-- PROJECT SECTIONS -->
<main
  class="mb-12 px-4 lg:px-12 xl:px-40 2xl:px-60 flex flex-col lg:flex-row gap-12 justify-center"
>
  <div class="flex flex-col gap-12 lg:w-[40rem]">
    <section
      class="selection:text-black selection:bg-green-300 w-full relative bg-zinc-950 bg-opacity-50 text-white border-2 border-b-zinc-900 border-l-zinc-900 border-green-300 flex justify-between lg:flex-row flex-col"
    >
      <div class="flex gap-2 flex-col m-4">
        <h2
          class="text-green-300 tracking-tight font-title font-bold text-4xl mb-6"
        >
          ABOUT
        </h2>
        <div class="flex flex-col">
          <p class="text-white font-medium tracking-tight max-w-[40rem]">
            Hey, I'm Peter. I enjoy designing functional objects with CAD and 3D
            printing in my spare time. I have competed in the VEX Robotics
            Competition with my team 75477M Frij over the last three years. On
            this website, you will find documentation of various projects I have
            worked on.
          </p>
          <div class="w-12 h-0.5 bg-green-300 my-4"></div>
          <div class="flex gap-4">
            <a
              href="https://github.com/peterdev22"
              target="_blank"
              class="select-none items-center font-bold mt-4 hover:bg-white active:scale-95 px-2 text-black transition-all flex gap-1 w-24 lg:w-fit bg-green-300"
            >
              <img
                src="/assets/symbols/github_black.svg"
                alt="Black GitHub logo."
                class="h-5 text-black font-normal italic text-xs"
              />
              GitHub
            </a>
            <a
              href="https://www.printables.com/@peterk"
              target="_blank"
              class="select-none items-center font-bold mt-4 hover:bg-white active:scale-95 px-2 text-black transition-all flex gap-1 w-30 lg:w-fit bg-green-300"
            >
              <img
                src="/assets/symbols/printables_black.svg"
                alt="Black Printables logo."
                class="h-5 text-black font-normal italic text-xs"
              />
              Printables
            </a>
          </div>
        </div>
      </div>
    </section>

    <section
      class="selection:text-black selection:bg-blue-300 relative bg-zinc-950 bg-opacity-50 text-white border-2 border-b-zinc-900 border-l-zinc-900 border-blue-300 flex justify-between lg:flex-row flex-col"
    >
      <div class="flex gap-2 flex-col p-4 w-full">
        <h2
          class="text-blue-300 tracking-tight font-title font-bold text-4xl mb-4"
        >
          COMPUTER-AIDED DESIGN
        </h2>

        {@render projectSection(cadProjects, [1, 2, 4, 5])}

        <hr class="border-zinc-600 my-3 border" />

        {@render projectSection(cadProjects, [3, 6])}

        <a
          href="/cad"
          class="select-none bg-blue-300 px-2 active:scale-95 text-black mt-4 hover:bg-white transition-all font-semibold w-fit"
          >View all CAD projects</a
        >
      </div>
    </section>
  </div>

  <div class="flex flex-col gap-12 lg:w-[40rem]">
    <section
      class="selection:text-black selection:bg-red-400 relative bg-zinc-950 bg-opacity-50 text-white border-2 border-b-zinc-900 border-l-zinc-900 border-red-400 flex justify-between lg:flex-row flex-col"
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
          class="select-none bg-red-400 px-2 text-black active:scale-95 mt-4 hover:bg-white transition-all font-semibold w-fit"
          >View all robotics projects</a
        >
      </div>
    </section>

    <section
      class="selection:text-black selection:bg-yellow-300 relative bg-zinc-950 bg-opacity-50 text-white border-2 border-b-zinc-900 border-l-zinc-900 border-yellow-300 flex justify-between lg:flex-row flex-col"
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
          class="select-none bg-yellow-300 px-2 active:scale-95 text-black mt-4 hover:bg-white transition-all font-semibold w-fit"
          >View all programming projects</a
        >
      </div>
    </section>
  </div>
</main>

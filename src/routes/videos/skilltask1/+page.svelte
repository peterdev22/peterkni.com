<script lang="ts">
</script>

<svelte:head>
  <meta
    name="description"
    content="A portfolio containing projects created by Peter Knight. Anything I want to put online goes here, 
    and could be related to anything but is mostly CAD or code."
  />
  <title>Skill Task 1 Evaluation</title>
</svelte:head>

<div
  class="absolute w-full h-full -z-10 bg-bottom bg-grid bg-cover hidden lg:block"
></div>

<div class="flex flex-col sm:flex-row">
  <div class="basis-1/12 md:basis-2/12 lg:basis-3/12 xl:basis-2/12" />
  <div class="mx-7 basis-10/12 md:basis-8/12 lg:basis-6/12 xl:basis-8/12">
    <div class="animate-zoomFadeIn opacity-0">
      <div class="text-overlay-0 font-body font-bold italic text-lg mt-32">
        CAD 2024
      </div>
      <div class="text-subtext-1 font-title font-bold text-2xl">
        Toothbrush CAD & Motion - Evaluation
      </div>
    </div>

    <div
      class="transition-all opacity-0 animate-zoomFadeInDelay duration-500 cursor-default hover:shadow-blue-dark hover:-translate-y-1 shadow-2xl shadow-core flex flex-col justify-between p-4 pt-0 sm:mb-7 mt-5 h-auto bg-gradient-to-tr from-crust from-50% to-blue-dark to-100% rounded-xl border-4 border-mantle"
    >
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        class="w-full my-4 rounded-md"
        controls
        controlsList="nodownload"
        poster="/Assets/st1_cover.jpeg"
        src="/Assets/st1.mp4"
      >
      </video>
      <div class="text-yellow font-body font-bold text-xl">Skill Task 1</div>
      <div class="text-overlay-0 font-body text-xl">
        Challenges encountered during the creation of the toothbrush CAD model
        and its motion.
      </div>
      <br />
      <div class="flex justify-between">
        <div>
          <div class="text-overlay-0 font-bold font-jetbrains text-md">
            DURATION : 3:26
          </div>
          <div class="text-overlay-0 font-bold font-jetbrains text-md">
            DATE : 08-03-2024
          </div>
        </div>
        <div>
          <div class="text-overlay-0 font-bold font-body text-md text-right">
            By Peter
          </div>
          <a
            class="text-overlay-0 font-bold font-body text-md text-right hover:text-mauve transition-all underline"
            href="/videos/skilltask2">Go to Skill Task 2 ></a
          >
        </div>
      </div>
    </div>

    <div class="p-4">
      <a
        href="/"
        class="transition-all duration-500 opacity-0 ease-in-out text-overlay-1 font-body text-lg font-semibold animate-zoomFadeIn hover:text-mauve hover:ml-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 16 16"
          class="inline-block align-text-bottom translate-y-1 mr-1.5"
          ><path
            fill="currentColor"
            fill-rule="evenodd"
            d="m2.87 7.75l1.97 1.97a.75.75 0 1 1-1.06 1.06L.53 7.53L0 7l.53-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06L2.87 6.25h9.88a3.25 3.25 0 0 1 0 6.5h-2a.75.75 0 0 1 0-1.5h2a1.75 1.75 0 1 0 0-3.5z"
            clip-rule="evenodd"
          /></svg
        >
        Go Home
      </a>
    </div>
    <div
      class="lg:flex gap-10 mt-2 mb-14 lg:mb-8 animate-zoomFadeInDelay hidden"
    ></div>
  </div>
  <div class="basis-1/12 md:basis-2/12 lg:basis-3/12 xl:basis-2/12" />
</div>

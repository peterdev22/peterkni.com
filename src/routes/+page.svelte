<!-- ---------------- SCRIPT -------------------- -->
<script lang="ts">
  import {
    programmingProjects,
    cadProjects,
    roboticsProjects,
    miscProjects,
  } from '$lib/projectData';
  import Card from './Card.svelte';

  // relating to changing view via smooth scroll
  let targetScroll: number;
  let scrolling: boolean = false;
  let selectedView: number = 0;

  function changeSelectedView(view: number): void {
    switch (view) {
      case 0:
        targetScroll = 0; // CAD
        break;
      case 1:
        targetScroll = -800; // Programming
        break;
      case 2:
        targetScroll = -1500; // Robotics.
        break;
      case 3:
        targetScroll = -2200; // Misc.
        break;
      default:
        targetScroll = 0;
    }
    scrolling = true;
    requestAnimationFrame(smoothScroll);
  }

  // smooth scrolling
  function smoothScroll(): void {
    if (window.innerWidth <= 1024) {
      scrollLeft = targetScroll;
      scrolling = false;
    } else {
      let distance: number = targetScroll - scrollLeft;
      let step: number = distance * 0.1; // change speed of scroll

      scrollLeft += step;

      if (Math.abs(distance) < 0.01) {
        scrolling = false;
      } else {
        requestAnimationFrame(smoothScroll);
      }
    }
  }

  // scrolling sideways variables
  let isDown: boolean = false;
  let startX: number;
  let scrollLeft: number = 0;
  let velocity: number = 0;
  let lastX: number;
  let minScroll: number = -2200; // minimum scroll position
  let maxScroll: number = 0; // maximum scroll position

  // drag scrolling
  function handleMousedown(event: MouseEvent): void {
    isDown = true;
    startX = event.clientX;
    lastX = startX;
  }
  function handleMouseleave(): void {
    isDown = false;
  }
  function handleMousemove(event: MouseEvent): void {
    if (!isDown) return;
    event.preventDefault();
    const x: number = event.clientX;
    velocity = x - lastX;
    let newScrollLeft: number = scrollLeft + velocity;
    if (newScrollLeft < minScroll || newScrollLeft > maxScroll) return;
    scrollLeft = newScrollLeft;
    lastX = x;
  }
  function handleMouseup(): void {
    isDown = false;
    requestAnimationFrame(animate);
  }

  // smoother scrolling
  function animate(): void {
    if (!isDown && Math.abs(velocity) > 0.01) {
      let newScrollLeft: number = scrollLeft + velocity;
      if (newScrollLeft < minScroll || newScrollLeft > maxScroll) return;
      scrollLeft = newScrollLeft;
      velocity *= 0.95; // damping factor
      requestAnimationFrame(animate);
    }
  }

  // scroll sideways with mouse wheel
  function handleWheel(event: WheelEvent): void {
    if (window.innerWidth > 1024) {
      event.preventDefault();

      let newScrollAmount: number = scrollLeft - event.deltaY * 3;

      if (newScrollAmount < minScroll) newScrollAmount = minScroll;
      if (newScrollAmount > maxScroll) newScrollAmount = maxScroll;

      targetScroll = newScrollAmount;

      if (!scrolling) {
        scrolling = true;
        requestAnimationFrame(smoothScroll);
      }
    }
  }

  // reset scroll pos to default when resizing to smaller window
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', function () {
      if (window.innerWidth < 1024) {
        scrollLeft = 0;
        targetScroll = 0;
        if (scrolling) {
          scrolling = false;
        }
      }
    });
  }
</script>

<!-- ---------------- HEAD -------------------- -->
<svelte:head>
  <meta
    name="description"
    content="A portfolio containing projects created by Peter Knight. Anything I want to put online goes here, 
    and could be related to anything but is mostly CAD or code."
  />
  <title>Peter's Projects</title>
</svelte:head>

<!-- ---------------- BODY -------------------- -->
<div
  class="pb-40"
  on:mousedown={handleMousedown}
  on:mouseleave={handleMouseleave}
  on:mouseup={handleMouseup}
  on:mousemove={handleMousemove}
  on:wheel={handleWheel}
  role="scrollbar"
  aria-orientation="horizontal"
  aria-controls="scroll-container"
  aria-valuemin={0}
  aria-valuemax={1800}
  aria-valuenow={-scrollLeft}
  tabindex="0"
>
  <div
    class="absolute top-0 right-0 w-56 h-full bg-gradient-to-l from-[#12111B] to-transparent z-10 invisible lg:visible"
  ></div>

  <div class="flex flex-col sm:flex-row">
    <div class="basis-1/12 md:basis-2/12 lg:basis-3/12 xl:basis-2/12" />
    <div class="mx-7 basis-10/12 md:basis-8/12 lg:basis-6/12 xl:basis-8/12">
      <div class="animate-zoomFadeIn">
        <h1 class="text-subtext-1 font-title text-3xl font-bold my-4 sm:mt-40">
          Peter's Projects
        </h1>
        <div class="flex">
          <a
            href="https://github.com/peterdev22"
            class=" text-overlay-1 font-body text-lg font-semibold duration-500 ease-in-out transition-all flex hover:text-mauve hover:ml-1.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              viewBox="0 0 16 16"
              class="mt-2.5 mb-2.5 mr-2.5"
            >
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            <div class="flex flex-col">
              <div>GitHub</div>
              <div class="font-normal italic text-sm -mt-1">@peterdev22</div>
            </div>
          </a>
        </div>
      </div>

      <div
        class="text-overlay-0 font-body font-bold text-md animate-zoomFadeInDelay mt-12 hidden lg:block"
      >
        View Topic
      </div>

      <div
        class="lg:flex gap-10 mt-2 mb-14 lg:mb-8 animate-zoomFadeInDelay hidden"
      >
        <button
          class="{scrollLeft <= 0 && scrollLeft > -500
            ? 'text-blue'
            : 'text-overlay-1'} font-body font-bold text-xl hover:text-text transition-all duration-300 ease-in-out"
          on:click={() => changeSelectedView(0)}
        >
          CAD & Rendering
        </button>
        <button
          class="{scrollLeft < -500 && scrollLeft > -1200
            ? 'text-red'
            : 'text-overlay-1'} font-body font-bold text-xl hover:text-text transition-all duration-300 ease-in-out"
          on:click={() => changeSelectedView(1)}
        >
          Programming
        </button>
        <button
          class="{scrollLeft < -1200 && scrollLeft > -1800
            ? 'text-peach'
            : 'text-overlay-1'} font-body font-bold text-xl hover:text-text transition-all duration-300 ease-in-out"
          on:click={() => changeSelectedView(2)}
        >
          Robotics
        </button>
        <button
          class="{scrollLeft < -1800 && scrollLeft > -3000
            ? 'text-green'
            : 'text-overlay-1'} font-body font-bold text-xl hover:text-text transition-all duration-300 ease-in-out"
          on:click={() => changeSelectedView(3)}
        >
          Misc.
        </button>
      </div>

      <!-- <div class="animate-zoomFadeInDelay ">
      <h2 class="text-maroon font-body font-bold text-2xl mt-10">
        Personal Projects
      </h2>
      {#each personalProjects as project, i (project.id)}
        <Card {...project} />
      {/each}

      <h2 class="text-green font-body font-bold text-2xl mt-10">
        School Shenanigans
      </h2>
      {#each schoolProjects as project, i (project.id)}
        <Card {...project} />
      {/each}
    </div> -->
    </div>
    <div class="basis-1/12 md:basis-2/12 lg:basis-3/12 xl:basis-2/12" />
  </div>

  <div class="flex flex-col sm:flex-row">
    <div class="basis-1/12 md:basis-2/12 lg:basis-3/12 xl:basis-2/12" />
    <div
      class="mx-7 basis-10/12 md:basis-8/12 lg:basis-9/12 xl:basis-10/12 animate-zoomFadeInDelay"
    >
      <div
        class="lg:flex gap-16"
        style="transform: translateX({scrollLeft}px); transition: transform 0.1s;"
      >
        {#if selectedView == 0}
          <div class="lg:rotate-90 origin-top mt-20 lg:mt-0">
            <h3
              class="font-jetbrains text-surface-0 text-3xl font-bold absolute translate-x-5 -translate-y-12"
            >
              CAD
            </h3>
          </div>
          <div class="lg:flex gap-10">
            {#each cadProjects as project, i (project.id)}
              <Card {...project} />
            {/each}
          </div>
        {/if}

        {#if selectedView == 0}
          <div class="lg:rotate-90 origin-top mt-20 lg:mt-0">
            <h3
              class="font-jetbrains text-surface-0 text-3xl font-bold absolute translate-x-5 -translate-y-12"
            >
              PROGRAMMING
            </h3>
          </div>
          <div class="lg:flex gap-10">
            {#each programmingProjects as project, i (project.id)}
              <Card {...project} />
            {/each}
          </div>
        {/if}

        {#if selectedView == 0}
          <div class="rotate-90 origin-top">
            <h3
              class="font-jetbrains text-surface-0 text-3xl font-bold absolute translate-x-5 -translate-y-12"
            >
              ROBOTICS
            </h3>
          </div>
          <div class="flex gap-10">
            {#each roboticsProjects as project, i (project.id)}
              <Card {...project} />
            {/each}
          </div>
        {/if}

        {#if selectedView == 0}
          <div class="lg:rotate-90 origin-top mt-20 lg:mt-0">
            <h3
              class="font-jetbrains text-surface-0 text-3xl font-bold absolute translate-x-5 -translate-y-12"
            >
              MISC
            </h3>
          </div>
          <div class="lg:flex gap-10">
            {#each miscProjects as project, i (project.id)}
              <Card {...project} />
            {/each}
          </div>
        {/if}
      </div>
    </div>
    <div class="basis-1/12 md:basis-2/12 lg:basis-0/12 xl:basis-0/12" />
  </div>
</div>

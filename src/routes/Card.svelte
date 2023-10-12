<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  export let id: number;
  export let title: string;
  export let description: string;
  export let date: string;
  export let url: string;
  export let domain: string;
  export let images: Array<{
    source: string;
    alt: string;
    initialX: number;
    initialY: number;
    initialRotation: number;
    initialScale: number;
    finalX: number;
    finalY: number;
    finalRotation: number;
    finalScale: number;
  }>;

  $: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0

  const image = images[0];
  const translateX = tweened(image.initialX, {
    delay: 100,
    duration: 600,
    easing: cubicOut,
  });
  const translateY = tweened(image.initialY, {
    delay: 100,
    duration: 600,
    easing: cubicOut,
  });
  const rotation = tweened(image.initialRotation, {
    delay: 100,
    duration: 600,
    easing: cubicOut,
  });
  const scale = tweened(image.initialScale, {
    delay: 100,
    duration: 600,
    easing: cubicOut,
  });

  function handleMouseOver() {
    translateX.set(image.finalX);
    translateY.set(image.finalY);
    rotation.set(image.finalRotation);
    scale.set(image.finalScale);
  }
  function handleMouseLeave() {
    translateX.set(image.initialX);
    translateY.set(image.initialY);
    rotation.set(image.initialRotation);
    scale.set(image.initialScale);
  }
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />


<div
  class="transition-all duration-500 hover:shadow-blue-dark hover:-translate-y-1 shadow-2xl shadow-core flex flex-col justify-between p-4 sm:mb-7 mt-5 h-auto bg-gradient-to-tr from-crust from-50% to-blue-dark to-100% rounded-xl border-4 border-mantle"
  role="main"
  on:mouseover={handleMouseOver}
  on:mouseleave={handleMouseLeave}
  on:focus={handleMouseOver}
  on:blur={handleMouseLeave}
>
  <div>
    <p class="font-body text-lg text-subtext-1 font-semibold mb-3 sm:mb-1">
      {title}
      <span
        class="text-[0.65rem] font-bold bg-peach text-crust px-1 py-[0.05rem] border-2 border-peach-dark rounded-[5px] align-middle"
        >{date}</span
      >
    </p>
    <p class="hidden sm:block text-base font-body text-overlay-0 mb-3">
      {description}
    </p>
  </div>
  <div>
    <a
      href={url}
      class="transition-all text-overlay-1 font-body text-sm border-2 px-2 py-1 rounded-lg border-mantle hover:text-mauve hover:font-bold"
    >
      Visit @ <span>{domain}</span> ->
    </a>
  </div>
</div>

{#if innerWidth > 640}
<div>
  {#each images as image, i (id)}
    <img
      class="invisible absolute rounded-xl xl:visible"
      style="transform: translate({$translateX}rem, {$translateY}rem) rotate({$rotation}deg) scale({$scale});"
      src={image.source}
      alt={image.alt}
    />
  {/each}
</div>
{/if}

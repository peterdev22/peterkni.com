<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

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

<div class="flex flex-col justify-between p-4 my-7 h-28 md:h-60 bg-gradient-to-tr from-crust from-50% to-core to-100% rounded-xl border-4 border-mantle"
  role="main"
  on:mouseover={handleMouseOver}
  on:mouseleave={handleMouseLeave}
  on:focus={handleMouseOver}
  on:blur={handleMouseLeave}
  >
  <div>
    <div class="flex flew-row gap-3 font-body">
    <p class="text-lg text-subtext-1 font-semibold">
      {title}
    </p>
    <!--
    <p class="text-xs text-core font-semibold bg-peach rounded-md p-1 pt-0 border-yellow border-2">
      {date}
    </p>
    -->
    </div>
    <p class="hidden md:block text-base pt-2 font-body text-overlay-0 ">
      {description}
    </p>
  </div>
  <div>
    <a href={url} class="text-overlay-1 font-body text-sm border-2 px-2 py-1 rounded-lg border-mantle hover:text-yellow hover:font-bold">
      Visit <span>{domain}</span> ->
    </a>
  </div>
  {#each images as image, i (id)}
    <img
      style="transform: translate({$translateX}rem, {$translateY}rem) rotate({$rotation}deg) scale({$scale});"
      src={image.source}
      alt={image.alt}
    />
  {/each}
</div>

<style lang="postcss">

</style>

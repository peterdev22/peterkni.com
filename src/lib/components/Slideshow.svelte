<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { flip } from 'svelte/animate';

  let { images } = $props();

  let autoRotate: number; // identifier for auto rotate interval
  let period: number = 5000; // 5 second interval for auto image rotation

  // create interval for auto rotation
  onMount(() => {
    autoRotate = setInterval(() => rotateRight(false), period);
  });

  // reset the auto rotate interval when manual override is used
  const resetPeriod = () => {
    clearInterval(autoRotate);
    autoRotate = setInterval(() => rotateRight(false), period);
  };

  // rotation of images
  function rotateLeft(manualOverride: boolean) {
    images = [images[images.length - 1], ...images.slice(0, images.length - 1)];
    if (manualOverride) {
      resetPeriod();
    }
  }
  function rotateRight(manualOverride: boolean) {
    images = [...images.slice(1), images[0]];
    if (manualOverride) {
      resetPeriod();
    }
  }

  // interval cleanup
  onDestroy(() => {
    clearInterval(autoRotate);
  });

  //find middle of the array
  const middleIndex: number = Math.round(images.length - 1 - images.length / 2);
</script>

<div class="flex justify-center gap-5 md:gap-8 -mx-[40rem]">
  {#each images as image, i (image.id)}
    <div
      class="transition-all delay-200 flex flex-col {i ===
        0 || i === images.length - 1
        ? 'invisible'
        : ''}"
      
      animate:flip={{ duration: 600 }}
    >
      <img src="assets/featured/{image.filename}" alt={image.alt} class="rounded-[1.5rem]"/>
    </div>
  {/each}
</div>

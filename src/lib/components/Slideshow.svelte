<script lang="ts">
  import { PUBLIC_CF_IMAGES } from '$env/static/public';
  import { onMount, onDestroy } from 'svelte';
  import { flip } from 'svelte/animate';

  let { images } = $props();
  let autoRotate: number; // identifier for auto rotate interval
  let period: number = 5000; // 5 second interval for auto image rotation

  // create interval for auto rotation
  onMount(() => {
    autoRotate = setInterval(() => rotateRight(false), period);
  });

  // rotation of images
  function rotateLeft(manualOverride: boolean) {
    images = [images[images.length - 1], ...images.slice(0, images.length - 1)];
  }
  function rotateRight(manualOverride: boolean) {
    images = [...images.slice(1), images[0]];
  }

  // interval cleanup
  onDestroy(() => {
    clearInterval(autoRotate);
  });

  // handle local vs cloudflare pages image paths
  function getImagePath(filename: string, width: string, quality: string) {
    const productionBuild = PUBLIC_CF_IMAGES;

    if (productionBuild == 'true') {
      return `/cdn-cgi/image/format=auto,width=${width},quality=${quality}/assets/featured/${filename}`;
    } else {
      return `/assets/featured/${filename}`;
    }
  }

</script>

<div class="flex justify-center gap-5 md:gap-16 -mx-[60rem]">
  {#each images as image, i (image.id)}
    <div
      class="transition-all delay-200 flex flex-col {i ===
        0 || i === images.length - 1
        ? 'invisible'
        : ''}"
      
      animate:flip={{ duration: 600 }}
    >
      <img src={getImagePath(image.filename, "1080", "90")} alt={image.alt}/>
    </div>
  {/each}
</div>

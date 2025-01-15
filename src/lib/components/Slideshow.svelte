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
      return `/cdn-cgi/image/format=auto,onerror=redirect,width=${width},quality=${quality}/assets/featured/${filename}`;
    } else {
      return `/assets/featured/${filename}`;
    }
  }

</script>

<div class="flex justify-center gap-5 md:gap-16 -mx-[120rem]">
  {#each images as image, i (image.id)}
    <figure
      class="transition-all delay-200 flex flex-col {i ===
        0 || i === images.length - 1
        ? 'invisible'
        : ''}"
      
      animate:flip={{ duration: 600 }}
    >
      <img src={getImagePath(image.filename, "1080", "90")} alt={image.alt} class="h-96 w-96" />

      <figcaption class="flex justify-center font-bold mt-4">
        <a href="/cad#{image.project.split(' - ')[0].toLowerCase()}" class="active:scale-[98%] hover:text-blue-300 transition-all flex flex-col w-96 bg-zinc-950 bg-opacity-50 border-t-2 border-blue-300  text-center  py-2 pb-2.5 px-4 text-white {i !== Math.floor(images.length / 2) ? 'opacity-20' : 'opacity-100'} transition-opacity duration-500">
          <h4 class="tracking-tighter text-xl transition-all">
        {image.project}
          </h4>
          <p class="font-medium text-sm transition-all">
        {image.caption}
          </p>
        </a>
      </figcaption>

    </figure>
    
  {/each}
</div>


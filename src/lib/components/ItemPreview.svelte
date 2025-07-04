<script lang="ts">
  import { scale, fade } from 'svelte/transition';
  import { Tween } from 'svelte/motion';
  import { fromStore } from 'svelte/store';

  import { Canvas } from '@threlte/core';
  import { useProgress } from '@threlte/extras';

  import ModelScene from './ModelScene.svelte';

  // loading 3d model scene
  const { progress } = useProgress();
  const p = fromStore(progress);

  const tweenedProgress = Tween.of(() => p.current, {
    duration: 200,
  });

  const progressPercent = $derived(100 * tweenedProgress.current);
  const progressDone = $derived(tweenedProgress.current >= 1);

  // props
  let { isPreviewOpen = $bindable(), preview, projectName } = $props();
</script>

<!-- BG : DARKEN -->
<div
  class=" bg-black h-full w-full z-20 transition-all fixed top-0 left-0 opacity-95"
  in:fade={{ duration: 200 }}
  out:fade={{ duration: 200 }}
></div>

<!-- UI -->
<div
  class="fixed top-0 left-0 w-full h-full z-30 flex items-center justify-center"
  in:scale={{ duration: 200, start: 0.9 }}
  out:scale={{ duration: 200, start: 0.9 }}
>
  <div
    class="flex flex-col mx-4 gap-10 w-[90%] sm:w-[80%] 2xl:w-[70%] max-w-[80rem]"
  >
    <div class="flex justify-between items-center">
      <button
        onclick={() => {
          isPreviewOpen = !isPreviewOpen;
        }}
        class="select-none flex cursor-pointer
    bg-green-300 hover:bg-white w-fit gap-2 font-bold tracking-tighter transition-all active:scale-95 items-center text-3xl px-2 py-0.5"
      >
        <img
          src="/assets/symbols/exit_man_running_black.svg"
          alt="Black symbol of a man running, representing an exit sign."
          class="w-8 text-black font-normal truncate italic text-xs"
        />
        Exit
      </button>

      <hgroup class="flex flex-col items-end">
        <p
          class="text-lg text-zinc-700 font-bold font-title tracking-tighter -mb-1 selection:text-black selection:bg-zinc-700"
        >
          {preview.type.toUpperCase() === 'VIDEO' ? 'VIDEO' : '3D MODEL'}
        </p>
        <h5
          class="text-2xl text-blue-300 font-bold font-title tracking-tighter selection:text-black selection:bg-blue-300"
        >
          {projectName.toUpperCase()}
        </h5>
      </hgroup>
    </div>

    {#if preview.type == 'video'}
      <!-- svelte-ignore a11y_media_has_caption -->
      <video
        controls
        crossorigin="anonymous"
        width="100%"
        poster={preview.thumbnail}
      >
        <source
          src={preview.source}
          type="video/{preview.source.split('.').pop()}"
        />
      </video>
    {:else if preview.type == 'scene'}
      <div
        class="bg-zinc-950 outline-2 outline-zinc-900 flex items-center justify-center h-[45vh] sm:h-[60vh] 2xl:h-[60vh]"
      >
        {#if progressDone != true}
          <div
            class="absolute text-black text-2xl bg-blue-300 font-bold px-2 py-0.5 -translate-y-3 z-40"
          >
            {Math.round(progressPercent)}%
          </div>
        {/if}

        <Canvas>
          <ModelScene
            source={preview.source}
            cameraPos={preview.cameraPos}
            targetPos={preview.targetPos}
          />
        </Canvas>
      </div>
    {/if}

    <hgroup
      class="flex flex-col gap-2 selection:text-black selection:bg-zinc-500"
    >
      <h4 class="text-xl sm:text-3xl text-zinc-500 font-black tracking-tight">
        {preview.title}
      </h4>
      <p class="text-zinc-500 sm:text-lg font-medium tracking-tight">
        {preview.caption}
      </p>
    </hgroup>
  </div>
</div>

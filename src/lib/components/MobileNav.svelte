<script lang="ts">
  import { fade, scale } from 'svelte/transition';

  let { isMenuOpen = $bindable() } = $props();
</script>

<div
  class="absolute bg-black h-full w-full z-10 transition-all opacity-90"
  in:fade={{ duration: 200 }}
  out:fade={{ duration: 200 }}
></div>

<nav
  class="select-none -mt-3 z-20 bg-black tracking-tight border-2 border-green-300 text-black absolute h-[26rem] flex flex-col gap-2 font-bold text-2xl left-10 right-10 transition-all"
  in:scale={{ duration: 200, start: 0.9 }}
  out:scale={{ duration: 200, start: 0.9 }}
>
  <div
    class="flex
    bg-green-300 gap-2 font-bold tracking-tighter transition-all items-center text-3xl px-2 py-0.5"
  >
    <img
      src="/assets/symbols/exit_man_running_black.svg"
      alt="Black symbol of a man running, representing an exit sign."
      class="w-8 text-black font-normal truncate italic text-xs"
    />
    <h2>Exit Menu</h2>
  </div>
  <div class="mx-8 mt-4 flex flex-col gap-4">
    <h3 class="text-zinc-500 text-2xl font-title font-bold tracking-tighter">
      HOME
    </h3>
    <a
      onclick={() => (isMenuOpen = false)}
      href="/"
      class="bg-white hover:bg-zinc-300 px-3 py-1 transition-all active:scale-95 shrink-0"
      >Dashboard</a
    >
    <h3
      class="text-zinc-500 text-2xl font-title mt-2 font-bold tracking-tighter"
    >
      PROJECTS
    </h3>
    <a
      onclick={() => (isMenuOpen = false)}
      href="/cad"
      class="bg-white hover:bg-blue-300 px-3 py-1 transition-all active:scale-95 shrink-0"
      >CAD</a
    >
    <a
      onclick={() => (isMenuOpen = false)}
      href="/robotics"
      class="bg-white hover:bg-red-400 px-3 py-1 transition-all active:scale-95 shrink-0"
      >Robotics</a
    >
    <a
      onclick={() => (isMenuOpen = false)}
      href="/programming"
      class="bg-white hover:bg-yellow-300 px-3 py-1 transition-all active:scale-95 shrink-0"
      >Programming</a
    >
  </div>
</nav>

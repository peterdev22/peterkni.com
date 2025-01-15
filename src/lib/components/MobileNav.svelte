<script lang="ts">
  import { blur } from 'svelte/transition';

  let { menuOpen = $bindable() } = $props();
</script>

<div
  class="absolute bg-black h-full w-full z-10 transition-all opacity-90"
  in:blur={{ duration: 500 }}
  out:blur={{ duration: 500 }}
></div>

<nav
  class="select-none -mt-3 z-20 bg-black tracking-tight border-2 border-green-300 text-black absolute h-[26rem] flex flex-col gap-2 font-bold text-2xl left-10 right-10 transition-all"
  in:blur={{ duration: 500 }}
  out:blur={{ duration: 500 }}
>
  <div
    class="flex
    bg-green-300 gap-2 font-bold tracking-tighter transition-all items-center text-3xl px-2 py-0.5"
  >
    <img
      src="assets/symbols/exit_man_running_black.svg"
      alt="Black symbol of a man running, representing an exit sign."
      class="w-8"
    />
    <h2>Exit Menu</h2>
  </div>
  <div class="mx-8 mt-4 flex flex-col gap-4">
    <h3 class="text-zinc-500 text-2xl font-title font-bold tracking-tighter">
      HOME
    </h3>
    <a
      onclick={() => (menuOpen = false)}
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
      onclick={() => (menuOpen = false)}
      href="/cad"
      class="bg-white hover:bg-blue-300 px-3 py-1 transition-all active:scale-95 shrink-0"
      >CAD</a
    >
    <a
      onclick={() => (menuOpen = false)}
      href="/robotics"
      class="bg-white hover:bg-red-400 px-3 py-1 transition-all active:scale-95 shrink-0"
      >Robotics</a
    >
    <a
      onclick={() => (menuOpen = false)}
      href="/programming"
      class="bg-white hover:bg-yellow-300 px-3 py-1 transition-all active:scale-95 shrink-0"
      >Programming</a
    >
  </div>
</nav>

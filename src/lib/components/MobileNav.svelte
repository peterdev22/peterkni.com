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
  class="z-20 rounded-2xl bg-gradient-to-tr from-black to-zinc-950 outline outline-1 outline-zinc-900 text-black absolute h-[27rem] flex flex-col gap-5 py-4 px-4 font-bold text-3xl left-10 right-10 transition-all"
  in:blur={{ duration: 500 }}
  out:blur={{ duration: 500 }}
>
  <p class="text-zinc-600 text-xl font-semibold">Main</p>
  <a
    onclick={() => (menuOpen = false)}
    href="/"
    class="bg-white hover:bg-zinc-300 px-3 py-1 transition-all active:scale-95 shrink-0"
    >Home</a
  >
  <p class="text-zinc-600 text-xl font-semibold mt-5">Projects</p>
  <a
  onclick={() => (menuOpen = false)}
    href="/cad"
    class="bg-blue-300 hover:bg-blue-400 px-3 py-1 transition-all active:scale-95 shrink-0"
    >CAD</a
  >
  <a
  onclick={() => (menuOpen = false)}
    href="/robotics"
    class="bg-red-400 hover:bg-red-500 px-3 py-1 transition-all active:scale-95 shrink-0"
    >Robotics</a
  >
  <a
  onclick={() => (menuOpen = false)}
    href="/programming"
    class="bg-yellow-300 hover:bg-yellow-400 px-3 py-1 transition-all active:scale-95 shrink-0"
    >Programming</a
  >
</nav>

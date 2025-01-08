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
  class="-mt-3 z-20 bg-black tracking-tight border-2 border-amber-300 text-black absolute h-[26rem] flex flex-col gap-2 font-bold text-2xl left-10 right-10 transition-all"
  in:blur={{ duration: 500 }}
  out:blur={{ duration: 500 }}
>
  <h2
    class="flex
    bg-amber-300  gap-2 font-bold tracking-tighter transition-all  items-center text-3xl px-2 py-0.5"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      class="w-8"
      viewBox="0 0 16 16"
      ><path
        fill="currentColor"
        d="M14 6h-1.7c-.2 0-.4-.1-.6-.2l-1.3-1.3c-.2-.3-.6-.5-1.1-.5H9c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7l-.2.3h-2c-1.1 0-2.3.5-3 1.5l-.6.8c-.4.4-.2 1 .2 1.3c.4.2.9.1 1.2-.3l.5-.7Q4.55 6 5.3 6h.8l-.7 1.6c-.3.6-.4 1.2-.4 1.9v2c0 .3-.2.5-.5.5H2c-.6 0-1 .4-1 1s.4 1 1 1h3.5c.8 0 1.5-.7 1.5-1.5V10l3.8 4.5c.6.9 1.7 1.5 2.8 1.5h.9L9.1 9.3c-.3-.4-.2-.8 0-1.3l.6-1.5l.7.8c.4.4 1 .7 1.6.7h2c.6 0 1-.4 1-1s-.4-1-1-1"
      /></svg
    >
    <p>Exit Menu</p>
  </h2>
  <div class="mx-8 mt-4 flex flex-col gap-4">
    <p class="text-zinc-500 text-2xl font-title font-bold tracking-tighter">
      HOME
    </p>
    <a
      onclick={() => (menuOpen = false)}
      href="/"
      class="bg-white hover:bg-zinc-300 px-3 py-1 transition-all active:scale-95 shrink-0"
      >Dashboard</a
    >
    <p class="text-zinc-500 text-2xl font-title mt-2 font-bold tracking-tighter">
      PROJECTS
    </p>
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

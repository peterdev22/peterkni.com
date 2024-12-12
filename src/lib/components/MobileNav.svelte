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
  class="z-20 rounded-2xl bg-zinc-950 outline outline-1 outline-zinc-900 text-black absolute h-[27rem] flex flex-col gap-5 py-4 px-4 font-bold text-3xl left-10 right-10 transition-all"
  in:blur={{ duration: 500 }}
  out:blur={{ duration: 500 }}
>
  <p class="text-zinc-600 text-xl font-semibold">Main</p>
  <a
    onclick={() => (menuOpen = false)}
    href="/"
    class="bg-white hover:bg-zinc-300 px-3 py-1 transition-all rounded-2xl active:scale-95 shrink-0"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="inline-block mr-2 mb-[0.25rem]"
      width="2rem"
      height="auto"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"
      /></svg
    >Home</a
  >
  <p class="text-zinc-600 text-xl font-semibold mt-5">Projects</p>
  <a
  onclick={() => (menuOpen = false)}
    href="/cad"
    class="bg-blue-300 hover:bg-blue-400 px-3 py-1 transition-all rounded-2xl active:scale-95 shrink-0"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="inline-block mr-2 mb-[0.25rem]"
      width="2rem"
      height="auto"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M21.22 6.894a3.7 3.7 0 0 0-1.4-1.37l-6-3.31a3.83 3.83 0 0 0-3.63 0l-6 3.31a3.7 3.7 0 0 0-1.4 1.37a3.74 3.74 0 0 0-.52 1.9v6.41a3.79 3.79 0 0 0 1.92 3.27l6 3.3a3.74 3.74 0 0 0 3.63 0l6-3.31a3.72 3.72 0 0 0 1.91-3.26v-6.36a3.64 3.64 0 0 0-.51-1.95m-1 8.31a2.2 2.2 0 0 1-1.14 1.95l-6 3.31q-.158.089-.33.14v-8.18l7.3-4.39c.092.242.136.5.13.76z"
      /></svg
    >CAD</a
  >
  <a
  onclick={() => (menuOpen = false)}
    href="/robotics"
    class="bg-red-400 hover:bg-red-500 px-3 py-1 transition-all rounded-2xl active:scale-95 shrink-0"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="inline-block mr-2 mb-[0.25rem]"
      width="2rem"
      height="auto"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"
      /></svg
    >Robotics</a
  >
  <a
  onclick={() => (menuOpen = false)}
    href="/programming"
    class="bg-yellow-300 hover:bg-yellow-400 px-3 py-1 transition-all rounded-2xl active:scale-95 shrink-0"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="inline-block mr-2 mb-[0.25rem]"
      width="2rem"
      height="auto"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513s-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75"
      /></svg
    >Programming</a
  >
</nav>

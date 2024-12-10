<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';

  let { children } = $props();
  let currentPath: string = $state('');

  // current path for highlighted navlinks
  $effect(() => {
    currentPath = $page.url.pathname;
  });
</script>

<!-- GLOBAL NAVIGATION BAR -->
<header class="p-5 sm:p-10 px-10 xl:px-20 2xl:px-48 py-4 flex justify-center">
  <div class="flex gap-16 items-center justify-center w-[50rem] bg-black py-5 rounded-[2rem] outline outline-1 outline-zinc-950 bg-opacity-80 bg-gradient-to-tr from-black to-zinc-950">
    <a href="/" class="font-bold text-white flex group gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:rotate-6 group-hover:-translate-y-1 transition-all" width="2rem" height="auto" viewBox="0 0 448 512"><path fill="currentColor" d="M96 48L82.7 61.3c-12 12-18.7 28.2-18.7 45.2v132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400h320l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7zm24 68a20 20 0 1 1 40 0a20 20 0 1 1-40 0M22.6 473.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6h370.7c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64z"/></svg>
      <h1 class="text-4xl md:text-4xl transition-all">Peter Knight</h1>
    </a>

    <nav
      class="gap-8 text-xl text-white underline-offset-8 decoration-zinc-600 hidden lg:flex items-center"
    >
      <a
        href="/"
        class="{currentPath == '/'
          ? 'bg-blue-300 text-black px-2 font-medium '
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg"
        >Home</a
      >
      <a
        href="/cad"
        class="{currentPath == '/cad'
          ? 'bg-blue-300 text-black px-2 font-medium'
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg"
        >CAD</a
      >
      <a
        href="/robotics"
        class="{currentPath == '/robotics'
          ? 'bg-blue-300 text-black px-2 font-medium'
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg"
        >Robotics</a
      >
      <a
        href="/programming"
        class="{currentPath == '/programming'
          ? 'bg-blue-300 text-black px-2 font-medium'
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg"
        >Programming</a
      >
    </nav>
  </div>
</header>

<!-- PAGE SPECIFIC CONTENT -->
{@render children()}

<!-- STYLES -->
<style lang="postcss">
  :global(body) {
    @apply bg-black;
    @apply font-sans;
  }
</style>

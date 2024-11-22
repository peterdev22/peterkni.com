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
<header class="p-5 sm:p-10 px-10 xl:px-20 2xl:px-48 py-4">
  <div class="flex gap-16 items-center justify-center">
    <a href="/" class="font-bold text-white">
      <h1 class="text-4xl md:text-4xl">Peter Knight</h1>
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

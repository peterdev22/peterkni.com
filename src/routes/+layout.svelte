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
  <div
    class="flex gap-16 items-center justify-between w-[90rem] px-10 bg-black py-5 rounded-[2rem] outline outline-1 outline-zinc-950 bg-opacity-80 bg-gradient-to-tr from-black to-zinc-950"
  >
    <a
      href="/"
      class="font-bold flex group gap-3 py-1 active:scale-95  px-4 -mx-4 hover:bg-zinc-800 text-white hover:px-4 hover:-mx-4 transition-all rounded-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="group-hover:rotate-6 group-hover:-translate-y-1 transition-all"
        width="2rem"
        height="auto"
        viewBox="0 0 448 512"
        ><path
          fill="currentColor"
          d="M96 48L82.7 61.3c-12 12-18.7 28.2-18.7 45.2v132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400h320l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7zm24 68a20 20 0 1 1 40 0a20 20 0 1 1-40 0M22.6 473.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6h370.7c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64z"
        /></svg
      >
      <h1 class="text-4xl md:text-4xl transition-all">Peter Knight</h1>
    </a>

    <nav
      class="gap-8 text-xl mr-56 text-white underline-offset-8 decoration-zinc-600 hidden lg:flex items-center"
    >
      <a
        href="/cad"
        class="{currentPath == '/cad'
          ? 'bg-blue-300 text-black px-2 font-medium'
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg active:scale-95"
        >CAD</a
      >
      <a
        href="/robotics"
        class="{currentPath == '/robotics'
          ? 'bg-red-300 text-black px-2 font-medium'
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg active:scale-95"
        >Robotics</a
      >
      <a
        href="/programming"
        class="{currentPath == '/programming'
          ? 'bg-yellow-300 text-black px-2 font-medium'
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg active:scale-95"
        >Programming</a
      >
    </nav>

    <a
      href="https://github.com/peterdev22"
      target="_blank"
      aria-label="GitHub"
      class="font-bold flex group gap-3 py-2 active:bg-white active:text-black hover:bg-zinc-800 text-white hover:px-2 hover:-mx-2 transition-all rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="auto"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        /></svg
      >
    </a>
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

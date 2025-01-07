<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';

  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import MobileNav from '$lib/components/MobileNav.svelte';

  let { children } = $props();
  let navMenuEnabled: boolean = $state(false);
  let currentPath: string = $state('');

  // highlight current page in nav bar
  $effect(() => {
    currentPath = $page.url.pathname;
  });

  // prevent scrolling while mobile nav menu is open
  $effect(() => {
    if (navMenuEnabled) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  });

  // close nav menu if window size gets too big
  const handleResize = () => {
    if (window.innerWidth > 1024) {
      navMenuEnabled = false;
    }
  };

  onMount(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleResize);
    };
  });
</script>

<!-- HEADER & NAV BAR -->
<header
  class="p-5 sm:p-10 px-10 xl:px-20 2xl:px-48 sm:py-4 flex justify-center"
>
  <div
    class="flex sm:gap-16 items-center justify-between w-[90rem] sm:px-10 py-5"
  >
    <a
      onclick={() => {
        if (navMenuEnabled == true) {
          navMenuEnabled = false;
        }
      }}
      href="/"
      class="font-bold flex group gap-3 py-1 active:scale-95 px-4 -mx-4 hover:bg-zinc-800 text-white hover:px-4 hover:-mx-4 transition-all rounded-2xl"
    >
      <img src="assets/branding/pk_white.svg" alt="" class="group-hover:rotate-6 group-hover:-translate-y-1 transition-all w-[3.5rem]">
      
    </a>

    <!-- <nav
      class="gap-8 text-xl xl:mr-56 text-white underline-offset-8 decoration-zinc-600 hidden lg:flex items-center font-semibold"
    >
      <a
        href="/"
        class="{currentPath == '/'
          ? 'bg-white text-black px-2'
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg active:scale-95"
        >Home</a
      >
      <a
        href="/cad"
        class="{currentPath == '/cad'
          ? 'bg-blue-300 text-black px-2'
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg active:scale-95"
        >CAD</a
      >
      <a
        href="/robotics"
        class="{currentPath == '/robotics'
          ? 'bg-red-400 text-black px-2 '
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg active:scale-95"
        >Robotics</a
      >
      <a
        href="/programming"
        class="{currentPath == '/programming'
          ? 'bg-yellow-300 text-black px-2 '
          : 'hover:bg-zinc-800 hover:px-2 hover:-mx-2'} transition-all rounded-lg active:scale-95"
        >Programming</a
      >
    </nav> -->

    <!-- <a
      href="https://github.com/peterdev22"
      target="_blank"
      aria-label="GitHub"
      class="hidden xl:flex font-bold group gap-3 py-2 active:bg-white active:text-black hover:bg-zinc-800 text-white hover:px-2 hover:-mx-2 transition-all rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="100%"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        /></svg
      >
    </a> -->

    <button
      onclick={() => {
        navMenuEnabled = !navMenuEnabled;
      }}
      class="lg:hidden p-2 h-14 flex justify-center bg-white hover:bg-zinc-300 rounded-2xl transition-all active:scale-95"
    >
      <div class="w-10 h-10 flex justify-center items-center">
        {#if !navMenuEnabled}
          <img
            src="assets/icons/menu_icon.svg"
            aria-label="Open navigation menu."
            alt="Three horizontal lines, representing a menu."
            in:scale
            class="absolute w-9"
          />
        {/if}
        {#if navMenuEnabled}
          <img
            src="assets/icons/close_menu_icon.svg"
            aria-label="Close navigation menu."
            alt="An 'X' icon, representing a close button."
            in:scale
            class="absolute w-9"
          />
        {/if}
      </div>
    </button>
  </div>
</header>

<!-- MOBILE NAV MENU -->
{#if navMenuEnabled}
  <MobileNav bind:menuOpen={navMenuEnabled} />
{/if}

<!-- PAGE SPECIFIC CONTENT -->
{@render children()}

<!-- FOOTER -->
<footer
  class="mt-40 mb-10 px-10 lg:px-28 xl:px-52 2xl:px-72 flex justify-center"
>
  <div class="flex flex-col items-center">
    <img src="assets/branding/pk_grey_nodetail.svg" class="w-8 m-2" alt="Peter Knight logo" />
    <a href="/" class="hover:text-zinc-400 transition-all text-zinc-700 font-bold">Peter Knight</a>
    <p class="text-zinc-700 text-xs font-bold -mt-1">2022-2025</p>
  </div>
</footer>

<!-- GLOBAL STYLES -->
<style lang="postcss">
  :global(body) {
    @apply bg-[#040405];
    @apply font-sans;
  }
</style>

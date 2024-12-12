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
  class="p-5 sm:p-10 px-10 xl:px-20 2xl:px-48 sm:py-4 flex justify-cente bg-gradient-to-tr sm:bg-none from-black to-zinc-950 border-b-1 border-zinc-950 border sm:border-none sm:bg-black py-0 mb-8"
>
  <div
    class="flex sm:gap-16 items-center justify-between scrol w-[90rem] sm:px-10 py-5 rounded-[2rem] sm:outline outline-1 outline-zinc-950 bg-opacity-80 sm:bg-gradient-to-tr from-black to-zinc-950"
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="group-hover:rotate-6 group-hover:-translate-y-1 transition-all w-[1.5rem] sm:w-[2rem]"
        viewBox="0 0 448 512"
        ><path
          fill="currentColor"
          d="M96 48L82.7 61.3c-12 12-18.7 28.2-18.7 45.2v132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400h320l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7zm24 68a20 20 0 1 1 40 0a20 20 0 1 1-40 0M22.6 473.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6h370.7c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64z"
        /></svg
      >
      <h1 class="text-2xl sm:text-4xl md:text-4xl transition-all">
        Peter Knight
      </h1>
    </a>

    <nav
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
    </nav>

    <a
      href="https://github.com/peterdev22"
      target="_blank"
      aria-label="GitHub"
      class="hidden xl:flex font-bold group gap-3 py-2 active:bg-white active:text-black hover:bg-zinc-800 text-white hover:px-2 hover:-mx-2 transition-all rounded-full"
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
  <div class="flex flex-col gap-16 items-center">
    <p
      class="text-yellow-300 font-semibold text-xl -rotate-1 underline underline-offset-[0.5rem]"
    >
      Thanks!
    </p>
    <a
      href="/"
      class="text-xl font-semibold active:scale-95 transition-all hover:text-zinc-600 hover:outline-zinc-800 text-zinc-700 outline outline-1 outline-zinc-900 bg-gradient-to-tr from-black to-zinc-950 rounded-xl text-center w-fit px-5 py-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block mr-2 mb-[0.25rem]"
        width="1rem"
        height="auto"
        viewBox="0 0 448 512"
        ><path
          fill="currentColor"
          d="M96 48L82.7 61.3c-12 12-18.7 28.2-18.7 45.2v132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400h320l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7zm24 68a20 20 0 1 1 40 0a20 20 0 1 1-40 0M22.6 473.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6h370.7c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64z"
        /></svg
      >Peter Knight · 2024
    </a>
  </div>
</footer>

<!-- GLOBAL STYLES -->
<style lang="postcss">
  :global(body) {
    @apply bg-black;
    @apply font-sans;
  }
</style>

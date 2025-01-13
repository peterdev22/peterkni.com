<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { onNavigate } from '$app/navigation';

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
      document.body.classList.add('touch-none');
    } else {
      document.body.classList.remove('overflow-y-hidden');
      document.body.classList.remove('touch-none');
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

  // view transition API (not supported on Firefox yet)
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<!-- HEADER & NAV BAR -->
<header
  class="p-5 sm:p-10 px-10 xl:px-20 2xl:px-48 sm:py-4 flex justify-center"
>
  <div
    class="flex sm:gap-16 items-center justify-between lg:justify-center w-[90rem] sm:px-10 py-5"
  >
    <a
      onclick={() => {
        if (navMenuEnabled == true) {
          navMenuEnabled = false;
        }
      }}
      href="/"
      class="font-bold flex group flex-col items-center tracking-tight active:scale-95 text-zinc-800 transition-all"
    >
      <img
        src="assets/branding/pk_white.svg"
        alt=""
        class="group-hover:rotate-6 group-hover:-translate-y-1 transition-all w-[3.5rem]"
      />
    </a>

    <button
      onclick={() => {
        navMenuEnabled = !navMenuEnabled;
      }}
      class="lg:hidden p-2 h-14 flex justify-center text-white transition-all active:scale-95"
    >
      <div class="w-10 h-10 flex justify-center items-center">
        {#if !navMenuEnabled}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            class="absolute w-8 -translate-y-1"
            viewBox="0 0 16 16"
            in:scale
            out:scale
            ><path
              fill="currentColor"
              d="M14 6h-1.7c-.2 0-.4-.1-.6-.2l-1.3-1.3c-.2-.3-.6-.5-1.1-.5H9c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7l-.2.3h-2c-1.1 0-2.3.5-3 1.5l-.6.8c-.4.4-.2 1 .2 1.3c.4.2.9.1 1.2-.3l.5-.7Q4.55 6 5.3 6h.8l-.7 1.6c-.3.6-.4 1.2-.4 1.9v2c0 .3-.2.5-.5.5H2c-.6 0-1 .4-1 1s.4 1 1 1h3.5c.8 0 1.5-.7 1.5-1.5V10l3.8 4.5c.6.9 1.7 1.5 2.8 1.5h.9L9.1 9.3c-.3-.4-.2-.8 0-1.3l.6-1.5l.7.8c.4.4 1 .7 1.6.7h2c.6 0 1-.4 1-1s-.4-1-1-1"
            /></svg
          >
          <p
            class="font-black tracking-tighter text-xs translate-y-5"
            in:scale
            out:scale
          >
            Menu
          </p>
        {/if}
        {#if navMenuEnabled}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            in:scale
            class="absolute w-12"
            ><path
              fill="currentColor"
              d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
            /></svg
          >
        {/if}
      </div>
    </button>
  </div>
</header>

<!-- MOBILE NAV MENU -->
{#if navMenuEnabled}
  <MobileNav bind:menuOpen={navMenuEnabled} />
{/if}

<!-- PAGE SNIPPET -->
{@render children()}

<!-- FOOTER -->
<footer
  class="mt-40 mb-10 px-10 lg:px-28 xl:px-52 2xl:px-72 flex justify-center"
>
  <div class="flex flex-col items-center">
    <img
      src="assets/branding/pk_grey_nodetail.svg"
      class="w-8 m-2"
      alt="Peter Knight logo"
    />
    <a
      href="/"
      class="hover:text-zinc-400 transition-all text-zinc-700 font-bold"
      >Peter Knight</a
    >
    <p class="text-zinc-700 text-xs font-bold -mt-1">2022-2025</p>
  </div>
</footer>

<!-- GLOBAL STYLES -->
<style lang="postcss">
  /* general */
  :global(body) {
    @apply bg-[#040405];
    @apply font-sans;
  }

  /* view transitions */
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-top {
    from {
      transform: translateY(10px);
    }
  }

  @keyframes slide-down {
    to {
      transform: translateY(-10px);
    }
  }

  :root::view-transition-old(root) {
    animation:
      90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-down;
  }

  :root::view-transition-new(root) {
    animation:
      210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-top;
  }
</style>

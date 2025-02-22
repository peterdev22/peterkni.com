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
  class="select-none p-5 sm:p-10 px-10 xl:px-20 2xl:px-48 sm:py-4 flex justify-center"
>
  <nav
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
        src="/assets/branding/pk_white.svg"
        alt="White symbol with a lower case p and k, with a line connected and perpendicular to the top of the k reaching above the p. Represnts the initials of Peter Knight."
        class="group-hover:rotate-6 group-hover:-translate-y-1 transition-all w-[3.5rem] text-white font-normal truncate italic text-xs"
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
          <img
            src="/assets/symbols/exit_man_running_white.svg"
            alt="White symbol of a man running, representing an exit sign."
            class="w-8 absolute -translate-y-1 text-white font-normal truncate italic text-xs"
            in:scale
            out:scale
          />
          <p
            class="font-black tracking-tighter text-xs translate-y-5"
            in:scale
            out:scale
          >
            Menu
          </p>
        {/if}
        {#if navMenuEnabled}
          <img
            src="/assets/symbols/cross_white.svg"
            alt="White symbol of a cross as an indicator to close the menu."
            class="absolute w-12 text-white font-normal truncate italic text-xs"
            in:scale
          />
        {/if}
      </div>
    </button>
  </nav>
</header>

<!-- MOBILE NAV MENU -->
{#if navMenuEnabled}
  <MobileNav bind:menuOpen={navMenuEnabled} />
{/if}

<!-- PAGE SNIPPET -->
{@render children()}

<!-- FOOTER -->
<footer
  class="selection:text-black selection:bg-zinc-700 mt-40 mb-10 px-10 lg:px-28 xl:px-52 2xl:px-72 flex justify-center"
>
  <div class="flex flex-col items-center">
    <img
      src="/assets/branding/pk_grey_nodetail.svg"
      class="w-8 m-2 text-zinc-700 font-normal truncate italic text-xs"
      alt="Dark grey symbol with a lower case p and k, with a line connected and perpendicular to the top of the k reaching above the p. Represnts the initials of Peter Knight."
    />
    <a
      href="/"
      class="hover:text-zinc-400 transition-all text-zinc-700 font-bold active:scale-95"
      >Peter Knight</a
    >
    <p class="text-zinc-700 text-xs font-bold -mt-1">2022-2025</p>
  </div>
</footer>

<!-- GLOBAL STYLES -->
<style>
  /* general */
  :global(body) {
    background-color: #040405;
    font-family: (--font-sans);
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

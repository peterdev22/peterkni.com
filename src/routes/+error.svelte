<script lang="ts">
  /* modules & data */
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  /* shuffleText of title on page load */
  const letters = "abcdefghijklmnopqrstuvwxyz~/1234567890";
  let interval: any;
  let title: any;

  onMount(() => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      title.innerText = title.innerText
        .split("")
        .map((letter: any, index: any) => {
          if (index < iteration) {
            return title.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 31)];
        })
        .join("");

      if (iteration >= title.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 35);
  });
</script>

<svelte:head>
  <meta name="description" content={$page.error?.message} />
  <title>Peter // {$page.status}</title>
</svelte:head>

<div class="row zoom-fade-in">
  <div class="col-3" />
  <div class="col-6">
    <h1
      style="color: rgb(255, 126, 126); font-size: 50px; margin-bottom: 0px;"
      data-value="{$page.status} error"
      bind:this={title}
    >
      {$page.status} error
    </h1>
    <h2>{$page.error?.message}</h2>
    <br />

    <p>
      <a href="/" class="home-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
          class="icon"
        >
          <path
            fill="currentColor"
            d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
          />
          <path
            fill="currentColor"
            d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"
          />
        </svg>
        Home
      </a>
    </p>

    <p>
      <a href="https://youtu.be/dQw4w9WgXcQ" class="nothome-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="256"
          viewBox="0 0 256 256"
          class="icon"
        >
          <path
            fill="currentColor"
            d="M144 180a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm92-52A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108Zm-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84Zm-84-64c-24.26 0-44 17.94-44 40v4a12 12 0 0 0 24 0v-4c0-8.82 9-16 20-16s20 7.18 20 16s-9 16-20 16a12 12 0 0 0-12 12v8a12 12 0 0 0 23.73 2.56C158.31 137.88 172 122.37 172 104c0-22.06-19.74-40-44-40Z"
          />
        </svg>
        ???
      </a>
    </p>
  </div>
  <div class="col-3" />
</div>

<style>
  /* everything */
  :root {
    background-color: #11111b;
    text-shadow: 0px 0px 250px #605e80;
    margin-left: 20px;
  }

  /* headers & text  */
  h1 {
    font-family: "JetBrainsMono", monospace;
    font-size: xx-large;
    font-weight: 700;

    color: #bac2de;

    margin-top: 20vmin;
  }
  h2 {
    font-family: "JetBrainsMono", monospace;
    font-size: x-large;
    font-weight: 700;

    color: #6c7284;
  }
  p {
    font-family: "JetBrainsMono", monospace;
    font-size: large;
    font-weight: 400;

    color: #bac2de;
  }

  /* clickable links */
  a {
    text-decoration: none;
    color: #bac2de;
    transition: color 0.3s, margin-left 0.4s;
  }
  a:hover {
    color: #caa4f7;
    text-shadow: 0px 0px 120px #caa4f7;
    margin-left: 5px;
  }
  .icon {
    width: 25px;
    height: 25px;
    margin-bottom: -5px;
  }
  .home-link {
    font-weight: 500;
    color: #6c7284;
  }
  .nothome-link {
    font-weight: 500;
    color: #6c7284;
  }

  /* responsive resizing (mobile first) */
  * {
    box-sizing: border-box;
  }
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
  [class*="col-"] {
    width: 100%;
    float: left;
    padding: 15px;
  }
  @media only screen and (min-width: 768px) {
    .col-1 {
      width: 8.33%;
    }
    .col-2 {
      width: 16.66%;
    }
    .col-3 {
      width: 25%;
    }
    .col-4 {
      width: 33.33%;
    }
    .col-5 {
      width: 41.66%;
    }
    .col-6 {
      width: 50%;
    }
    .col-7 {
      width: 58.33%;
    }
    .col-8 {
      width: 66.66%;
    }
    .col-9 {
      width: 75%;
    }
    .col-10 {
      width: 83.33%;
    }
    .col-11 {
      width: 91.66%;
    }
    .col-12 {
      width: 100%;
    }
  }
  /* animations */
  .zoom-fade-in {
    opacity: 0; /* Start with the text hidden */
    animation: zoomFadeIn 1s forwards; /* Apply the animation with a duration of 1 second */
  }
  @keyframes zoomFadeIn {
    0% {
      transform: scale(0.95); /* Start with a smaller size */
      opacity: 0; /* Start with the text hidden */
    }
    100% {
      transform: scale(1); /* End with the original size */
      opacity: 1; /* Fully visible */
    }
  }
</style>
